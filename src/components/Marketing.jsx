import { FaSuitcase } from "react-icons/fa";
import { useContext } from "react";
import { degreesContext } from "../Context";

const Marketing = ({ profession }) => {
  const { degreesData } = useContext(degreesContext);
  let circles = degreesData[profession].circles;
  return (
    <div className="bg-grey-200 h-96 flex justify-center flex-col items-center">
      <span className="text-blue-400 text-l"> tracks of study:</span>
      <span className="text-blue-400 text-l">
        {degreesData[profession].sentence}
      </span>
      <span className={`text-${degreesData[profession].color} text-2xl mb-12`}>so why us</span>
      <ul className="flex flex-row justify-around">
        <li
          className="flex flex-col items-center justify-center text-center
        w-64 h-64 rounded-full border-2 border-blue-500 bg-transparent mx-10"
        >
          <span>
            <FaSuitcase className={`text-${degreesData[profession].color} text-2xl `}/>
          </span>
          <header className={`text-${degreesData[profession].color}`}>{circles[0][0]}</header>
          <p className="fill-current">{circles[0][1]}</p>
        </li>
        <li
          className="flex flex-col items-center justify-center text-center
        w-64 h-64 rounded-full border-2 border-blue-500 bg-transparent mx-10"
        >
          <span>
            <FaSuitcase className={`text-${degreesData[profession].color} text-2xl`} />
          </span>
          <header className={`text-${degreesData[profession].color}`}>{circles[1][0]}</header>
          <p className="fill-current">{circles[1][1]}</p>
        </li>
        <li
          className="flex flex-col items-center justify-center text-center
        w-64 h-64 rounded-full border-2 border-blue-500 bg-transparent mx-10"
        >
          <span>
            <FaSuitcase className={`text-${degreesData[profession].color} text-2xl`} />
          </span>
          <header className={`text-${degreesData[profession].color}`}>{circles[2][0]}</header>
          <p className="fill-current">{circles[2][1]}</p>
        </li>
      </ul>
    </div>
  );
};

export default Marketing;
