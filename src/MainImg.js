import React from 'react';
import img from "./assets/main-img.svg";

function MainImg (){
    return(
        <div className="flex basis-1/2 justify-center items-center">
            <img src={img} />
          </div>
    );
}

export default MainImg;