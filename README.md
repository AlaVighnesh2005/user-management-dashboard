User Management Dashboard (MERN Stack)

This repository contains a full-stack User Management Dashboard developed as part of an internship/assignment project. The application allows users to be created, viewed, edited, and deleted through a dashboard interface. It is built using React for the frontend and Node.js/Express with MongoDB for the backend. The project demonstrates full-stack development skills such as API design, routing, validation, database modeling, and UI handling.

Features

Display all users in dashboard format

Create new user records

Edit existing user information

Delete user data

View detailed user profiles

Search users by name, email, or company

REST API integration

Responsive interface design

Persistent database storage using MongoDB

Tech Stack
Frontend

React.js

React Router DOM

Axios

CSS3

Backend

Node.js

Express.js

MongoDB with Mongoose

dotenv

CORS

Folder Structure
user-management-dashboard/
│
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── Users.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
└── frontend/
    ├── public/
    │   └── index.html
    │
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   └── UserCard.js
    │   │
    │   ├── pages/
    │   │   ├── Home.js
    │   │   ├── AddUser.js
    │   │   ├── EditUser.js
    │   │   └── ViewUser.js
    │   │
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    │
    ├── package.json
    └── .gitignore

Getting Started
Clone this repository
git clone https://github.com/your-username/user-management-dashboard.git
cd user-management-dashboard

Backend Setup

Navigate to the backend folder:

cd backend


Install backend dependencies:

npm install


Create an .env file:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/user-management


Run backend server:

npm start


API will run at:
http://localhost:5000/

Frontend Setup

Navigate to the frontend folder:

cd ../frontend


Install frontend dependencies:

npm install


Run frontend app:

npm start


App will open at:
http://localhost:3000/

API Reference

GET all users

GET /api/users


GET user by ID

GET /api/users/:id


Create user

POST /api/users


Update user

PUT /api/users/:id


Delete user

DELETE /api/users/:id

Project Purpose

The purpose of this project is to demonstrate the development of a complete working full-stack web application using the MERN stack. It includes CRUD operations, routing, form validation, RESTful APIs, database modeling, and a responsive user interface.

This assignment highlights knowledge in:

Full-stack architecture

REST API communication

UI/UX design

State management with React hooks

MongoDB data persistence

Error handling and validations

Screenshots (Optional)

Screenshots such as dashboard, add user form, edit user page, and view user details can be included here if required.
