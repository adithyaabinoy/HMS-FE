import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButtons";
import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";

function Profile() {
  return (
    <>
      <div className="profileContainer">
        <Sidebar />
        <div className="profileInnerContainer">
          <div className="profileImage">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/399/614/desktop-wallpaper-cute-baby-girl-kids-cute-kids-thumbnail.jpg"
              alt="profile"
            />

            <CreateIcon className="icon" />
          </div>
          <div className="profileInfo">
            <CustomInput type="text" placeholder="Name" width="25rem" />
            <CustomInput type="number" placeholder="age" width="25rem" />
            <div className="genderSelection">
              <div>
                <input type="radio" placeholder="male" />
                <label>-Male</label>
              </div>
              <div>
                <input type="radio" placeholder="male" />
                <label>-Female</label>
              </div>
            </div>
            <CustomInput
              placeholder="Phone Number"
              type="number"
              width="25rem"
            />
            <CustomInput placeholder="Address" type="text" width="25rem" />
            <CustomButton width="27rem" name="Update Profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
