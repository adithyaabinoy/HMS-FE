import React, { useState } from 'react';
import DatePicker from'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Appoinments.css";
import Sidebar from '../components/Sidebar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Appoinments() {
    const [selectedDate, setSelectedDate] = useState(null);
const Navigate = useNavigate()
    const bookAppointment = () => {
        toast.success("Appoinment has been booked !");
        Navigate('/')
    };
    return (
      <div className="appoinmentContainer">
        <Sidebar />
        <div className='appoinmentOptions'>
        <select className='select'>
          <option disabled selected>
            Choose Ur options
          </option>
          <option value="choclate">Choclate</option>
          <option value="choclate">Sake</option>
          <option value="choclate">Fruit</option>
          <option value="choclate">Choclate</option>
          <option value="choclate">Sake</option>
          <option value="choclate">Fruit</option>
        </select>
        <DatePicker className='datePicker'

          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText={"dd/mm/yyyy"}
          //filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
          //showYearDropdown // year show and scrolldown alos
          scrollableYearDropdown
        />
        <button onClick={bookAppointment} className='btn-appoinment'>Book Appointment</button>
        </div>
      </div>
    );
  }
  

export default Appoinments
