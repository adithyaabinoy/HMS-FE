import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/DoctorAppointment.css";

function DoctorAppointment() {
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
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoctorAppointment;
