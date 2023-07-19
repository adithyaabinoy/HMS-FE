import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { patientAppointments } from "../redux/appointmentReducer";
import "../styles/UserAppointment.css";

const PatientAppointmentHistory = () => {
  const [list, setList] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(patientAppointments()).then((data) => {
      setList(data.payload);
    });
  }, [dispatch]);
  return (
    <div className="PatientAppointmentHistory_container">
      <Sidebar />
      <div className="appointment_history">
        <h1>Appointment History</h1>
        <table className="appointment_history">
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
          </tr>

            {list && list.length > 0 ? (
              list.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.doctorName}</td>
                    <td>{data.date}</td>
                    <td>{data.time}</td>
                  </tr>
                );
              })
            ) : (
              <p>No data</p>
            )}

        </table>
      </div>
    </div>
  );
};

export default PatientAppointmentHistory;
