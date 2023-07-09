import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButtons";
import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../redux/profileReducers";
import { toast } from "react-toastify";

function Profile() {
  const [phone, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [patientId, setId] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const userData = (e) => {
    setAge(e.age);
    setPhoneNumber(e.phone);
    setUsername(e.username);
    setGender(e.gender);
    setId(e.patientId);
    setEmail(e.email);
    setAddress(e.address);
  };
  useEffect(() => {
    dispatch(getProfile()).then((data) => userData(data.payload));
  }, []);

  let userCredentials = {
    username,
    email,
    phone,
    gender,
    patientId,
    address,
    age,
  };
  const updateProfileInfo = () => {
    dispatch(updateProfile(userCredentials)).then((response) =>response);
    toast.success("profile updated successfully");
  };

  const { role } = useSelector((state) => state.user);
  return (
    <>
      <div className="profileContainer">
        <Sidebar />
       {role?  <div className="profileInnerContainer">
          <div className="profileImage">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/399/614/desktop-wallpaper-cute-baby-girl-kids-cute-kids-thumbnail.jpg"
              alt="profile"
            />
            <CreateIcon className="icon" />
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
                className="select"
                placeholder="Select Gender"
                onClick={(e) => setGender(e.target.value)}
              >
                <option disabled selected>
                  Select your Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <CustomButton
              width="27rem"
              name="Update Profile"
              onClick={updateProfileInfo}
            />
          </div>
        </div>:  <div className="loader">Login First</div>}
      </div>
    </>
  );
}

export default Profile;
