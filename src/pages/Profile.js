import React from "react";
import { styled } from "styled-components";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateIcon from "@mui/icons-material/Create";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButtons";

function Profile() {
  return (
    <>
      <ProfileContainer>
        <ProfileImage>
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/399/614/desktop-wallpaper-cute-baby-girl-kids-cute-kids-thumbnail.jpg"
            alt="profile"
          />
          <TagButton>
            Change Image
            <CreateIcon />
          </TagButton>
        </ProfileImage>
        <ProfileInfo>
          <CustomInput type="text" placeholder="Name" width="25rem" />
          <CustomInput type="number" placeholder="age" width="25rem" />
          {/* <GenderSelection>
          <div>
          <CustomInput type="radio" placeholder="male" />
           <label>Male</label>
          </div>
           <div>
           <CustomInput type="radio" placeholder="male" />
           <label>Female</label>
           </div>
         </GenderSelection> */}
          <CustomInput placeholder="Phone Number" type="number" width="25rem" />
          <CustomInput placeholder="Address" type="text" width="25rem" />
          <CustomButton width="27rem" name="Update Profile" />
        </ProfileInfo>
      </ProfileContainer>
    </>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  width: 80%;
  height: 82vh;
  margin-left: 20%;
  /* background-color: #caf0f8; */
`;

const ProfileImage = styled.div`
  display: flex;
  padding: 2%;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  > img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #023e8a;
  }
`;
const ProfileInfo = styled.div`
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const TagButton = styled.p`
  width: 200px;
  cursor: pointer;
  background-color: #4361ee;
  color: #fff;
  padding: 7px;
  border-radius: 10px;
  text-align: center;
  position: relative;
  &:hover {
    padding-right: 14px;
    padding-left: 8px;
    scale: 1.1;
  }

  &:after {
    content: "»";
    position: absolute;
    opacity: 0;
    font-size: 20px;
    top: 5px;
    right: -20px;
    transition: 0.5s;
  }

  &::before {
    content: "»";
    position: absolute;
    opacity: 0;
    font-size: 20px;
    top: 5px;
    left: -20px;
    transition: 0.5s;
  }

  &:hover:after {
    opacity: 1;
    right: 10px;
  }

  &:hover::before {
    opacity: 1;
    left: 10px;
  }

  > .MuiSvgIcon-root {
    margin-left: 5px;
    font-size: 1rem;
  }
`;

// const GenderSelection = styled.div`
//   width: 200px;
// > div {
//     display: flex;
// }
// `;
