import React from "react";
import "../styles/input.css";

const CustomInput = ({ placeholder, type, onChange, value, width }) => {
  return (
    <div className="inputs">
      <input
        className="inputField"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
