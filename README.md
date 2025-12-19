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

## Screenshots
<img width="2559" height="1437" alt="Screenshot 2025-12-19 154318" src="https://github.com/user-attachments/assets/4c2b395f-5448-40e1-b9c9-d67f63fb263a" />
<img width="2557" height="1439" alt="Screenshot 2025-12-19 154338" src="https://github.com/user-attachments/assets/a1826419-b832-4be2-adea-521291da4e37" />
<img width="2559" height="1437" alt="Screenshot 2025-12-19 154606" src="https://github.com/user-attachments/assets/634af23d-dd5a-4b21-9536-c54e679e7720" />
<img width="2555" height="1439" alt="Screenshot 2025-12-19 154619" src="https://github.com/user-attachments/assets/7416148b-a7d8-4860-b164-de1c2786b6e4" />
<img width="2555" height="1438" alt="Screenshot 2025-12-19 154638" src="https://github.com/user-attachments/assets/a027e364-8d3d-4648-922b-6f4d0b6f274a" />
<img width="2559" height="1439" alt="Screenshot 2025-12-19 154739" src="https://github.com/user-attachments/assets/95d5e7a4-0381-4798-a9ff-f25f6ef2e0ca" />
