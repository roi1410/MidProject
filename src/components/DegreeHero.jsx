import photo from "../assets/HeroDegree.webp";
import { useContext } from "react";
import { DegreesContext } from "../Context";
import {FaUniversity} from "react-icons/fa";

export const DegreeHero = ({ profession }) => {
  const { degreesData } = useContext(DegreesContext);
  const color = degreesData[profession].color;
  return (
    <div className="relative h-96 w-full ">
      <img className="z-0 h-full w-full " src={photo} alt="" />
      <div className="center absolute right-0 top-0 flex h-[100%] w-[35%] justify-center rounded-l-full bg-blue-800 ">
        <p className="flex flex-col self-center text-white">
          <span
            className={`self mb-10 self-center text-4xl font-bold text-${color}`}
          >
            <div className="">A degree in</div> <div>{profession}</div>
          </span>
          <span className="text-bold mb-10 self-center text-4xl">
            in ravivo universty
          </span>
          <div className={`text-bold self-center text-3xl text-${color}`}>
            the best university in Israel
          </div>
          <FaUniversity className="w-16 h-16 self-center mt-10 ml-6 "/>
          <p className="bg-green-500 text-pink-500 opacity-0"></p>
          <p className="text-green-500 opacity-0"></p>
          <p className="text-purple-500 opacity-0"></p>
        </p>
      </div>
    </div>
  );
};

export default DegreeHero;
