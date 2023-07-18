import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Appointments.css";
import Sidebar from "../components/Sidebar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAppointments } from "../redux/appointmentReducer";

function Appointments() {
  const [list, setList] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const { doctorList } = useSelector((state) => state.doctorList);
  console.log(doctorList);
  const doctorArray = [...doctorList];
  const [time, setTime] = useState("");
  const [consultationFees, setConsultationFees] = useState();
  const nameValue = doctorArray.map((data) => data.name);
  const [selected, setSelected] = useState(nameValue[0]?.value);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const data = {
    date,
    doctorName,
    time,
    consultationFees,
  };

  useEffect(() => {
    setList(doctorList);
  }, [doctorList]);
  console.log(list);
  const bookAppointment = () => {
    dispatch(createAppointments(data));
    toast.success("Appointment has been booked !");
    Navigate("/");
  };
  var consultationFee;
  const handleChange = (event) => {
    setSelected(event.target.value);
    setDoctorName(event.target.value);
    doctorArray.forEach((data) => {
      if (event.target.value == data.name) {
        console.log(data.consultationFees);
        consultationFee = data.consultationFees;
        setConsultationFees(consultationFee);
      }
    });
    console.log(consultationFee);
  };

  return (
    <div className="appointmentContainer">
      <Sidebar />
      <div className="appointmentOptions">
        <select value={selected} onChange={handleChange} className="select">
          {nameValue && nameValue.length > 0 ? (
            nameValue.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))
          ) : (
            <h1 style={{ textAlign: "center" }}>Loading....</h1>
          )}
        </select>
        <input
        className="input-appointment"
          type="text"
          value={consultationFees}
          onChange={(e) => e.target.value}
        />
        <input
          className="input-appointment"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button onClick={bookAppointment} className="btn-appointment">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default Appointments;
