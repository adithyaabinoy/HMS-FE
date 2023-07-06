import React, { useState } from "react";
import { styled } from "styled-components";
import CustomInput from "../components/CustomInput";
import CustomButtons from "../components/CustomButtons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../asset/logo-1.svg";
import { signinUser } from "../redux/authReducer";
import { toast } from "react-toastify";

const Login = () => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Redux state
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(signinUser(userCredentials));
    navigate("/");
    toast.success("Successfully signed in");
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={logo} alt="logo" />
        <h1>Welcome to HMS</h1>
        <InputForm onSubmit={handleLoginEvent}>
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
            name={loading ? "loading..." : "Login"}
            width="220px"
            type="submit"
          />
          {/* {error && <div>{error}</div>} */}
        </InputForm>

        <p>
          Not a User?{" "}
          <Span>
            <Link to="/signup">SIGN-UP</Link>
          </Span>
        </p>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  /* background-color: #f8f8f8; */
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7%;
  /* background-image: url("https://c1.wallpaperflare.com/preview/937/818/491/stethoscope-doctor-md-medical-health-hospital.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
`;

const LoginInnerContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 50%;
  height: 50vh;
  /* background-color: #add8e6; */
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
