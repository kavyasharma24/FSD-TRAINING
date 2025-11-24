import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Registration from "./components/Registeration.jsx";
import Dashboard from "./components/Dashboard.jsx";
import MainLayout from "./components/MainLayout.jsx";
import React, { useState } from "react";


function App() {

  const[logData,setLogData]=useState();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration regData={setLogData} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
      <h2>{JSON.stringify(logData)}</h2>
    </>
  );
}

export default App;
