import { useState, useEffect } from "react";

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
    <div className="relative h-64 w-64">
      {arr.map((image, i) => (
        <img
          key={i}
          className={`absolute left-0 top-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          src={image}
          alt=""
        />
      ))}
    </div>
  );
};

export default GlaryItem;
