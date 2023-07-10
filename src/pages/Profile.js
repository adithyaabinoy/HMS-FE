import React, { useEffect, useState, useRef } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButtons";
import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";
import { useDispatch } from "react-redux";
import { getProfile, updateProfile } from "../redux/profileReducers";
import { toast } from "react-toastify";

function Profile() {
  //image uploading
  const imageRef = useRef(null);
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
  const [gender, setSelected] = useState(options[0].value);

  const dispatch = useDispatch();

  const userData = (e) => {
    setAge(e.age);
    setPhoneNumber(e.phone);
    setUsername(e.username);
    setSelected(e.gender);
    setId(e.patientId);
    setEmail(e.email);
    setAddress(e.address);
    setImage(e.profilePhoto);
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
    profilePhoto,
  };
  const updateProfileInfo = () => {
    dispatch(updateProfile(userCredentials)).then((response) => response);
    toast.success("profile updated successfully");
  };

  const token = localStorage.getItem("token");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const uploadImage = () => {
    imageRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageName = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imageName, {
              type: "image/png",
              lastModified: Date.now(),
            });
            console.log(file);
            setImage(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };
  return (
    <>
      <div className="profileContainer">
        <Sidebar />
        {token ? (
          <div className="profileInnerContainer">
            <div className="profileImage" onClick={uploadImage}>
              {profilePhoto ? (
                <img src={URL.createObjectURL(profilePhoto)} alt="profile" />
              ) : (
                <img
                  src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                  alt="profile"
                />
              )}
              <button className="image-upload-button">
                Change profile Image
              </button>
              <input
                type="file"
                ref={imageRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
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
