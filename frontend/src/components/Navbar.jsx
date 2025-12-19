import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          <span>User Manager</span>
        </Link> 
        <Link to="/add" className="add-btn">
          Add User
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;