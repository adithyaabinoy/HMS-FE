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
    </div>
  );
}

export default App;
