import React, { useState } from "react";
import { addingDoctor } from "../redux/doctorReducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import '../styles/AddDoctor.css'

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [specializations, setSpecializations] = useState("");
  const [image, setImage] = useState("");
  const [consultationFees, setFees] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addDoctor = () => {
    const formData = new FormData();
    const fileInput = document.querySelector("#fileInput");
    setImage(URL.createObjectURL(fileInput.files[0]));
    formData.append("doctorPhoto", fileInput.files[0]);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("specializations", specializations);
    formData.append("consultationFees", consultationFees)
    dispatch(addingDoctor(formData));
    navigate("/");
    toast.success("Added Doctor");
  };
  console.log(image)
  return (
    <div className="addDoctorContainer">
      <Sidebar />
      <div className="addDoctorInnerContainer">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="addDoctorInput"
        />
        <input
          placeholder="Consultation fees"
          type="number"
          value={consultationFees}
          onChange={(e) => setFees(e.target.value)}
          className="addDoctorInput"
        />
        <input
          placeholder="Specialization"
          type="text"
          value={specializations}
          onChange={(e) => setSpecializations(e.target.value)}
          className="addDoctorInput"
        />
        <input
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="addDoctorInput"
        />
         <input type="file" id="fileInput"  className="addDoctorInput"/>
        <button onClick={addDoctor} className="btn-addDoctor">Add Doctor</button>
      </div>
    </div>
  );
};

export default AddDoctor;
