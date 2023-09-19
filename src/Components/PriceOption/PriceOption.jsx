import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({ gym }) => {
  const { name, features, price } = gym;
  return (
    <div className="bg-blue-300 font-semibold w-full p-5 shadow-xl rounded-md">
      <h1 className="text-3xl">{name}</h1>
      <h1 className="text-3xl">{price}$/Month</h1>
      <div className="flex flex-col flex-grow">
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </div>
      <btn className="text-white bg-red-600 hover:bg-red-800 px-10 py-2">
        Select
      </btn>
    </div>
  );
};

PriceOption.propTypes = {
  gym: PropTypes.object.isRequired,
};

export default PriceOption;
