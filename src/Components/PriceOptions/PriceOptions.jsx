import PriceOption from "../PriceOption/PriceOption";
import PropTypes from "prop-types";
const PriceOptions = ({ handleMessage }) => {
  const gyms = [
    {
      id: 1,
      name: "FitZone",
      features: [
        "Cardio Equipment",
        "Strength Training",
        "Group Classes",
        "Locker Rooms",
        "Towel Service",
        "Sauna",
      ],
      price: 50, // Replace with the actual price for this gym
    },
    {
      id: 2,
      name: "PowerGym",
      features: [
        "Free Weights",
        "Personal Trainers",
        "Sauna",
        "Steam Room",
        "Cafe",
        "Indoor Track",
        "TRX Training",
      ],
      price: 60, // Replace with the actual price for this gym
    },
    {
      id: 3,
      name: "FlexFitness",
      features: [
        "Yoga Studio",
        "Indoor Pool",
        "Spin Classes",
        "Massage Therapy",
        "Childcare Services",
        "Nutrition Counseling",
        "Outdoor Workout Area",
        "Boxing Ring",
      ],
      price: 55, // Replace with the actual price for this gym
    },
    {
      id: 4,
      name: "IronWorks",
      features: [
        "Crossfit Area",
        "Martial Arts",
        "Nutrition Counseling",
        "Outdoor Workout Area",
        "Spinning Bikes",
        "Rock Climbing Wall",
        "Physical Therapy",
        "Swimming Pool",
      ],
      price: 70, // Replace with the actual price for this gym
    },
    {
      id: 5,
      name: "TotalFit",
      features: [
        "Treadmills",
        "Basketball Court",
        "Childcare Services",
        "Swimming Pool",
        "Squash Courts",
        "Rowing Machines",
        "Kickboxing Classes",
        "Outdoor Yoga Deck",
      ],
      price: 65, // Replace with the actual price for this gym
    },
  ];

  return (
    <div>
      <h1 className="text-3xl text-center">GYM</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {gyms.map((gym) => (
          <PriceOption
            key={gym.id}
            gym={gym}
            handleMessage={handleMessage}
          ></PriceOption>
        ))}
      </div>
    </div>
  );
};
PriceOptions.propTypes = {
  handleMessage: PropTypes.func.isRequired,
};
export default PriceOptions;
