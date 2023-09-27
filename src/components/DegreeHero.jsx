import React, { useContext } from "react";
import { DegreesContext } from "../Context";
import { FaUniversity } from "react-icons/fa";
import photo from "../assets/HeroDegree.webp";

export const DegreeHero = ({ profession }) => {
  const { degreesData } = useContext(DegreesContext);
  const color = degreesData[profession].color;

  return (
    <div className="relative h-[300px] sm:h-[450px]">
      <img className="z-0 h-[100%] w-[100%]" src={photo} alt="" />
      <div className="center absolute right-0 top-0 flex h-[100%] sm:w-[35%] sm:justify-center sm:rounded-l-full bg-blue-800">
        <span className="flex flex-col self-center text-white">
          <span className={`self mb-2 sm:mb-10 self-center text-xl sm:text-4xl font-bold text-${color}`}>
            <div className="">A degree in</div> <div>{profession}</div>
          </span>
          <span className="text-bold mb-2 sm:mb-10 self-center text-xl sm:text-4xl">
            in ravivo universty
          </span>
          <div className={`text-bold self-center text-lg sm:text-3xl text-${color}`}>
            the best university in Israel
          </div>
          <FaUniversity className="w-10 h-10 sm:w-16 sm:h-16 self-center mt-2 sm:mt-10 ml-2 sm:ml-6" />
          <span className="bg-green-500 text-pink-500 opacity-0"></span>
          <span className="text-green-500 opacity-0"></span>
          <span className="text-purple-500 opacity-0"></span>
        </span>
      </div>
    </div>
  );
};

export default DegreeHero;
