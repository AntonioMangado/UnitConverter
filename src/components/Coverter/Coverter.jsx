import React from "react";
import CoverterForm from "./CoverterForm";
import SavedConvertions from "./SavedConvertions/SavedConvertions";

const Coverter = () => {
  return (
    <section id="converter-convertions-container">
      <CoverterForm />
      <SavedConvertions />
    </section>
  );
};

export default Coverter;
