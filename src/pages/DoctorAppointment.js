import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/DoctorAppointment.css";
import { useDispatch } from "react-redux";
import { doctorAppointments } from "../redux/appointmentReducer";
function DoctorAppointment() {
  const [list, setList] = useState('')
const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(doctorAppointments()).then((data)=> setList(data.payload))
  },[])
  return (
    <div className="doctor_appointments">
      <Sidebar />
      <div className="appointments">
        <h1>Appointments</h1>
        <table>
          <tr>
            <th>Name of Patient</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
          <tbody>
            {list && list.length > 0 ? list.map((data)=>{
              return <tr>
                <td>{data.username}</td>
                <td>{data.time}</td>
                <td>{data.date}</td>
              </tr>
            }): <h1>no data</h1>}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoctorAppointment;
