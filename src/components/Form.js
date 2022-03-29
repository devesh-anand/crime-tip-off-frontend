import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Form() {
  const [category, setCategory] = useState("kidnapping");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category,
        description,
        photos: ["sdf", "sdf"],
        location: {userLocation, userCity},
        date: new Date().getTime().toString(),
      }),
    };

    console.log(userLocation);
    console.log(userCity);

    // console.log((requestOptions));
    fetch("https://crime-tip-off.herokuapp.com/api/tipoff/", requestOptions)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Successfully tipped off!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("Failed to tip off!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        response.json();
      })
      .then((data) => console.log(data));
  };

  const [userLocation, setUserLocation] = useState({});
  const [userCity, setUserCity] = useState("");

  useEffect(() => {
    async function fetchIPinfo() {
    // gps location call
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    function success(pos) {
      var crd = pos.coords;
      setUserLocation({
        ...userLocation,
        lat: crd.latitude,
        lng: crd.longitude
      })
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
    
    await fetch("https://ipinfo.io/182.73.154.2/?token=26e23a2e78a518")
        .then((res) => res.json())
        .then((data) =>
          setUserCity(data.city)
        );
    }

    fetchIPinfo();

    return () => {
      fetchIPinfo();
    };
  }, []);

  return (
    <section className="h-screen flex w-screen justify-center items-center place-self-center mt-32 md:mt-0" id="form">
      <div className="h-full text-gray-800">
        <div className="flex justify-self-center md:mt-32 flex-wrap h-full g-6">
          <div className="xl:ml-4 w-full mb-12 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <select
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                  id="info"
                  name="info"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="kidnapping">Kidnapping</option>
                  <option value="laundering">Money Laundering</option>
                  <option value="theft">Theft</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="mb-6">
                <textarea
                  type="text"
                  value={description}
                  className="form-control h-32 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  // value="hello"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Expected Date of Crime"
                  // onChange={}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlfor="multipleInputs"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Related images/videos
                </label>
                <input
                  type="file"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                  id="multipleInputs"
                  placeholder="Choose Files"
                  multiple
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block w-full px-7 py-3 bg-orange-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
