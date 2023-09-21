import { useContext } from "react";
import { DegreesContext } from "../Context";
import Senior from "../components/senior";

export const OurSeniors = ({ profession }) => {
  const { degreesData } = useContext(DegreesContext);

  const seniors = degreesData[profession].seniors;
  const color = degreesData[profession].color;
  return (
    <div className=" bg-gray-200 flex flex-col  items-center h-110">
      <span className={`mb-8 text-4xl font-bold text-${color}`}>our graduates</span>

      <div className="flex flex-row justify-around w-300 ">
        {seniors.map((e,index) => (
          <Senior className="w-80 " key={index} img={e.img} sentences={e.sentences} color={color} />
        ))}
      </div>
    </div>
  );
};

export default OurSeniors;
