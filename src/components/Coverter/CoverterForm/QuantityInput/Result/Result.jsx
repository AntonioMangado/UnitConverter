import React from "react";

const Result = ({ outputUnit, outputQuantity }) => {
  return (
  <div id="result-container">
    <span id="result-number">{outputQuantity.toFixed(2)}</span>
    <span id="result-unit">{outputUnit}</span>
  </div>
  );
};

export default Result;
