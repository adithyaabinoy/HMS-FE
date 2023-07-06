import React from "react";
import "./Doctors.css";
import Card from "../components/Card";

function Doctors() {
  return (
    <div className="doctors">
      <Card 
      name={"NAME"}
      title={"CARDIOLOGIST"}
      image=""
      />
      <Card
      name={"NAME"}
      title={"CARDIOLOGIST"}
      image="" />
      <Card
      name={"NAME"}
      title={"CARDIOLOGIST"}
      image="" />
      <Card />
    </div>
  );
}

export default Doctors;
