import "./App.css";
import "./App.css";
import MainImg from "./MainImg";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Heatmap from "./pages/Heatmap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Login />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heatmap" element={<Heatmap />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
