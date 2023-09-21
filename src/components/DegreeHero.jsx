import photo from "../assets/HeroDegree.webp";
import { useContext } from "react";
import { DegreesContext } from "../Context";

export const DegreeHero = ({ profession }) => {
  const { degreesData } = useContext(DegreesContext);
  const color= degreesData[profession].color
  return (
    <div className="relative h-[450px]">
      <img className="h-[100%] w-[100%] z-0 " src={photo} alt="" />
      <div className="flex justify-center center absolute bg-blue-800 h-[100%] w-[35%] right-0 top-0 rounded-l-full ">
        <p className="self-center text-white flex flex-col">
          <span
            className={`self self-center text-4xl font-bold mb-10 text-${color}`}
          >
            <div className="">A degree in</div> <div>{profession}</div> 
          </span>
          <span className="self-center text-4xl mb-10 text-bold">
            in ravivo universty
          </span>
          <div
            className={`self-center text-3xl text-bold text-${color}`}
          >
            the best university in Israel
          </div>
          <p className="opacity-0 text-pink-500 bg-green-500"></p>
          <p className="opacity-0 text-green-500"></p>
          <p className="opacity-0 text-purple-500"></p>
        </p>
      </div>
    </div>
  );
};

export default DegreeHero;
