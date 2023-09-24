import { useState, useContext, useEffect } from "react";
import GlaryItem from "./GlaryItem";
import { Glarycontext } from "../Context";

const Glary = () => {
  const { GlaryData } = useContext(Glarycontext);

  return (
    <div className="bg flex flex-row items-center justify-around bg-slate-200">
      {GlaryData.map((data, index) => (
        <div key={index} className=" mb-32 mt-20">
          <GlaryItem arr={data.images} />
          <div className="flex h-16 items-center justify-center rounded-b-full bg-blue-500 text-xl text-gray-200">
            {data.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Glary;
