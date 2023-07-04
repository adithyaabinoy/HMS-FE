import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import CustomInput from "../components/CustomInput";

function Profile() {
  return (
    <>
    <Navigation />
    <ProfileContainer >
        <ProfileHeader>
            <ProfileInfo>
                <h4>PERSONAL-INFO</h4>
                <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" />
             <CreateIcon />
            </ProfileInfo>
        </ProfileHeader>
        <ProfileDescription>
            <CustomInput
            type="redue"
            placeholder="Full Name"
            />
            <CustomInput
            type="text"
            placeholder="Email"
            />
            <CustomInput
            type="value"
            placeholder="Age"
            />
            <CustomInput
            type="text"
            placeholder="Address"
            />
            <CustomInput
            type="value"
            placeholder="Phone Number"
            />
        </ProfileDescription>
    </ProfileContainer>
    <Footer />
    </>
  );
}

export default Profile;

const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
 `

const ProfileHeader = styled.div`
`
const ProfileInfo = styled.div`
> img {
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
`

const ProfileDescription = styled.div`
`