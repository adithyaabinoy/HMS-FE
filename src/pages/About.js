import React from "react";
import image from "../asset/about.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Sidebar from "../components/Sidebar";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <Sidebar />
        <div className="about-image-container">
          <img src={image} alt="img" />
        </div>
        <div className="about-section">
          <div className="about-info-section">
            <h1>About HMS.</h1>
            <h3>Advancing the Delivery of Health Care</h3>
          </div>
          <div className="about-info-section">
            <div className="about-info-section-menus">
              <div>
                <p className="tags">What is HMS</p>
                <p>
                  HMS is a healthcare platform that focus more on making an
                  meaningful difference in patients lives.
                </p>
              </div>
              <div>
                <p className="tags">Our Goals</p>
                <p>When life depends on Medical Technology</p>
              </div>
              <div>
                <p className="tags">Integrated</p>
                <p>
                  <li>AIMS</li>
                  <li>WHO</li>
                  <li>PGI</li>
                  <li>Serum Institute</li>
                </p>
              </div>
            </div>
          </div>
          <div className="about-info-section">
            <div className="doc-list">
              <h3>HMS. Doctor List</h3> <ArrowRightAltIcon />
            </div>
          </div>
          <div className="about-info-section">
            <div className="doc-list">
              <h3>Location</h3> <ArrowRightAltIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
