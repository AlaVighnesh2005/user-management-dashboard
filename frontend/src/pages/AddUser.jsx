import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

function AddUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    street: '',
    city: '',
    zipcode: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      await axios.post(API_URL, formData);
      alert('User added successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error adding user:', error);
      alert(error.response?.data?.message || 'Failed to add user');
    }
  };

  return (
    <div className="form-page">
      <h1>Add New User</h1>
      
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label> Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        <div className="form-group">
          <label> Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="form-group">
          <label> Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="form-group">
          <label> Company *</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
            required
          />
        </div>

        <div className="form-group">
          <label> Street Address *</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Enter street address"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label> City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              required
            />
          </div>

          <div className="form-group">
            <label> Pincode *</label>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              placeholder="Enter zipcode"
              required
            />
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-submit">
            Add User
          </button>
          <button 
            type="button" 
            onClick={() => navigate('/')} 
            className="btn btn-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;