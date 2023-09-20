import { NavLink } from "react-router-dom";

const Navbar = () => {
  const routes = [
    { to: "/register", label: "register", degree: "" },
    { to: "/Payment", label: "sign up for the upcoming semester", degree: "" },
    { to: "/degree", label: "computer studies", degree: "/computer-studies" },
    { to: "/degree", label: "law school", degree: "/law-school" },
    { to: "/degree", label: "business school", degree: "/business-school" },
    { to: "/degree", label: "economy", degree: "/economy" },
    { to: "/degree", label: "accounting", degree: "/accounting" },
    { to: "/degree", label: "psychology", degree: "/psychology" },
  ];

  return (
    <nav className="bg-blue-500 text-white py-2 shadow-md h-16 hover: ">
      <ul className="flex justify-center">
        {routes.map((route) => (
          <li key={route.label} className="mr-4">
            <NavLink
              to={`${route.to}${route.degree}`}
              className="text-white text-lg font-bold hover:text-blue-900 transition-colors duration-300"
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar