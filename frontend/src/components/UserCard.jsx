import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user, onDelete }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p><strong> Company:</strong> {user.company}</p>
      <p><strong> Email:</strong> {user.email}</p>
      <p><strong> Phone:</strong> {user.phone}</p>
      <p><strong> Location:</strong> {user.city}</p>
      
      <div className="card-buttons">
        <Link to={`/view/${user._id}`} className="btn btn-view">
          View
        </Link>
        <Link to={`/edit/${user._id}`} className="btn btn-edit">
          Edit
        </Link>
        <button 
          onClick={() => onDelete(user._id)} 
          className="btn btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;