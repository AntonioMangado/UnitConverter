import React from "react";
import ExchangeLogo from "../../assets/exchange-logo.png";

const Header = () => {
  return (
    <header>
      <div>
        <img src={ExchangeLogo} alt="" />
        <h3>unit converter</h3>
      </div>
    </header>
  );
};

export default Header;
