import React, { useEffect, useState } from "react";

const QuantityInput = ({ inputUnit, setInputQuantity }) => {

  return (
    <div>
      <input type="number" name="quantity" id="quantity" onChange={(e) => {setInputQuantity(e.target.value)}} autoComplete="off"/>
      <span id="measurement-unit">{inputUnit}</span>
    </div>
  );
};

export default QuantityInput;
