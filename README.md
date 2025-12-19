User Management Dashboard (MERN Stack)

This repository contains a full-stack User Management Dashboard developed as part of an internship/assignment project. The application allows users to be created, viewed, edited, and deleted through a dashboard interface. It is built using React for the frontend and Node.js/Express with MongoDB for the backend. The project demonstrates full-stack development skills such as API design, routing, validation, database modeling, and UI handling.

Features

This project includes the following functionalities:

• Display all users in dashboard format
• Create new user records
• Edit existing user information
• Delete user data
• View detailed user profiles
• Search users by name, email, or company
• REST API integration
• Responsive interface design
• Persistent database storage using MongoDB

Tech Stack

Frontend
• React.js (functional components + hooks)
• React Router DOM
• Axios
• CSS3

Backend
• Node.js
• Express.js
• MongoDB with Mongoose
• dotenv
• CORS

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


The project is divided into two separate folders for the frontend and backend to maintain clarity and scalability.

Getting Started
Clone this repository
git clone https://github.com/your-username/user-management-dashboard.git
cd user-management-dashboard

Backend Setup

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Create an environment file named .env containing:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/user-management


Start the backend development server:

npm start


The backend API will run at:
http://localhost:5000/

Frontend Setup

Navigate to the frontend folder:

cd ../frontend


Install frontend dependencies:

npm install


Start the React development server:

npm start


The application will open at:
http://localhost:3000/

API Reference

Available REST endpoints:

GET
/api/users
Returns all users from database.

GET
/api/users/:id
Returns a user by ID.

POST
/api/users
Creates a new user.

PUT
/api/users/:id
Updates an existing user.

DELETE
/api/users/:id
Deletes a user.

Project Purpose

The purpose of this project is to demonstrate a complete working full-stack web application using the MERN stack. It includes both frontend and backend workflows, CRUD operations, database integration, input validation, modular architecture, and error handling. The app design focuses on readability, usability, responsiveness, and smooth workflow.

This assignment/project also showcases understanding of:

• Full-stack architecture
• REST API communication
• UI/UX handling
• Form and data validation
• State management using React hooks
• MongoDB data persistence

Screenshots (Optional Section)

Dashboard view, add user form, edit page, or profile page screenshots can be included here if required.
