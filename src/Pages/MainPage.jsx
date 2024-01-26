import React from "react";
import { Contact } from "../Components/Contact";
import { Header } from "../Components/Header";
import { Integration } from "../Components/Integration";
import { Methods } from "../Components/Methods";
import { Nosotros } from "../Components/Nosotros";
import { Start } from "../Components/Start";
import "../Styles/MainPage.css";
export const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <div className="header">
        <Header></Header>
      </div>
      <div className="mainContainer">
        <Start></Start>
        <Nosotros></Nosotros>
        <Integration></Integration>
        <Methods></Methods>
        <Contact></Contact>
      </div>
    </div>
  );
};
