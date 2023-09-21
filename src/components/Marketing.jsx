import { FaSuitcase } from "react-icons/fa";
import { useContext } from "react";
import { DegreesContext } from "../Context";
import Circle from "./Circle";

const Marketing = ({ profession }) => {
  const { degreesData } = useContext(DegreesContext);
  let circles = degreesData[profession].marketing.circles;
  let color = degreesData[profession].color;
  return (
    <div className="bg-grey-200 h-96 flex justify-center flex-col items-center mt-10 mb-20">
      <span className="text-blue-600 text-2xl mt-6 mb-6"> tracks of study:</span>
      <span className="text-blue-400 text-l">
        {degreesData[profession].marketing.sentence}
      </span>
      <span className={`text-${color} text-2xl mb-12 mt-8`}>why ravivo universty</span>

      <div className="flex flex-row justify-around ">
        {circles.map((e) => console.log(e))}
        {circles.map((e,i) => (
          <Circle key={i}  color={color} circle={e} />
        ))}
      </div>
    </div>
  );
};

export default Marketing;
