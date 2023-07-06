import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButtons from "../components/CustomButtons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asset/logo-1.svg";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/authReducer";
import { toast } from "react-toastify";
import "../styles/SignUp.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redux state
  const { loading } = useSelector((state) => state.user);
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
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/login");
        toast.success("Successfully created new user");
      }
    });
  };

  return (
    <div className="singUpContainer">
      <div className="signUpInnerContainer">
        <img src={logo} alt="logo" className="img" />
        <h1>Sign up to Anand Hospital</h1>
        <form onSubmit={handleSignUpEvent}>
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
            type="submit"
          />
        </form>
        <p className="span">
          Already User?{" "}
          <span>
            <Link to="/login">SIGN-IN</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
