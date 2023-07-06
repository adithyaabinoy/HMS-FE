import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/399/614/desktop-wallpaper-cute-baby-girl-kids-cute-kids-thumbnail.jpg"
        alt="profile"
      />
      <Link to="/profile">Profile</Link>
      <Link to="/report">Create Report</Link>
      <Link to="/profile">Check Appointment</Link>
      <Link to="/about">Doctors List</Link>
      <Link to="/profile">Medical History</Link>
      <Link to="/about">About</Link>
      <button type='submit' className="logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;

