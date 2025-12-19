import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    street: '',
    city: '',
    zipcode: '',
  });

  // Fetch user data when page loads
  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      const user = response.data;
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        company: user.company,
        street: user.street,
        city: user.city,
        zipcode: user.zipcode
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user:', error);
      alert('Failed to load user data');
      navigate('/');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API_URL}/${id}`, formData);
      alert('User updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating user:', error);
      alert(error.response?.data?.message || 'Failed to update user');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="form-page">
      <h1>Edit User</h1>
      
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label> Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
              required
            />
          </div>
        </div>


        <div className="form-buttons">
          <button type="submit" className="btn btn-submit">
            Update User
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

export default EditUser;