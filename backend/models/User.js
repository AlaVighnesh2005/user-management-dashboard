// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Name is required'],
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//       lowercase: true,
//       trim: true,
//       match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
//     },
//     phone: {
//       type: String,
//       required: [true, 'Phone is required'],
//       trim: true,
//     },
//     company: {
//       type: String,
//       required: [true, 'Company is required'],
//       trim: true,
//     },
//     address: {
//       street: {
//         type: String,
//         required: [true, 'Street address is required'],
//       },
//       city: {
//         type: String,
//         required: [true, 'City is required'],
//       },
//       zipcode: {
//         type: String,
//         required: [true, 'Zipcode is required'],
//       },
//       geo: {
//         lat: {
//           type: String,
//           default: '0',
//         },
//         lng: {
//           type: String,
//           default: '0',
//         },
//       },
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

// Define what a User looks like in our database
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  latitude: {
    type: String,
    default: '0'
  },
  longitude: {
    type: String,
    default: '0'
  }
}, {
  timestamps: true // This automatically adds createdAt and updatedAt
});

module.exports = mongoose.model('User', userSchema);