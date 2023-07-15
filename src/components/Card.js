import React from "react";
import "../styles/Card.css";
import CustomButtons from './CustomButtons'

const  Card = ({ URL, name, title, description, onClick, price }) => {
  return (
    <div className="card">
      {URL? <img src={URL} alt="img" /> : <img src='https://static.vecteezy.com/system/resources/previews/002/896/807/original/female-doctor-using-her-digital-tablet-free-vector.jpg' alt=""/>}
      
      <div className="doctor__info">
        <p>
          <strong>{name}</strong>
        </p>
        <p>
          <strong>{price}</strong>
        </p>
       
        <div className="doctor__title">
          <small>{title}</small>
        </div>
        <div>
        <p>{description}</p>
        </div>
      </div>
      <CustomButtons name='Book an Appointment' oonClick={onClick}/>
    </div>
  );
}

export default Card;
