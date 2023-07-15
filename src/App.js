import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import Navigation from "./components/Navigation";
import Report from "./pages/Report";
import Doctors from "./pages/Doctors";
import Contacts from "./pages/Contacts";
import Appointments from "./pages/Appointments";
import AppointmentList from "./pages/AppointmentList";
import DoctorAppoinment from "./pages/DoctorAppoinment";

import {
  fetchAppointmentList,
  getDoctorNames,
} from "./redux/appointmentReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDoctorsList } from "./redux/doctorReducer";
import { getReportList } from "./redux/reportReducer";
import AddDoctor from "./pages/AddDoctor";
import MedicalHistory from "./pages/MedicalHistory";
import { getProfile } from "./redux/profileReducers";
import UserAppointment from "./pages/UserAppointment";
import UserMedicalHistory from "./pages/UserMedicalHistory";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctorNames());
    dispatch(fetchDoctorsList());
    dispatch(fetchAppointmentList());
    dispatch(getReportList());
    dispatch(getProfile());
  });
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/report" element={<Report />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/*" element={<h1>Page Not Found</h1>} />
          <Route path="/appointments-list" element={<AppointmentList />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/medical-history" element={<MedicalHistory />} />
          <Route path="/doc-appoinmentlist" element={<DoctorAppoinment />} />
          <Route path="/user-appointmentlist" element={<UserAppointment/> }/>
          <Route path="/test" element={<UserMedicalHistory />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
