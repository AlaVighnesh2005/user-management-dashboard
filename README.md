# User Management Dashboard (MERN Stack)

This repository contains a full-stack User Management Dashboard developed as part of an internship/assignment project. It allows users to be created, viewed, edited, and deleted through a dashboard interface. The frontend is built using React, and the backend uses Node.js/Express with MongoDB.

---

## Features

- Display all users on dashboard layout  
- Create new user records  
- Edit existing user information  
- Delete user data  
- View detailed user profiles  
- Search users by name, email, or company  
- REST API integration  
- Responsive user interface  
- Persistent storage using MongoDB  

---

## Tech Stack

### Frontend
- React.js (functional components + hooks)  
- React Router DOM  
- Axios  
- CSS3  

### Backend
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- dotenv  
- CORS  

---

## Folder Structure
```text
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
```
