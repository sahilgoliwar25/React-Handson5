import React from "react";
import CountHoc from "./CountHoc";
const HOC = (props) => {
  console.log(props);
  return (
    <div>
      <h1>High Order Components</h1>
      <ul>
        <li>
          HOC is a function which takes a Wrapped Component as input argument
          and returns a new Enhanced Component.
        </li>
        <li>It should always be a pure function.</li>
        <li>It should never modify the Wrapped Component.</li>
      </ul>
      <div>
        <h1>Click Counter</h1>
        <h1>{props.values}</h1>
        <div>
          <button onClick={props.increament}>Increment!!!</button>
        </div>
        <div>
          <button onClick={props.decrement}>Decrement!!!</button>
        </div>
      </div>
    </div>
  );
};

export default CountHoc(HOC);
