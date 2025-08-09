import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css"; 

const Header = () => {
  const navigate = useNavigate();

  const handleUsersClick = () => {
    alert("Navigating to Users page...");
    navigate("/users");
  };

  const handleTodoClick = () => {
    alert("Navigating to Todo page...");
    navigate("/todo");
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <button className="users-btn" onClick={handleUsersClick}>
          Go to Users
        </button>
        
      </div>
    </nav>
  );
};

export default Header;
