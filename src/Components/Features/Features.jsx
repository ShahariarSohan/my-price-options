import PropTypes from "prop-types";
import { BsListCheck } from "react-icons/bs";
const Features = ({ feature }) => {
  return (
    <div className="font-semibold flex gap-3 items-center">
      <BsListCheck></BsListCheck> <h1>{feature}</h1>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string.isRequired,
};

export default Features;
