import React, { useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButtons";
import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/profileReducers";

function Profile() {
  const data = useSelector((state) => state.profile);
  const loading = data.loading
  console.log(data);
  let userData = data.profile;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const updateProfile = () => {};

  return (
    <>
    {loading?  <div className="profileContainer">
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
            <CustomInput
              type="text"
              placeholder="Name"
              width="25rem"
              value={userData.username}
              onChange={(e) => e.target.value}
            />
            <CustomInput type="number" placeholder="age" width="25rem" value={userData.age}/>
            <div>
              <select className="select" placeholder="Select Gender">
                <option value="" disabled selected>
                  Select your Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <CustomInput
              placeholder="Phone Number"
              type="number"
              width="25rem"
              value={userData.phoneNumber}
            />
            <CustomInput
              placeholder="Email"
              type="type"
              width="25rem"
              value={userData.email}
            />
            <CustomInput placeholder="Address" type="text" width="25rem" />
            <CustomButton
              width="27rem"
              name="Update Profile"
              onClick={updateProfile}
            />
          </div>
        </div>
      </div> : <div className="loader">Login First</div>}
     
    </>
  );
}

export default Profile;
