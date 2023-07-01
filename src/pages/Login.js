import React from 'react'
import { styled } from "styled-components";
import CustomInput from "../components/CustomInput";
import CustomButtons from "../components/CustomButtons";


const Login = () => {
  return (
    <LoginContainer>
      <LoginInnerContainer>
      <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/hospital-6101753-5023487.png"
          alt="logo"
        />
        <h1>Sign in to Hospital</h1>
        <CustomInput type="text" placeholder='Email'/>
        <CustomInput type="password" placeholder='******'/>
        <CustomButtons name='Sign-in' width='220px'/>
        <p>Already User? <Span>SIGN-UP</Span></p>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://c1.wallpaperflare.com/preview/937/818/491/stethoscope-doctor-md-medical-health-hospital.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LoginInnerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 60%;
height: 70vh;
background-color: #ADD8E6;
opacity: 0.9;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;

> h1 {
  margin: 10px;
  font-size: 1.2rem;
}

> img {
  width: 120px;
  height: 100px;
  margin: 10px;
}

` 
const Span = styled.span`
  color: blue;
`