import "./App.css";
import HOC from "./components/HOC";
import PureComp from "./components/PureComp";

function App() {
  return (
    <div className="App">
      <PureComp />
      <HOC />
    </div>
  );
}

export default App;
