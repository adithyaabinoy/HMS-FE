import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButtons from "../components/CustomButtons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../asset/log03.svg";
import { signInUser } from "../redux/authReducer";
import { toast } from "react-toastify";
import "../styles/Login.css";

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
    dispatch(signInUser(userCredentials)).then((data) => {
      if (data.payload.message === "Invalid email/username or password") {
        toast.error("Invalid email/username or password");
      } else {
        navigate("/");
        toast.success("Successfully signed in");
      }
    });
  };

  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <img src={logo} alt="logo" />
        <h1>Welcome to Anand Hospital</h1>
        <form onSubmit={handleLoginEvent} className="login-submit">
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
            type="submit"
          />
        </form>

        <p className="span">
          Not a User?{" "}
          <span>
            <Link to="/signup">SIGN-UP</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
