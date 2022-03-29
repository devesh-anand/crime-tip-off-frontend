import React, { useState } from 'react';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="flex justify-center">
        <div className="w-9/12 md:w-7/12 lg:w-5/12 mt-32">
        <form>

          <div className="mb-6">
            <input
              type="email" 
              value={email}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Email address" 
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password" 
              value={password}
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
              placeholder="Password" 
              onChange={(event)=>setPassword(event.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <p class="italic text-gray-700">Make sure you have signed up</p>
          </div>

          <button
            type="submit"
            className="inline-block px-7 py-3 bg-orange-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Log in
          </button>
          
        </form>
      </div>
      </div>
    );
}

export default Login;