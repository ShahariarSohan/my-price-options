import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className="container mx-auto">
          <PriceOptions></PriceOptions>
        </div>
      </div>
    </>
  );
}

export default App;
