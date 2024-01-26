import React from "react";
import "../Styles/Nosotros.css";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
export const Nosotros = () => {
  return (
    <div className="nosotrosContainer" id="hrefnosotros">
      <div className="tips">
        <div className="tip">
          <img src={icon1} alt="" />
          <h2>Get Started in a few minutes</h2>
        </div>
        <div className="tip">
          <img src={icon2} alt="" />
          <h2>Accept all common payment methods</h2>
        </div>
      </div>
      <div className="paralax">
        <h1>Payments on your website</h1>
        <p>
          Securely accept card payments regardless of the currency or card
          brand.
        </p>
        <a>Know More</a>
      </div>
    </div>
  );
};
