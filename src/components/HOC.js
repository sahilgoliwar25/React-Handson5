import React from "react";

const HOC = () => {
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
    </div>
  );
};

export default HOC;
