import React from "react";
import { Route, Link } from "react-router-dom";
import Footer from "layout/Footer";
import LandingPage from "../LandingPage";
import MainHeader from './../../layout/MainHeader/index';

const CafeMain = () => {
  return (
    <>
      <MainHeader />
      <Link to="/cafe/join">가입하러가기</Link>
      <div></div>
      <Footer />
    </>
  );
};
export default CafeMain;
