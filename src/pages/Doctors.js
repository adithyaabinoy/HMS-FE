import React from "react";
import "../styles/Doctors.css";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

function Doctors() {
  return (
    <div className="doctors__container">
      <Sidebar />
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
      <Card 
      name={"NAME"}
      title={"CARDIOLOGIST"}
      image="" />
      <Card
      name={"NAME"}
      title={"CARDIOLOGIST"}
      image="" />
      <Card
      name={"NAME"}
      title={"CARDIOLOGIST"}
      image="" />
    </div>
    </div>
  );
}

export default Doctors;
