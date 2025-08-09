import React, { useReducer, useState } from 'react'

const initTodo = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
      
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
}

const Todo = () => {
  const [todo, dispatch] = useReducer(todoReducer, initTodo);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div>
      <h2>TODO LIST</h2>
      <div>
        <input 
          type='text' 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder='add a todo here ... ' 
        />
        <button className="users-btn" onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todo.map((todo) => (
          <li key={todo.id}> 
            <span 
              onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
            <button className="users-btn" onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
