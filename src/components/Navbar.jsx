import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const routes = [
    { to: "/", label: <AiOutlineHome className="h-8 w-8" />, degree: "" },
    { to: "/Register", label: "Register", degree: "" },
    { to: "/LogIn", label: "Login", degree: "" },
    { to: "/Payment", label: "Enroll next semester", degree: "" },
  ];

  const degrees = [
    {
      to: "/degree/computer-studies",
      label: "Computer Studies",
      degree: "/computer-studies",
    },
    { to: "/degree/law-school", label: "Law School", degree: "/law-school" },
    {
      to: "/degree/business-school",
      label: "Business School",
      degree: "/business-school",
    },
    { to: "/degree/economy", label: "Economy", degree: "/economy" },
    { to: "/degree/accounting", label: "Accounting", degree: "/accounting" },
    { to: "/degree/psychology", label: "Psychology", degree: "/psychology" },
  ];

  const [display, setDisplay] = useState(false);

  const toggleDropdown = () => {
    setDisplay(!display);
  };

  return (
    <nav className="w-full bg-blue-500 py-2 text-white shadow-md">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center items-center">
          {routes.map((route) => (
            <li key={route.label} className="mr-4 mb-2 sm:mb-0">
              <NavLink
                to={`${route.to}`}
                className="font-bold text-white transition-colors duration-300 hover:text-blue-900 sm:text-lg"
              >
                <motion.span
                  className=""
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  {route.label}
                </motion.span>
              </NavLink>
            </li>
          ))}
          <li className="relative">
            <div className="font-bold text-white transition-colors duration-300 hover:text-blue-900 sm:text-lg">
              <span onClick={toggleDropdown} className="cursor-pointer">
                <motion.button
                  className=""
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Our Degrees
                </motion.button>
              </span>
              <ul
                className={`${
                  display ? "block" : "hidden"
                } absolute left-2 z-10 mt-7 bg-blue-500 py-2 shadow-lg`}
              >
                {degrees.map((degree) => (
                  <li key={degree.label}>
                    <NavLink
                      to={degree.to}
                      className="block px-4 py-2 text-white hover:bg-blue-500 hover:text-white"
                    >
                      <motion.span
                        className="h-15"
                        whileHover={{
                          scale: 1.1,
                          textShadow: "0px 0px 8px rgb(255,255,255)",
                          boxShadow: "0px 0px 8px rgb(255,255,255)",
                        }}
                      >
                        {degree.label}
                      </motion.span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="sm:ml-6">
            <span className="text-xl pl-4 flex flex-col bold">
              Ravivo University <FaUniversity className="h-8 w-8 self-center" />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
