<<<<<<< HEAD
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
     <Signup />
      <Login />
=======
import React from 'react';
import { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from "./pages/Signup";


function App() {
  return (
    <div className="App">
      <Login />
     <Signup />
>>>>>>> 868225679c64d1bb5851ec8d8eb5d1368c1170b8
    </div>
  );
}

export default App;
