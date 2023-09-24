import { FaSuitcase } from "react-icons/fa";
import { useContext } from "react";
import { DegreesContext } from "../Context";
import Circle from "./Circle";

const Marketing = ({ profession }) => {
  const { degreesData } = useContext(DegreesContext);
  let circles = degreesData[profession].marketing.circles;
  let color = degreesData[profession].color;

  return (
    <div className="bg-grey-200 mb-20 mt-10 flex h-96 flex-col items-center justify-center">
      {profession != "home" && (
        <>
          <span className="mb-6 mt-6 text-2xl text-blue-600">
            {" "}
            tracks of study:
          </span>
          <span className="text-l text-blue-400">
            {degreesData[profession].marketing.sentence}
          </span>
          <span className={`text-${color} mb-12 mt-8 text-2xl`}>
            why ravivo universty
          </span>
        </>
      )}

      <div className="flex flex-row justify-around">
        {circles.map((e, i) => (
          <Circle key={i} color={color} circle={e} />
        ))}
      </div>
    </div>
  );
};

export default Marketing;
