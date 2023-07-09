import React from "react";
import logo from "../../src/asset/logo-1.svg";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { role } = useSelector((state) => state.user);
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
         {!role?  <Link to='/login'>Login</Link> :  <Link >Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
