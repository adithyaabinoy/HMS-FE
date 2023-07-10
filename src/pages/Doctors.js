import React, { useEffect, useState } from "react";
import "../styles/Doctors.css";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorsList } from "../redux/doctorReducer";

function Doctors() {
  const [doctors, setDoctorsList] = useState("");

  const { doctorList } = useSelector((state) => state.doctorList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctorsList());
    setDoctorsList(doctorList);
  }, []);

  const bookDoctor = () => {};

  return (
    <div className="doctors__container">
      <Sidebar />
      <div className="doctors">
        {doctors &&
          doctors.map((e, i) => {
            return (
              <Card
                name={e.name}
                title={e.specialization}
                image=""
                key={i}
                description={e.description}
                src={e.doctorPhoto}
                onClick={bookDoctor}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Doctors;
