import React from 'react'
import "./Doctors.css";
import Card from '../components/Card';

function Doctors() {
  return (
    <div className='doctors'>
        <div className='doctors__row'>
            <Card
            name="xyz"/>
            <Card />
              {/* cards */}
        </div>

    </div>
  )
}

export default Doctors
