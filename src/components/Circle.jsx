import React from 'react';
import * as FaIcons from 'react-icons/fa';

const Circle = ({ color, circle }) => {
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
    FaHandsHelping: FaIcons.FaHandsHelping
  };

  const Icon = iconMap[circle.icon]; 
  return (
    <div
      className={`mx-10 flex h-64 w-64 flex-col items-center justify-center rounded-full border-2 border-blue-500 bg-transparent text-center`}
    >
      <span>
        <Icon className={`text-${color} text-2xl`} />
      </span>
      <header className={`text-${color}`}>{circle.slogans[0]}</header>
      <p className="fill-current">{circle.slogans[1]}</p>
    </div>
  );
};

export default Circle;
