import React, { useState } from "react";
import { styled } from "styled-components";
import CustomInput from "../components/CustomInput";
import CustomButtons from "../components/CustomButtons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asset/logo-1.svg";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/authReducer";
import { toast } from 'react-toastify';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redux state
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignUpEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      username,
      email,
      password,
    };
    dispatch(signupUser(userCredentials)).then((data) => {
      if (data) {
        setUsername('');
        setEmail("");
        setPassword("");
        navigate("/login");
        toast.success('Successfully created new user')
      }
    });
  }

  return (
    <SignupContainer>
      <SignUpInnerContainer>
        <img src={logo} alt="logo" />
        <h1>Sign up to HMS</h1>
        <InputForm onSubmit={handleSignUpEvent}>
        <CustomInput
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <CustomInput
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomButtons
            name={loading ? "loading..." : "Register"}
            width="220px"
            type="submit"
          />
          {error && <div>{error}</div>}
        </InputForm>
        <p>
          Already User?{" "}
          <Span>
            <Link to="/login">SIGN-IN</Link>
          </Span>
        </p>
      </SignUpInnerContainer>
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
  background-color: #f8f8f8;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://c1.wallpaperflare.com/preview/937/818/491/stethoscope-doctor-md-medical-health-hospital.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SignUpInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 70vh;
  background-color: #add8e6;
  opacity: 0.9;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;

  > h1 {
    margin: 10px;
    font-size: 1.5rem;
    color: darkblue;
  }

  > img {
    width: 120px;
    height: 120px;
    margin: 5px 10px;
    color: blue;
    border-radius: 50%;
    border: 3px solid blue;
  }

  @media (min-width: 768px) {
    width: 40%;
    height: 80vh;
  }
`;

const Span = styled.span`
  color: blue;
  > a {
    text-decoration: none;
  }
`;

const InputForm = styled.form`
  margin-top: 15px;
`;
