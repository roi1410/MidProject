import { useContext } from "react";
import { DegreesContext } from "../Context";
import Senior from "../components/senior";

export const OurSeniors = ({ profession }) => {
  const { degreesData } = useContext(DegreesContext);

  const seniors = degreesData[profession].seniors;
  const color = degreesData[profession].color;
  return (
    <div className="h-auto flex flex-col items-center bg-gray-200">
      <span className={`mb-8 text-4xl font-bold text-${color}`}>
        our graduates
      </span>

      <div className="flex flex-wrap justify-around w-full">
        {seniors.map((e, index) => (
          <Senior
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4"
            key={index}
            img={e.img}
            sentences={e.sentences}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};

export default OurSeniors;