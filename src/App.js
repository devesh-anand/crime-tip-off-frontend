import "./App.css";
import MainImg from "./MainImg";
import Formdata from "./pages/Formdata";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Heatmap from "./pages/Heatmap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import MultipleLineChart from "./components/MultipleLineChart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import PoliceDashboard from "./pages/PoliceDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tipoff" element={<Formdata />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          {/* <Route path="/heatmap" element={<Heatmap />} /> */}
          {/* <Route path="/policedashboard" element={<PoliceDashboard />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
