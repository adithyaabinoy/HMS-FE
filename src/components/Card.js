import React from "react";
import "../styles/Card.css";
import CustomButtons from './CustomButtons'

function Card({ URL, name, title, description, click }) {
  return (
    <div className="card">
      <img src={URL} alt="img" />
      <div className="doctor__info">
        <p>
          <strong>{name}</strong>
        </p>
       
        <div className="doctor__title">
          <small>{title}</small>
        </div>
        <div>
        <p>{description}</p>
        </div>
      </div>
      <CustomButtons name='Book an Appointment' onClick={click}/>
    </div>
  );
}

export default Card;
