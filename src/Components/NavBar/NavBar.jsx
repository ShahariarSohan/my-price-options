import PropTypes from "prop-types";
import NavLink from "../NavLink/NavLink";

const NavBar = (props) => {
  const routes = [
    { id: 1, name: "Route 1", link: "/route1" },
    { id: 2, name: "Route 2", link: "/route2" },
    { id: 3, name: "Route 3", link: "/route3" },
    { id: 4, name: "Route 4", link: "/route4" },
    { id: 5, name: "Route 5", link: "/route5" },
  ];
  return (
    <div>
      <ul className="flex gap-8">
        {routes.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
