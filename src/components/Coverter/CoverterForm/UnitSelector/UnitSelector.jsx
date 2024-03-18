import React, { useEffect, useState } from "react";
import SwitchBtn from "../../../../assets/exchange-logo-white.png"

const UnitSelector = ({ setInputUnit, setOutputUnit, setArrayPosition, arrayPosition }) => {

  const [value, setValue] = useState("kms-miles-0");
  const [arrayDif, setArrayDif] = useState(0);

  useEffect(() => {
    setInputUnit(value.split("-")[0]);
    setOutputUnit(value.split("-")[1]);
    setArrayPosition(value.split("-")[2]);
  }, [value, setInputUnit, setOutputUnit, setArrayPosition]);

  const switchUnits = () => {
    const select = document.getElementById("unit-selector");
    if (select.value === "kms-miles-0") {
      select[1].selected = true;
      setValue("miles-kms-1");
    } else if (select.value === "miles-kms-1") {
      select[0].selected = true;
      setValue("kms-miles-0");
    } else if (select.value === "mts-feet-2") {
      select[3].selected = true;
      setValue("feet-mts-3");
    } else if (select.value === "feet-mts-3") {
      select[2].selected = true;
      setValue("mts-feet-2");
    } else if (select.value === "cms-inches-4") {
      select[5].selected = true;
      setValue("inches-cms-5");
    } else if (select.value === "inches-cms-5") {
      select[4].selected = true;
      setValue("cms-inches-4");
    }
  }

  return (
  <div>
    <select name="unit-selector" id="unit-selector" onChange={(e) => setValue(e.target.value)} value={value}>
      <option value="kms-miles-0">kms → miles</option>
      <option value="miles-kms-1">miles → kms</option>
      <option value="mts-feet-2">mts → feet</option>
      <option value="feet-mts-3">feet → mts</option>
      <option value="cms-inches-4">cms → inches</option>
      <option value="inches-cms-5">inches → cms</option>
    </select>
    <button id="switch-btn">
      <img src={SwitchBtn} alt="" onClick={switchUnits} />
    </button>
  </div>
  );
};

export default UnitSelector;
