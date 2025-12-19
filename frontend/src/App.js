import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import ViewUser from './pages/ViewUser';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/view/:id" element={<ViewUser />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;