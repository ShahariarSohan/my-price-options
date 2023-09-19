import PropTypes from "prop-types";

const NavLink = ({ route }) => {
  return (
    <>
      <li key={route.id} className="hover:bg-white px-4">
        <a href={route.link}>{route.name}</a>
      </li>
    </>
  );
};
NavLink.propTypes = {
  route: PropTypes.object.isRequired,
};

export default NavLink;
