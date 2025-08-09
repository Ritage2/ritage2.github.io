import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.id) {
          
          navigate("/error");
        } else {
          setUser(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        navigate("/error"); 
      });
  }, [id, navigate]);

  
  if (!user) return null;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <Link to="/">Back to Users</Link>
    </div>
  );
};

export default UserDetails;
