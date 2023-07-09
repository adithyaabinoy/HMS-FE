import React from "react";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="home-info">
          <h1>Anand Hospital Pvt. Ltd.</h1>
          <p>Health is the condition of wisdom and the sign is cheerfulness</p>
          <p className="booking">
            <Link to="/doctors">BOOK AN APPOINTMENT</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

