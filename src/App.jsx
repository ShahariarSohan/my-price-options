import "./App.css";
import AreaChart from "./Components/AreaChart/AreaChart";
import BarChart from "./Components/BarChart/BarChart";
import LineChart from "./Components/Charts/LineChart";
import NavBar from "./Components/NavBar/NavBar";
import Phones from "./Components/Phones/Phones";
import PieChart from "./Components/PieChart/PieChart";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className="container mx-auto space-y-5">
          <PriceOptions></PriceOptions>
          <LineChart></LineChart>
          <AreaChart></AreaChart>
          <BarChart></BarChart>
          <PieChart></PieChart>
          <Phones></Phones>
        </div>
      </div>
    </>
  );
}

export default App;
