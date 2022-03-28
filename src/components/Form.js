import React from 'react';

function Form(){
    return(
        <section class="h-screen flex place-self-center" id="form">
        <div class="h-full text-gray-800">
          <div class="flex justify-self-center md:mt-32 flex-wrap h-full g-6">
            <div class="xl:ml-4 w-full mb-12 md:mb-0">
              <form>
                <div class="mb-6">
                  <select className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none" id="cars" name="cars">
                    <option value="volvo">Kidnapping</option>
                    <option value="saab">Money Laundering</option>
                    <option value="fiat">Theft</option>
                    <option value="audi">Others</option>
                  </select>
                </div>

                <div class="mb-6">
                  <textarea
                    type="text"
                    class="form-control h-32 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Description"
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
                    type="button"
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