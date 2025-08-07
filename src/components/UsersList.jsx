import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []); 

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link> 
                </li>
                
            ))}
        </ul>
    );
};

export default UserList;
