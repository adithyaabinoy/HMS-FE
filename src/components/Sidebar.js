import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";
import { toast } from "react-toastify";
import SidebarData from "./SidebarData";

const Sidebar = () => {
const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const handleLogout = () => {
    if (localStorage.getItem("token")) {
      localStorage.clear();
      toast.error("You have logged out");
      navigate("/login");
    } else {
      toast.error("You need to log in first");
    }
  };
  return (
    <div className="sidebar-container">
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/399/614/desktop-wallpaper-cute-baby-girl-kids-cute-kids-thumbnail.jpg"
        alt="profile"
      />
      {SidebarData? SidebarData(role).map((data)=>{
        return <Link to={data.path} key={data.id}>{data.title}</Link>
      }): <p style={{textAlign: 'center'}}>Login Again</p>}

      <button type="submit" className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
