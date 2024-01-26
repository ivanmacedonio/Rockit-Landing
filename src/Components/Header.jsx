import { motion } from "framer-motion";
import React, { useState } from "react";
import "../Styles/Header.css";
import arrow from "../assets/arrowDown.svg";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={logo} alt="" />
        </div>
        <div className="linksContainer">
          <a>Get Started</a>
          <a href="#hrefnosotros">Integration</a>
          <a href="#hrefpayment">Payment Methods</a>
          <a id="btn-contact" href="#hrefcontact">
            Contact us <img src={arrow} alt="" />
          </a>
        </div>
        <div
          className="linksContainerMobile"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={menu} alt="" />
        </div>
      </div>
      <motion.div
        className="linksMobile"
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <a>Get Started</a>
        <a href="#hrefnosotros">Integration</a>
        <a href="#hrefpayment">Payment Methods</a>
        <a id="btn-contact" href="#hrefcontact">
          Contact us <img src={arrow} alt="" />
        </a>
      </motion.div>
    </React.Fragment>
  );
};
