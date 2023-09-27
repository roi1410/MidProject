import React from "react";
import * as FaIcons from "react-icons/fa";
import { motion } from "framer-motion";

const Circle = ({ color, circle }) => {
  // Create an object to map icon names to their respective components
  const iconMap = {
    FaBook: FaIcons.FaBook,
    FaUsers: FaIcons.FaUsers,
    FaGlobe: FaIcons.FaGlobe,
    FaLaptop: FaIcons.FaLaptop,
    FaStar: FaIcons.FaStar,
    FaBriefcase: FaIcons.FaBriefcase,
    FaCode: FaIcons.FaCode,
    FaCogs: FaIcons.FaCogs,
    FaRocket: FaIcons.FaRocket,
    FaGavel: FaIcons.FaGavel,
    FaBalanceScale: FaIcons.FaBalanceScale,
    FaBookOpen: FaIcons.FaBookOpen,
    FaUniversity: FaIcons.FaUniversity,
    FaIndustry: FaIcons.FaIndustry,
    FaChartBar: FaIcons.FaChartBar,
    FaMedal: FaIcons.FaMedal,
    FaTools: FaIcons.FaTools,
    FaUserTie: FaIcons.FaUserTie,
    FaBrain: FaIcons.FaBrain,
    FaHandsHelping: FaIcons.FaHandsHelping,
  };

  const IconComponent = iconMap[circle.icon];
  const fontSize = circle.slogans[0].length > 15 ? "text-sm" : "text-lg";
  const headerFontSize = circle.slogans[0].length > 15 ? "text-xs" : "text-base";

  const circleVariants = {
    initial: { y: -10, opacity: 0 },
    animate: {
      opacity: 1,
      y: 0,

      transition: { delay:1, duration: 2 },
    },
  };

  return (
     <motion.div
      variants={circleVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`mx-5 flex flex-col items-center justify-center rounded-full border-2 border-blue-500 bg-transparent text-center sm:mx-10  sm:h-64 sm:w-64 ${
        circle.slogans[0].length > 15 ? "mt-2" : "mt-4"
      }`}     >
      <span>
        <IconComponent className={`text-${color} sm:text-2xl`} />
      </span>
      <div className="mt-2 sm:ml-2 ">
        <header className={`text-${color} text-lg sm:text-base`}>{circle.slogans[0]}</header>
        <span className="mt-2 text-sm sm:text-base ">{circle.slogans[1]}</span>
      </div>
    </motion.div>
  );
};

export default Circle;
