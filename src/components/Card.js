import React from 'react'
import "./Card.css";

function Card({image, name, title}) {
  return (
    <div className='card'>
        <img src="https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=" alt="img"/>
        <div className='doctor__info'>
            <p><strong>{name}</strong></p>
            <div className='doctor__title'><small>{title}</small></div>
        </div>
        <button>Book an appointment</button>
    </div>
  )
}

export default Card
