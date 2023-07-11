import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "../components/Sidebar";
import "../styles/AppointmentList.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointmentList } from "../redux/appointmentReducer";

const AppointmentList = () => {
  const [list, setList] = useState("");
  const { appointmentList } = useSelector((state) => state.appointmentList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAppointmentList());
    setList(appointmentList);
  }, []);

console.log(list)

  return (
    <div className="List-container">
      <Sidebar />
      <div className="search">
        <div className="search-list">
          <input type="text" />
          <SearchIcon />
        </div>

        {list &&
          list.map((data, index) => {
            return (
              <div key={index} className="medical-info">
                <p>patient ID: {data.patientId}</p>
                <p>Patient Name: {data.username}</p>
                <p>Doctor Name :{data.doctorName}</p>
                <p>Date: {data.date}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AppointmentList;
