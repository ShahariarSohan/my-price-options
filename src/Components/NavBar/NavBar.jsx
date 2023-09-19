import PropTypes from "prop-types";
import NavLink from "../NavLink/NavLink";
import { RiMenu2Fill, RiCloseCircleFill } from "react-icons/ri";
import { useState } from "react";
const NavBar = (props) => {
  const routes = [
    { id: 1, name: "Route 1", link: "/route1" },
    { id: 2, name: "Route 2", link: "/route2" },
    { id: 3, name: "Route 3", link: "/route3" },
    { id: 4, name: "Route 4", link: "/route4" },
    { id: 5, name: "Route 5", link: "/route5" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-yellow-400 p-5 text-black md:flex">
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-3xl md:hidden"
      >
        {menuOpen ? (
          <RiCloseCircleFill></RiCloseCircleFill>
        ) : (
          <RiMenu2Fill></RiMenu2Fill>
        )}
      </div>
      <ul
        className={`md:flex gap-5 bg-yellow-400 duration-1000 px-8 absolute md:static  rounded-md ${
          menuOpen ? "top-12" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
