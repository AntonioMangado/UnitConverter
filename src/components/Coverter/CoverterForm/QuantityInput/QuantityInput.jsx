import React, { useEffect, useState, useRef } from "react";

const QuantityInput = ({ inputUnit, inputQuantity, setInputQuantity }) => {

  return (
    <div>
      <input type="number" name="quantity" id="quantity" onChange={(e) => {setInputQuantity(e.target.value)}} autoComplete="off" value={inputQuantity}/>
      <span id="measurement-unit">{inputUnit}</span>
    </div>
  );
};

export default QuantityInput;
