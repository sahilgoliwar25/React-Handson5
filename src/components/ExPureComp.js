import React, { useState } from "react";

const ExPureComp = () => {
  const [name] = useState("John");
  return (
    <div>
      This Component is an Example of Pure Component
      <br />
      {name}
    </div>
  );
};

export default ExPureComp;
