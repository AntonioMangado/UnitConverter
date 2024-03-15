import React from "react";
import SwitchBtn from "../../../../assets/exchange-logo-white.png"

const UnitSelector = () => {
  return (
  <div>
    <select name="unit-selector" id="unit-selector">
      <option value="kms-miles" selected>kms → miles</option>
      <option value="miles-kms">miles → kms</option>
      <option value="mts-feet">mts → feet</option>
      <option value="feet-mts">feet → mts</option>
      <option value="cms-inches">cms → inches</option>
      <option value="inches-cms">inches → cms</option>
    </select>
    <button id="switch-btn">
      <img src={SwitchBtn} alt="" />
    </button>
  </div>
  );
};

export default UnitSelector;
