import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeConvertion } from "../../../redux/slices/SavedConvertionsSlice";
import axios from "../../../api/axios";

const SavedConvertions = () => {

  // const dispatch = useDispatch();
  // const savedConvertions = useSelector((state) => state.savedConvertions.convertions);

  
  // const printCards = () => {
    //   return savedConvertions.map((convertion) => {
      //     return (
        //       <article key={convertion.id} className="saved-convertion-card">
        //         <p>{convertion.inputQuantity} {convertion.inputUnit} → {(convertion.outputQuantity).toFixed(2)} {convertion.outputUnit}</p>
        //         <button onClick={() => dispatch(removeConvertion(convertion.id))}>X</button>
        //       </article>
        //     );
        //   });
        // };
        
  const [savedConvertions, setSavedConvertions] = useState([])

  const deleteConvertionFromDB = (id) => {
    axios.delete("api/convertions", {data:{id: id}})
    location.reload()
  }

  const printCardsFromDB = () => {
    return savedConvertions.map((convertion) => {
      return (
        <article key={convertion.id} className="saved-convertion-card">
          <p>{convertion.inputQuantity} {convertion.inputUnit} → {(convertion.outputQuantity).toFixed(2)} {convertion.outputUnit}</p>
          <button onClick={() => deleteConvertionFromDB(convertion.id)}>X</button>
        </article>
      );
    });
  }

  useEffect(() => {
    axios.get("api/convertions")
      .then(response => setSavedConvertions(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <section id="saved-convertions-container">
      {savedConvertions.length > 0 ? <p id="saved-title">saved</p> : ""}
      <div id="card-container">
        {printCardsFromDB()}
      </div>
    </section>
  );
}

export default SavedConvertions;
