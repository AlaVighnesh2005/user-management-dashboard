import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

const API_URL = 'http://localhost:5000/api/users';

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all users when page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Failed to load users');
      setLoading(false);
    }
  };

  // Delete user function
  const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setUsers(users.filter(user => user._id !== id));
        alert('User deleted successfully!');
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user');
      }
    }
  };

  // Filter users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  return (
    <div className="home">
      <h1> User Dashboard</h1>
      
      <div className="search-box">
        <input
          type="text"
          placeholder="earch by name, email, or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="stats">
        <div className="stat">
          <h2>{users.length}</h2>
          <p>Total Users</p>
        </div>
        <div className="stat">
          <h2>{filteredUsers.length}</h2>
          <p>Search Results</p>
        </div>
      </div>

      {filteredUsers.length === 0 ? (
        <div className="no-data">
          {users.length === 0 ? (
            <p>No users found. Click "Add User" to create your first user!</p>
          ) : (
            <p>No users match your search. Try a different keyword.</p>
          )}
        </div>
      ) : (
        <div className="user-grid">
          {filteredUsers.map(user => (
            <UserCard 
              key={user._id} 
              user={user} 
              onDelete={deleteUser}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;