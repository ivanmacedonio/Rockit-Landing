import { motion } from "framer-motion";
import React from "react";
import "../Styles/Integration.css";
import magento from "../assets/magento.png";
import mac from "../assets/mock.png";
import nop from "../assets/nopcommerce.png";
import presta from "../assets/prestashop.png";
import shopify from "../assets/shopify.png";
import shoporama from "../assets/shoporama.png";
import woocommerce from "../assets/woocommerce.png";
export const Integration = () => {
  return (
    <div className="integrationContainer" id="hrefintegration">
      <motion.div
        className="integrationApp"
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="appIcons">
          <img src={magento} alt="" />
          <img src={nop} alt="" />
          <img src={presta} alt="" />
          <img src={shopify} alt="" />
          <img src={shoporama} alt="" />
          <img src={woocommerce} alt="" />
        </div>
        <div className="appText">
          <h2>INTEGRATION</h2>
          <h1>Simple integration with the system you're using</h1>
          <p>
            It’s really as simple as downloading and uploading our module to
            your system. The integration is simple and convenient without adding
            any additional costs.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="integrationApi"
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="appText">
          <h1>Or integrate through our API</h1>
          <p>
            The Rockpay API is based on the principles of Representational State
            Transfer (REST) allowing clients to create, view, modify and delete
            resources using standard HTTP request methods.
          </p>
          <a>Contact Us</a>
        </div>
        <div className="apiImage">
          <img src={mac} alt="" />
        </div>
      </motion.div>
    </div>
  );
};
