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

---

## Getting Started

### Clone this repository

```bash
git clone https://github.com/your-username/user-management-dashboard.git
cd user-management-dashboard
```

## Backend Setup

### Navigate to the backend folder:
```bash
cd backend
npm install
```
## Create .env file
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/user-management
```
## Start Backend Server
```bash
npm start
```

## Frontend Setup

```bash
cd frontend
npm install
npm start
```
### once started, the frontend will run at:
```bash
http://localhost:3000
```

## API Endpoints
```table
| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| GET    | /api/users     | Fetch all users     |
| GET    | /api/users/:id | Get a single user   |
| POST   | /api/users     | Create new user     |
| PUT    | /api/users/:id | Update user details |
| DELETE | /api/users/:id | Remove user         |
```
