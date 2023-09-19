import PropTypes from "prop-types";

const Features = ({ feature }) => {
  return (
    <div>
      <h1 className="font-semibold">{feature}</h1>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.array.isRequired,
};

export default Features;
