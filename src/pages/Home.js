import React from "react";
import MainImg from "../components/MainImg";
import Form from "../components/Form";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Home = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
    <Navbar />

    <Signup />
      <Login />
    <div className="flex flex-col justify-center items-center md:flex-row px-16 py-16 h-full">
      <div className="flex flex-col justify-center basis-1/2 pb-16 lg:pl-16 lg:-ml-20">
        <h1 className="text-4xl lg:text-5xl leading-normal lg:leading-snug font-normal">
          Tip-off crime related information <br />
          <span className="text-orange-400 font-bold italic">Safely</span>
          <br />
          <span className="font-semibold">and</span> <br />
          <span className="italic">Without</span>{" "}
          <span className="text-orange-400 font-bold italic">fear</span>
        </h1>

        <a href="#form">
          <button
            onClick={() => {
              setClicked(true)
            }}
            type="button"
            class="px-8 py-3 w-40 my-8 bg-orange-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out"
          >
            Share Info
          </button>
        </a>
      </div>

      <div id="form">{clicked ? <Form /> : <MainImg />}</div>
    </div>

    </>
  );
};

export default Home;
