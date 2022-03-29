import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [aadhaarImg, setAadhaarImg] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [fileInputState, setFileInputState] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        // "https://crime-tip-off.herokuapp.com/api/users/",
        "http://localhost:5000/api/users/",
        { email, password, aadhar: aadhaar, aadharFile: previewSource }
      );

      console.log(response.data);
      if (response.data) {
        toast.success("Successfully registered!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      // setFormData((prevData) => ({ ...prevData, logo: reader.result }));
    };
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

          <div className="flex w-full  mt-2 bg-grey-lighter mb-2 ">
            <label className="w-full flex flex-col items-center px-4 py-6 bg-[#c1f1fd] text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue md:hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">Choose File</span>
              <input
                type="file"
                id="aadharFile"
                name="aadharFile"
                className="hidden"
                onChange={handleFileInputChange}
                value={fileInputState}
                // required
              />
            </label>
          </div>
          {previewSource && (
            <img src={previewSource} alt="chosen" style={{ height: "200px" }} />
          )}

          <button
            type="submit"
            className="inline-block px-7 py-3 mt-2 bg-orange-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out w-full"
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
