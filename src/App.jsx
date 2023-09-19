import "./App.css";
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
        </div>
      </div>
    </>
  );
}

export default App;
