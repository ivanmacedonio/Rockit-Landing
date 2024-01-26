import { motion } from "framer-motion";
import React from "react";
import "../Styles/Methods.css";
import m1 from "../assets/m1.png";
import magento from "../assets/magento.png";
import mastercard from "../assets/mastercard-1.png";
import mobile from "../assets/mobilepay-1.png";
import vipps from "../assets/vipps.png";
import visa2 from "../assets/visa2.png";
export const Methods = () => {
  return (
    <div className="methodsContainer" id="hrefpayment">
      <motion.div
        className="methodsText"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>PAYMENT METHODS</h2>
        <h1>We support many alternative and local payment methods</h1>
        <p>
          We work with our partners and customers to constantly improve and meet
          the needs of the market, therefore we offer many international and
          non-standard payment methods.
        </p>
      </motion.div>
      <motion.div
        className="methodsImages"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={m1} alt="" />
        <img src={magento} alt="" />
        <img src={mastercard} alt="" />
        <img src={mobile} alt="" />
        <img src={vipps} alt="" />
        <img src={visa2} alt="" />
      </motion.div>
    </div>
  );
};
