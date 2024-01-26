import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import "../Styles/Start.css";
import mockup from "../assets/mockup.webp";
export const Start = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const newY = Math.min(window.scrollY, 100);
      controls.start({ y: newY });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <motion.div
      className="startContainer"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="textStart">
        <h2>PAYMENT SERVICE PROVIDER</h2>
        <h1>Accept payments online with RockIT!</h1>
        <a>Know More </a>
      </div>

      <motion.div className="startImages" animate={controls}>
        <img src={mockup} alt="" />
      </motion.div>
    </motion.div>
  );
};
