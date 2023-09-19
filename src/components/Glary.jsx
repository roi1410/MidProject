import { useState } from "react";
import GlaryItem from "./GlaryItem";

const Glary = () => {

  // setInterval(, 1000)


  return (
    <div className="flex flex-row justify-around  h-80">
      {/* <div className={`h-64 w-64 bg-red-500 bg-[${url}]`}>
      <div className="h-16 bg-blue-500"></div>
    </div> */}

      <div className="h-64 w-64 bg-gray-400 ">
        <GlaryItem className="h-64"/>
        <div className="h-16 bg-blue-500 mt-48"></div>
      </div>
      <div className="h-64 w-64 bg-gray-400 ">
        <GlaryItem className="h-64"/>
        <div className="h-16 bg-blue-500 mt-48"></div>
      </div>
      <div className="h-64 w-64 bg-gray-400 ">
        <GlaryItem className="h-64"/>
        <div className="h-16 bg-blue-500 mt-48"></div>
      </div>
    </div>
  );
};

export default Glary;
