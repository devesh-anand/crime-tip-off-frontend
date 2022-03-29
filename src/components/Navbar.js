import React from 'react';
import { useState } from "react";

function Navbar(){

    return(
        <nav
          class="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-4
        bg-white
        text-gray-500
        hover:text-black
        focus:text-gray-700
        shadow-lg
        navbar navbar-expand-lg navbar-light
        "
        >
          <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <h1 className="pl-6 text-xl font-semibold md:pl-16">Tip-Off</h1>
            <button type="button" className="md:mr-8 inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out">
              Login
            </button>
            
          </div>
        </nav>
    );
}

export default Navbar;