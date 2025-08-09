import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Users from "./pages/users";
import About from "./pages/about";
import UserDetails from "./pages/UserDetails";
import ErrorPages from "./pages/ErrorPages";
import BuggyComponent from "./components/BuggyComponent";
import Todo from "./components/Todo";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/error" element={<BuggyComponent />} />
        <Route path="/about" element={<About />} /> 
       <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<ErrorPages />} /> 
      </Routes>

    </>
  );
};

export default App;
