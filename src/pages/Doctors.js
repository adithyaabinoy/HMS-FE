import React from "react";
import "./Doctors.css";
import Card from "../components/Card";

function Doctors() {
  return (
    <div className="doctors">
      <Card name="xyz" />
      <Card />
      <Card name="xyz" />
      <Card /> 
      <Card /> 
      <Card /> 
      <Card />
    </div>
  );
}

export default Doctors;
