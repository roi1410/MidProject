import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GlaryItem = ({ arr }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <motion.div
      className="relative h-80 w-full overflow-hidden shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {arr.map((image, i) => (
        <motion.img
          key={i}
          className={`w-full absolute left-0 top-0 h-full transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          src={image}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          exit={{ opacity: 0 }}
        />
      ))}
    </motion.div>
  );
};

export default GlaryItem;
