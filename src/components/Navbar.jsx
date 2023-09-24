import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/Ai";
import { useState } from "react";
import {FaUniversity} from "react-icons/fa";

const Navbar = () => {
  const routes = [
    { to: "/", label: <AiOutlineHome className="h-8 w-8" />, degree: "" },
    { to: "/register", label: "register", degree: "" },
    { to: "/LogIn", label: "Login", degree: "" },
    { to: "/Payment", label: "sign up for the upcoming semester", degree: "" }
  ];

  const degrees = [
    { to: "/degree/computer-studies", label: "computer studies", degree: "/computer-studies" },
    { to: "/degree/law-school", label: "law school", degree: "/law-school" },
    { to: "/degree/business-school", label: "business school", degree: "/business-school" },
    { to: "/degree/economy", label: "economy", degree: "/economy" },
    { to: "/degree/accounting", label: "accounting", degree: "/accounting" },
    { to: "/degree/psychology", label: "psychology", degree: "/psychology" },
  ];

  const [display, setDisplay] = useState(false);

  const toggleDropdown = () => {
    setDisplay(!display);
  };

  return (
    <nav className="hover: h-16 bg-blue-500 py-2 text-white shadow-md">
      <ul className="flex justify-center">
        {routes.map((route) => (
          <li key={route.label} className="mr-4">
            <NavLink
              to={`${route.to}${route.degree}`}
              className="text-lg font-bold text-white transition-colors duration-300 hover:text-blue-900"
            >
              {route.label}
            </NavLink>
          </li>
        ))}
        <li className="relative">
          <div className="text-lg font-bold text-white transition-colors duration-300 hover:text-blue-900">
            <span onClick={toggleDropdown} className="cursor-pointer">
              our degrees
            </span>
            <ul className={` ${display ? "block" : "hidden"} absolute bg-blue-500 mt-7 py-2 shadow-lg left-2 z-10`}>
              {degrees.map((degree) => (
                <li key={degree.label}>
                  <NavLink
                    to={degree.to}
                    className="block px-4 py-2 text-white hover:bg-blue-500 hover:text-white"
                  >
                    {degree.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </li>
              <li><FaUniversity className="h-8 w-8 ml-10" /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
