import "./App.css";
import AreaChart from "./Components/AreaChart/AreaChart";
import LineChart from "./Components/Charts/LineChart";
import NavBar from "./Components/NavBar/NavBar";
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
        </div>
      </div>
    </>
  );
}

export default App;
