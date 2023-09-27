import React, { useContext } from "react";
import { DegreesContext } from "../Context";
import Circle from "./Circle";
import { motion } from "framer-motion";

const Marketing = ({ profession }) => {
  const { degreesData } = useContext(DegreesContext);
  let circles = degreesData[profession]?.marketing?.circles;
  let color = degreesData[profession]?.color;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 ,
      transition: { delay: 1, duration: 2 }
    },
  };

  return (
    <motion.div
      className="bg-grey-200 mb-10 mt-5 flex flex-col items-center justify-center p-5 sm:mb-20 sm:mt-10"
      {...fadeInUp} // Apply fadeInUp animation
    >
      {profession !== "home" ? (
        <>
          <motion.span
            className="mb-4 mt-4 text-2xl text-blue-600"
            {...fadeInUp} // Apply fadeInUp animation
          >
            Tracks of Study:
          </motion.span>
          <motion.span
            className="text-lg text-blue-400 mb-6"
            {...fadeInUp} // Apply fadeInUp animation
          >
            {degreesData[profession]?.marketing?.sentence}
          </motion.span>
          <motion.span
            className={`text-${color} mb-8 mt-4 text-2xl`}
            {...fadeInUp} // Apply fadeInUp animation
          >
            Why Ravivo University
          </motion.span>
        </>
      ) : (
        <>
          <motion.span
            className="mb-4 mt-4 text-2xl text-blue-600"
            {...fadeInUp} // Apply fadeInUp animation
          >
            A Wide Range of Opportunities at Ravivo University
          </motion.span>
          <motion.span
            className="text-lg text-blue-400 mb-6"
            {...fadeInUp} // Apply fadeInUp animation
          >
            {degreesData[profession]?.marketing?.sentence}
          </motion.span>
          <motion.span
            className={`text-${color} mb-8 mt-4 text-2xl`}
            {...fadeInUp} // Apply fadeInUp animation
          >
            Choose Your Path
          </motion.span>
        </>
      )}

      <div className="flex flex-col sm:flex-row justify-center sm:justify-around">
        {circles?.map((e, i) => (
          <Circle key={i} color={color} circle={e} />
        ))}
      </div>
    </motion.div>
  );
};

export default Marketing;
