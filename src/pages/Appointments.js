import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Appointments.css";
import Sidebar from "../components/Sidebar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAppointments } from "../redux/appointmentReducer";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function Appointments() {
  // const [date, setSelectedDate] = useState(null);
  const [doctorName, setDoctorName] = useState("");
  // const [selected, setSelected] = useState("");
  const [date, setSelectedDate] = useState(null);
  const { doctorList } = useSelector((state) => state.doctorList);
  console.log(doctorList);
  const doctorArray = [...doctorList];
  const [value, setValue] = useState(dayjs('2022-04-17T15:30'));
  const nameValue = doctorArray.map((data)=> data.name);
   const [selected, setSelected] = useState(nameValue[0].value);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const data = {
    date,
    doctorName,
    
  };
  const bookAppointment = () => {
    dispatch(createAppointments(data));
    toast.success("Appointment has been booked !");
    Navigate("/");
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
    setDoctorName(event.target.value);
  };

  return (
    <div className="appointmentContainer">
      <Sidebar />
      <div className="appointmentOptions">
        <select value={selected} onChange={handleChange} className="select">
          {nameValue && nameValue.length > 0 ?
            nameValue.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            )): <h1 style={{textAlign: 'center'}}>Loading....</h1>}
        </select>
        <input type="text" onChange={(e)=> e.target.value}/>
        <DatePicker
          className="datePicker"
          selected={date}
          onChange={(date) => setSelectedDate(date)}
          placeholderText={"dd/mm/yyyy"}
          scrollableYearDropdown
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker
              label="Select your time"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              className="time-picker"
            />
          </DemoContainer>
        </LocalizationProvider>
        <button onClick={bookAppointment} className="btn-appointment">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default Appointments;
