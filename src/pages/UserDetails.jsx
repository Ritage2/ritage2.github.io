import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>

            
            <Link to="/">
                <button className="users-btn">Go Back</button>
            </Link>
        </div>
    );
};

export default UserDetail;
