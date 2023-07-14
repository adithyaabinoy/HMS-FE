import React, { useEffect, useState } from "react";
import { addingDoctor } from "../redux/doctorReducer";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [specializations, setSpecializations] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const data = {
    name,
    description,
    specializations,
  };

  const addDoctor = () => {
    dispatch(addingDoctor(data));
    navigate("/");
    toast.success("Added Doctor");
  };

//   const blob = new Blob([Int8Array.from(profilePhoto)], {
//     type: profilePhoto.contentType,
//   });

//   const image = window.URL.createObjectURL(blob);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="specialization"
          type="text"
          value={specializations}
          onChange={(e) => setSpecializations(e.target.value)}
        />
        <input
          placeholder="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
         <input type="file" id="fileInput"/>
        <button onClick={addDoctor}>Add Doctor</button>
      </div>
    </div>
  );
};

export default AddDoctor;
