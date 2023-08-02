import React, { useState } from "react";

const CountHoc = (WrappedComponent) => {
  function Hoc() {
    const [Value, SetValue] = useState(0);
    const Increment = () => {
      SetValue(Value + 1);
    };
    const Decrement = () => {
      if (Value !== 0) SetValue(Value - 1);
    };
    return (
      <div>
        <WrappedComponent
          values={Value}
          increament={Increment}
          decrement={Decrement}
        />
      </div>
    );
  }
  return Hoc;
};

export default CountHoc;
