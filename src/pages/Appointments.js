import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Appointments.css";
import Sidebar from "../components/Sidebar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Appointments() {
  const [selectedDate, setSelectedDate] = useState(null);
  const { doctorList } = useSelector((state) => state.doctorList);
  const doctorArray = [...doctorList]
  const nameValue = doctorArray.map((data)=> data.name);
   const [selected, setSelected] = useState(nameValue[0].value);
  const Navigate = useNavigate();
  const bookAppointment = () => {
    toast.success("Appointment has been booked !");
    Navigate("/");
  };

  const handleChange = event => {
    setSelected(event.target.value);
  };
  return (
    <div className="appointmentContainer">
      <Sidebar />
      <div className="appointmentOptions">
      <select value={selected} onChange={handleChange} className="select">
        {nameValue.map((option,i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
        <DatePicker
          className="datePicker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText={"dd/mm/yyyy"}
          scrollableYearDropdown
        />
        <button onClick={bookAppointment} className="btn-appointment">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default Appointments;
