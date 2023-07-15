import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButtons";
import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../redux/profileReducers";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Profile() {
  //image uploading
  const [profilePhoto, setImage] = useState("");

  const [phone, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [patientId, setId] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "Male", text: "Male" },
    { value: "Female", text: "Female" },
  ];
  const profileData = useSelector((state) => state.profile.profile);
  console.log(profileData);
  const [gender, setSelected] = useState(options[0].value);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = (e) => {
    setAge(e.age);
    setPhoneNumber(e.phone);
    setUsername(e.username);
    setSelected(e.gender);
    setId(e.patientId);
    setEmail(e.email);
    setAddress(e.address);
    setImage(e.profilePhoto.data.data);
  };
  useEffect(() => {
    userData(profileData);
  }, [profileData]);

  const updateProfileInfo = (e) => {
    const formData = new FormData();
    const fileInput = document.querySelector("#fileInput");
    setImage(URL.createObjectURL(fileInput.files[0]));
    formData.append("profilePhoto", fileInput.files[0]);
    formData.append("userName", username);
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("patientId", patientId);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("age", age);
    dispatch(updateProfile(formData)).then((response) => response);

    toast.success("profile updated successfully");
    navigate("/");
  };

  const token = localStorage.getItem("token");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const blob = new Blob([Int8Array.from(profilePhoto)], {
    type: profilePhoto.contentType,
  });

  const image = window.URL.createObjectURL(blob);
  localStorage.setItem("profilePhoto", image);
  return (
    <>
      <div className="profileContainer">
        <Sidebar />
        {token ? (
          <div className="profileInnerContainer">
            <div className="profileImage">
              <img src={image} alt="img" />
              <input type="file" id="fileInput" className="upload-image" />
            </div>
            <div className="profileInfo">
              <CustomInput
                type="text"
                placeholder="Name"
                width="25rem"
                value={username}
              />
              <CustomInput
                type="text"
                placeholder="User ID"
                width="25rem"
                value={patientId}
                onChange={(e) => setId(e.target.value)}
              />
              <CustomInput
                type="number"
                placeholder="age"
                width="25rem"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

              <CustomInput
                placeholder="Phone Number"
                type="text"
                width="25rem"
                value={phone}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <CustomInput
                placeholder="Email"
                type="type"
                width="25rem"
                value={email}
              />
              <CustomInput
                placeholder="Address"
                type="text"
                width="25rem"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div>
                <select
                  value={gender}
                  onChange={handleChange}
                  className="select"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
              <CustomButton
                width="27rem"
                name="Update Profile"
                onClick={updateProfileInfo}
              />
            </div>
          </div>
        ) : (
          <div className="loader">Login First</div>
        )}
      </div>
    </>
  );
}

export default Profile;
