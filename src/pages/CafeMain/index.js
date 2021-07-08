import React from "react";
import { Route, Link } from "react-router-dom";
import Footer from "layout/Footer";
import LandingPage from "../LandingPage";
import MainHeader from "./../../layout/MainHeader/index";
import MainSideNav from "./../../layout/MainSideNav/index";
import "./CafeMainStyle.css";

const CafeMain = () => {
  return (
    <>
      <div id="container">
        <MainHeader />
        <div className="main">
          <MainSideNav />
          <div>CafeMain</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default CafeMain;
