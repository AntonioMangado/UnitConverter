import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeConvertion } from "../../../redux/slices/SavedConvertionsSlice";

const SavedConvertions = () => {

  const dispatch = useDispatch();
  const savedConvertions = useSelector((state) => state.savedConvertions.convertions);

  const printCards = () => {
    return savedConvertions.map((convertion, i) => {
      return (
        <div key={convertion.id} className="saved-convertion-card">
          <p>{convertion.inputQuantity} {convertion.inputUnit} → {(convertion.outputQuantity).toFixed(2)} {convertion.outputUnit}</p>
          <button onClick={() => dispatch(removeConvertion(convertion.id))}>X</button>
        </div>
      );
    });
  };
  
  return (
    <section id="saved-convertions-container">
      {savedConvertions.length > 0 ? <p className="saved-title">saved</p> : ""}
      <div>
        {printCards()}
      </div>
    </section>
  );
}

export default SavedConvertions;
