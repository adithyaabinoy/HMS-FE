import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";
import { toast } from "react-toastify";

const Sidebar = () => {
  
  const navigate = useNavigate()
  const handleLogout = () => {
    if(localStorage.getItem("token")){
      localStorage.clear();
    toast.success('You have logged out')
    navigate('/login')
    }
    else {
      toast.error('You need to log in first')
    }
  };
  return (
    <div className="sidebar-container">
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/399/614/desktop-wallpaper-cute-baby-girl-kids-cute-kids-thumbnail.jpg"
        alt="profile"
      />
      <Link to="/profile">Profile</Link>
      <Link to="/report">Create Report</Link>
      <Link to="/appointments">Check Appointment</Link>
      <Link to="/doctors">Doctors List</Link>
      <Link to="/medical-history">Medical History</Link>
      <Link to="/about">About</Link>
      <button type='submit' className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;

