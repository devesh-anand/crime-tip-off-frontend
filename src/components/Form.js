import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Form(){
    const [category, setCategory] = useState("kidnapping");
    const [description, setDescription] = useState("");
    const [files, setFiles] = useState([]);

    const handleSubmit = async(event) => {
      event.preventDefault();
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, description, photos: ["sdf" ,"sdf"], location:{
          lat:"233",
          long:"4ree",
          city: "Delhi"
        }, date: "sdfds" })
    };

    // console.log((requestOptions));
      fetch('https://crime-tip-off.herokuapp.com/api/tipoff/', requestOptions)
        .then(response => {
          if(response.status === 201){
            toast.success('Successfully tipped off!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          }else {
            toast.error('Failed to tip off!', {
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
        }
        )
        .then(data => console.log(data));
    }

    return(
        <section class="h-screen flex place-self-center mt-32 md:mt-0" id="form">
        <div class="h-full text-gray-800">
          <div class="flex justify-self-center md:mt-32 flex-wrap h-full g-6">
            <div class="xl:ml-4 w-full mb-12 md:mb-0">
              <form onSubmit={handleSubmit}>
                <div class="mb-6">
                  <select className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none" id="cars" name="cars" value={category} onChange={(e)=>setCategory(e.target.value) }>
                    <option value="kidnapping">Kidnapping</option>
                    <option value="laundering">Money Laundering</option>
                    <option value="theft">Theft</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div class="mb-6">
                  <textarea
                    type="text" 
                    value={description} 
                    class="form-control h-32 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Description"
                    onChange={(e)=> setDescription(e.target.value) }
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="file" 
                     
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Choose Files"
                  />
                </div>

                <div class="text-center lg:text-left">
                  <button
                    type="submit"
                    class="inline-block w-full px-7 py-3 bg-orange-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
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