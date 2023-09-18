import PropTypes from "prop-types";

const NavLink = ({ route }) => {
  console.log(route);
  return (
    <>
      <li key={route.id}>
        <a href={route.link}>{route.name}</a>
      </li>
    </>
  );
};

NavLink.propTypes = {
  route: PropTypes.object.isRequired,
};

export default NavLink;
