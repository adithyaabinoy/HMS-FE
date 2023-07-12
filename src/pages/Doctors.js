import React, { useEffect, useState } from "react";
import "../styles/Doctors.css";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

function Doctors() {
  const [doctors, setDoctorsList] = useState("");
  const { doctorList } = useSelector((state) => state.doctorList);

  useEffect(() => {
    setDoctorsList(doctorList);
  }, [doctorList]);

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
                key={i}
                description={e.description}
                URL={e.doctorPhoto}
                onClick={bookDoctor}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Doctors;
