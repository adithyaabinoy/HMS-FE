import React from "react";
import logo from "../../src/asset/log03.svg";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="navigation-container">
      <div className="navigationInnerContainer">
        <div className="logoContainer">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navigationMenus">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
          {token ? <Link>Login</Link> : <Link to="/login">Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
