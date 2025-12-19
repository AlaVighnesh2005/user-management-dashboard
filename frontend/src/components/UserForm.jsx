import React, { useState } from 'react';
import './UserForm.css';

const UserForm = ({ initialData, onSubmit, loading }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: '',
      email: '',
      phone: '',
      company: '',
      address: {
        street: '',
        city: '',
        zipcode: '',
      },
    }
  );

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.address.street.trim()) newErrors.street = 'Street is required';
    if (!formData.address.city.trim()) newErrors.city = 'City is required';
    if (!formData.address.zipcode.trim()) newErrors.zipcode = 'Pincode is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [parent, child, grandchild] = name.split('.');
      if (grandchild) {
        setFormData({
          ...formData,
          [parent]: {
            ...formData[parent],
            [child]: {
              ...formData[parent][child],
              [grandchild]: value,
            },
          },
        });
      } else {
        setFormData({
          ...formData,
          [parent]: {
            ...formData[parent],
            [child]: value,
          },
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user starts typing
    if (errors[name] || errors[name.split('.').pop()]) {
      setErrors({ ...errors, [name]: '', [name.split('.').pop()]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone *</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Company *</label>
          <input
            type="text"
            name="company"
            className="form-control"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
          />
          {errors.company && <span className="error-message">{errors.company}</span>}
        </div>
      </div>

      <div className="form-section">
        <h3>Address Information</h3>
        
        <div className="form-group">
          <label>Street *</label>
          <input
            type="text"
            name="address.street"
            className="form-control"
            value={formData.address.street}
            onChange={handleChange}
            placeholder="Enter street address"
          />
          {errors.street && <span className="error-message">{errors.street}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City *</label>
            <input
              type="text"
              name="address.city"
              className="form-control"
              value={formData.address.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
            {errors.city && <span className="error-message">{errors.city}</span>}
          </div>

          <div className="form-group">
            <label>Pincode *</label>
            <input
              type="text"
              name="address.zipcode"
              className="form-control"
              value={formData.address.zipcode}
              onChange={handleChange}
              placeholder="Enter pincode"
            />
            {errors.zipcode && <span className="error-message">{errors.zipcode}</span>}
          </div>
        </div>

    
      </div>

      <button type="submit" className="btn btn-success btn-submit" disabled={loading}>
        {loading ? 'Saving...' : initialData ? 'Update User' : 'Create User'}
      </button>
    </form>
  );
};

export default UserForm;