import React from "react";
import { Route, Link } from "react-router-dom";
import Footer from "layout/Footer";
import LandingPage from "../LandingPage";
import MainHeader from './../../layout/MainHeader/index';
import MainSideNav from './../../layout/MainSideNav/index';

const CafeMain = () => {
  return (
    <>
      <MainHeader />
      <MainSideNav />
      <div></div>
      <Footer />
    </>
  );
};
export default CafeMain;
