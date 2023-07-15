import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/DoctorAppoinment.css";

function DoctorAppoinment() {
  return (
    <div className="doctor_appoinments">
      <Sidebar />
      <div className="appoinments">
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

export default DoctorAppoinment;
