import React, {useState, useEffect} from "react";
import UnitSelector from "./UnitSelector";
import QuantityInput from "./QuantityInput";
import FavButton from "./FavButton";
import Result from "../CoverterForm/QuantityInput/Result";
const conversions = [0.621371, 1.60934, 3.28084, 0.3048, 0.393701, 2.54]

const CoverterForm = () => {

  const [inputUnit, setInputUnit] = useState("kms");
  const [outputUnit, setOutputUnit] = useState("miles");
  const [arrayPosition, setArrayPosition] = useState(0);
  const [inputQuantity, setInputQuantity] = useState(0);
  const [outputQuantity, setOutputQuantity] = useState(0);

  useEffect(() => {
    setOutputQuantity(inputQuantity * conversions[arrayPosition]);
  }, [inputQuantity, arrayPosition, outputQuantity]);

  return (
    <article id="converter-container">
      <p>convert</p>
      <div id="unit-and-input">
        <UnitSelector setInputUnit={setInputUnit} setOutputUnit={setOutputUnit} setArrayPosition={setArrayPosition}/>
        <QuantityInput inputUnit={inputUnit} setInputQuantity={setInputQuantity}/>
      </div>
      <div id="fav-and-result">
        <FavButton />
        <Result outputUnit={outputUnit} outputQuantity={outputQuantity}/>
      </div>
    </article>
  );
};

export default CoverterForm;
