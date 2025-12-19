// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/database');
// const userRoutes = require('./routes/Users');

// // Load environment variables
// dotenv.config();

// // Connect to database
// connectDB();

// // Initialize express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use('/api/users', userRoutes);

// // Health check route
// app.get('/', (req, res) => {
//   res.json({ message: 'User Management API is running!' });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ 
//     success: false, 
//     message: 'Something went wrong!',
//     error: process.env.NODE_ENV === 'development' ? err.message : undefined
//   });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });

// Import packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const userRoutes = require('./routes/Users');

// Create Express app
const app = express();

// Middleware - allows us to read JSON data
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB Error:', err.message));

// Routes
app.use('/api/users', userRoutes);

// Home route - just to test if server is working
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});