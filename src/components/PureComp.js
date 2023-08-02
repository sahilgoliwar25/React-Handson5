import React from "react";
import ExPureComp from "./ExPureComp";

const PureComp = () => {
  return (
    <div>
      <h1>Pure Components</h1>
      <p>
        A function is said to be Pure if the return value is determined by its
        input values only and the return value is always the same for the same
        input values. A React component is said to be pure if it renders the
        same output for the same state and props. Pure Components prevents
        compponents being re-rendered if the values of state and props has not
        changed. This components will be rendered only in 3 conditions:
      </p>
      <pre>1. this.setState({})</pre>
      <pre>2. Change in props</pre>
      <pre>3. this.forceUpdate()</pre>
      <h3>Example:</h3>
      <ExPureComp />
      <ExPureComp />
      <ExPureComp />
    </div>
  );
};

export default PureComp;
