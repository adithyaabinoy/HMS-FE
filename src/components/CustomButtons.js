import React from "react";
import "../styles/button.css";

const CustomButtons = ({ name, type, onClick, width }) => {
  return (
    <button onClick={onClick} type={type} className="customBtn" style={{width: width}}>
      <span>{name}</span>
    </button>
  );
};

export default CustomButtons;
