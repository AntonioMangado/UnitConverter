import React from "react";
import UnitSelector from "./UnitSelector";
import QuantityInput from "./QuantityInput";
import FavButton from "./FavButton";
import Result from "../CoverterForm/QuantityInput/Result";

const CoverterForm = () => {
  return (
    <article id="converter-container">
      <p>convert</p>
      <div id="unit-and-input">
        <UnitSelector />
        <QuantityInput />
      </div>
      <div id="fav-and-result">
        <FavButton />
        <Result />
      </div>
    </article>
  );
};

export default CoverterForm;
