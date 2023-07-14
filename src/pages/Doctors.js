import React, { useEffect, useState } from "react";
import "../styles/Doctors.css";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Doctors() {
  const [doctors, setDoctorsList] = useState("");
  const { doctorList } = useSelector((state) => state.doctorList);
  const navigate = useNavigate();
  useEffect(() => {
    setDoctorsList(doctorList);
  }, [doctorList]);
  const role = localStorage.getItem("role");
  const bookDoctor = () => {
    if (role === "User") {
      navigate("/appointments");
    } else {
      toast.error("Only patient are allowed to access this");
    }
  };

  return (
    <div className="doctors__container">
      <Sidebar />
      <div className="doctors">
        {doctors && doctors.length > 0 ? (
          doctors.map((e, i) => {
            console.log(e);
            return (
              <Card
                name={e.name}
                title={e.specialization}
                key={i}
                description={e.description}
                onClick={bookDoctor}
              />
            );
          })
        ) : (
          <p>No Doctors</p>
        )}
      </div>
    </div>
  );
}

export default Doctors;
