import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <img
        src="https://e1.pxfuel.com/desktop-wallpaper/399/614/desktop-wallpaper-cute-baby-girl-kids-cute-kids-thumbnail.jpg"
        alt="profile"
      />
      <Link to="/profile">Profile</Link>
      <Link to="/about">Create Report</Link>
      <Link to="/profile">Check Appointment</Link>
      <Link to="/about">Doctors List</Link>
      <Link to="/profile">Medical History</Link>
      <Link to="/about">About</Link>
      <button type='submit'>Logout</button>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 20%;
  height: 78vh;
  border: 2px solid #caf0f8;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  position: relative;

  > button {
    background-color: red;
    padding: 10px;
    color: white;
    font-size: 1.4rem;
    outline: none;
    position: absolute;
    bottom: 22px;
    right: 25%;
    width: 200px;
    &:hover {
      padding-right: 14px;
      padding-left: 8px;
      scale: 1.1;
    }

    &:after {
      content: "»";
      position: absolute;
      opacity: 0;
      font-size: 20px;
      top: 10px;
      right: -20px;
      transition: 0.5s;
    }

    &::before {
      content: "»";
      position: absolute;
      opacity: 0;
      font-size: 20px;
      top: 10px;
      left: -20px;
      transition: 0.5s;
    }

    &:hover:after {
      opacity: 1;
      right: 10px;
    }

    &:hover::before {
      opacity: 1;
      left: 10px;
    }
  }

  > img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #023e8a;
    margin: 5px auto;
  }

  > a {
    cursor: pointer;
    background-color: #4361ee;
    color: #fff;
    padding: 7px;
    border-radius: 5px;
    margin: 10px 60px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 400;
    position: relative;
    text-decoration: none;
    &:hover {
      padding-right: 14px;
      padding-left: 8px;
      scale: 1.1;
    }

    &:after {
      content: "»";
      position: absolute;
      opacity: 0;
      font-size: 20px;
      top: 5px;
      right: -20px;
      transition: 0.5s;
    }

    &::before {
      content: "»";
      position: absolute;
      opacity: 0;
      font-size: 20px;
      top: 5px;
      left: -20px;
      transition: 0.5s;
    }

    &:hover:after {
      opacity: 1;
      right: 10px;
    }

    &:hover::before {
      opacity: 1;
      left: 10px;
    }
  }
`;
