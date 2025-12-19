import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

function ViewUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user:', error);
      alert('Failed to load user data');
      navigate('/');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        alert('User deleted successfully!');
        navigate('/');
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user');
      }
    }
  };

  if (loading) {
    return <div className="loading">⏳ Loading...</div>;
  }

  return (
    <div className="view-page">
      <h1>User Details</h1>
      
      <div className="user-details">
        <div className="detail-row">
          <span className="label"> Name:</span>
          <span className="value">{user.name}</span>
        </div>

        <div className="detail-row">
          <span className="label"> Email:</span>
          <span className="value">{user.email}</span>
        </div>

        <div className="detail-row">
          <span className="label"> Phone:</span>
          <span className="value">{user.phone}</span>
        </div>

        <div className="detail-row">
          <span className="label"> Company:</span>
          <span className="value">{user.company}</span>
        </div>

        <div className="detail-row">
          <span className="label"> Street:</span>
          <span className="value">{user.street}</span>
        </div>

        <div className="detail-row">
          <span className="label"> City:</span>
          <span className="value">{user.city}</span>
        </div>

        <div className="detail-row">
          <span className="label"> Pincode:</span>
          <span className="value">{user.zipcode}</span>
        </div>


        <div className="detail-row">
          <span className="label"> Created:</span>
          <span className="value">
            {new Date(user.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
      </div>

      <div className="action-buttons">
        <Link to={`/edit/${user._id}`} className="btn btn-edit">
          Edit User
        </Link>
        <button onClick={handleDelete} className="btn btn-delete">
          Delete User
        </button>
        <button onClick={() => navigate('/')} className="btn btn-back">
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default ViewUser;