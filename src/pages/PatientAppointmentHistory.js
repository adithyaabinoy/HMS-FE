import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { patientAppointments } from "../redux/appointmentReducer";

const PatientAppointmentHistory = () => {
  const [list, setList] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(patientAppointments()).then((data) => {
      setList(data.payload);
    });
  }, []);
  console.log(list)
  return (
    <div className="PatientAppointmentHistory_container">
      <Sidebar />
      <div></div>
    </div>
  );
};

export default PatientAppointmentHistory;
