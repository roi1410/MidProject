import { useEffect, useRef, useState } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { animate, motion } from "framer-motion";

const Seniors = ({ data }) => {
  const textVariants = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.9 }
    }
  };

  const imgVariants = {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 }
    }
  };

  return (
    <>
      <section className="flex flex-col-reverse md:flex-row w-full bg-gray-100">
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="md:w-[45%] w-full ml-5 mr-5 mt-5 md:mt-20"
        >
          <div className="h-10 w-10">
            <BiSolidQuoteAltLeft className="h-full w-full text-red-900" />
          </div>
          <div className="mb-4 text-2xl md:text-4xl lg:text-5xl">
            {data.quotes[0]}
          </div>
          <div className="text-lg md:text-xl font-bold">{data.quotes[1]}</div>
          <div className="text-lg md:text-xl">{data.quotes[2]}</div>
        </motion.div>

        <motion.div
          variants={imgVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="md:w-[45%] w-full sm:ml-24"
        >
          <img className="w-full h-auto" src={data.img} alt="" />
        </motion.div>
      </section>

      <style jsx>{`
        /* Adjust the layout for screens smaller than md (e.g., 768px) */
        @media (max-width: 768px) {
          .flex-col-reverse.md\\:flex-row {
            flex-direction: column-reverse;
          }
          
          /* You can add more responsive styles here */
        }
      `}</style>
    </>
  );
};

export default Seniors;
