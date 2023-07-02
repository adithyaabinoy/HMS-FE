import React, { useState } from "react";
import { styled } from "styled-components";
import CustomInput from "../components/CustomInput";
import CustomButtons from "../components/CustomButtons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, userSelector } from "../redux/UserSlice";

const Login = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Redux state
  const { loading, error } = useSelector((state) => userSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredentials = {
      email,
      password,
    };
    dispatch(loginUser(userCredentials)).then((res) => {
      if (res.payload) {
        setEmail("");
        setPassword("");
        navigate("/");
      }
    });
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/hospital-6101753-5023487.png"
          alt="logo"
        />
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
          {error && <div>{error}</div>}
        </InputForm>

        <p>
          Already User?{" "}
          <Span>
            <Link to="/signup">Sign-Up</Link>
          </Span>
        </p>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

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
    height: 100px;
    margin: 10px;
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

