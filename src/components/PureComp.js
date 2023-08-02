import React from "react";

const PureComp = () => {
  return (
    <div>
      <h1>Pure Components</h1>
      <p>
        Components is Pure if
        <ul>
          <li>Return value is only determined by it's input values.</li>
          <li>
            It's return value is always the same for the same input values.
          </li>
          <li>
            Class Components that extends the React.PureComponent class are
            treated as P ure Components.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default PureComp;
