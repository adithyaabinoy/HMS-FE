import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/AppointmentList.css";
import { useSelector } from "react-redux";

const AppointmentList = () => {
  const [list, setList] = useState("");
  const { appointmentList } = useSelector((state) => state.appointmentList);
  useEffect(() => {
    setList(appointmentList);
  }, [appointmentList]);

  return (
    <div className="List-container">
      <Sidebar />
      <div className="table">
        <h1>Appointment List</h1>
        <table>
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Date</th>
          </tr>
          {list ? (
            list.map((data, index) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{data.patientId}</td>
                      <td>{data.username}</td>
                      <td>{data.doctorName}</td>
                      <td>{data.date}</td>
                    </tr>
                  </tbody>
                </>
              );
            })
          ) : (
            <p style={{ textAlign: "center" }}>Loading......</p>
          )}
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;
