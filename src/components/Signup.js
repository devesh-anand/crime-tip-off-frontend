import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [aadhaarImg, setAadhaarImg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://crime-tip-off.herokuapp.com/api/users/",
        { email, password, aadhar: aadhaar, aadharFile: aadhaarImg }
      );

      console.log(response.data);
      if (response.data) {
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(message);

      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-9/12 md:w-7/12 lg:w-5/12 mt-32">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="email"
              value={email}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              value={password}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="number"
              value={aadhaar}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Aadhaar"
              onChange={(e) => setAadhaar(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              for="aadhaarImg"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Photo of aadhaar
            </label>
            <input
              type="file"
              value={aadhaarImg}
              name="aadhaarImg"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              id="aadhaarImg"
              placeholder="Aadhaar image"
              onChange={(e) => setAadhaarImg(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="inline-block px-7 py-3 bg-orange-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
