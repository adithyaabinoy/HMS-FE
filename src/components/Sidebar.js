import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";
import { toast } from "react-toastify";
import SidebarData from "./SidebarData";

const Sidebar = () => {
  const role = localStorage.getItem("role");
  const image = localStorage.getItem("profilePhoto");
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
      {image ? (
        <img src={image} alt="profile" />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
          alt="profile"
        />
      )}

      {SidebarData ? (
        SidebarData(role).map((data) => {
          return (
            <Link to={data.path} key={data.id}>
              {data.title}
            </Link>
          );
        })
      ) : (
        <p style={{ textAlign: "center" }}>Login Again</p>
      )}

      {role ? (
        <button type="submit" className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Sidebar;
