import React from "react";
import "../styles/button.css";

const CustomButtons = ({ name, type, onClick }) => {
  return (
    <button onClick={onClick} type={type} className="customBtn">
      <span>{name}</span>
    </button>
  );
};

export default CustomButtons;
