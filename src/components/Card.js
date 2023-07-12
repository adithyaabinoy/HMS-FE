import React from "react";
import "../styles/Card.css";
import CustomButtons from './CustomButtons'

const  Card = ({ URL, name, title, description, click }) => {
  return (
    <div className="card">
      {URL? <img src={URL} alt="img" /> : <img src='https://static.vecteezy.com/system/resources/previews/002/896/807/original/female-doctor-using-her-digital-tablet-free-vector.jpg' alt=""/>}
      
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
