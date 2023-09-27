import React, { useContext } from "react";
import GlaryItem from "./GlaryItem";
import { Glarycontext } from "../Context";

const Glary = () => {
  const { GlaryData } = useContext(Glarycontext);

  return (
    <div className="bg-gray-300 py-10 pt-16" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6 text-blue-700">
          photos gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 pb-8">
          {GlaryData.map((data, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <GlaryItem arr={data.images} />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-blue-700">{data.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glary;
