import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const routes = [
    { to: "/register", label: "register", degree:""},
    { to: "/Payment", label: "sign up for the upcoming semester" ,degree:"" },
    { to: "/degree", label: "computer studies" , degree:"/computer-studies"},
    { to: "/degree", label: "law school" ,degree:"/law-school"},
    { to: "/degree", label: "business school" ,degree:"/business-school"},
    { to: "/degree", label: "economy",degree:"/economy" },
    { to: "/degree", label: "accounting",degree:"/accounting"},
    { to: "/degree", label: "media and marketing" ,degree:"/media-and-marketing"},
 
  ];

  return (
    <>
      <nav className="navbar">
        <ul className="">
          {routes.map((route) => (
            <NavLink key={route.label} to={`${route.to}${route.degree}`}>
              <li className="nav-item">{route.label}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
