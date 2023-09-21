import { useState, useContext } from "react";
import GlaryItem from "./GlaryItem";
import { Glarycontext } from "../Context";

const Glary = () => {
  const { GlaryData } = useContext(Glarycontext);

  console.log(GlaryData[0].images);

  return (
    <div className="flex flex-row justify-around h-80 bg">
      <div
        yle={{ backgroundImage: "url(../assets/Glary/ent/6.jpeg)" }}
        st
        className="h-64 w-64 bg-gray-400"
      >
        <GlaryItem className="h-64" arr={GlaryData[0].images} />
        <div
          className="h-16 bg-blue-500 text-gray-200 flex
        justify-center text-xl "
        >
          {GlaryData[0].name}
        </div>
      </div>
      <div className="h-64 w-64 bg-gray-400 ">
        <GlaryItem className="h-64" arr={GlaryData[1].images} />
        <div
          className="h-16 bg-blue-500 text-gray-200 flex
        justify-center text-xl "
        >
          {GlaryData[1].name}
        </div>
      </div>
      <div className="h-64 w-64 bg-gray-400">
        <GlaryItem className="h-64" arr={GlaryData[2].images} />
        <div
          className="h-16 bg-blue-500 text-gray-200 flex
        justify-center text-xl"
        >
          {GlaryData[2].name}
        </div>
      </div>
    </div>
  );
};

export default Glary;
