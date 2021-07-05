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
      <Link to="/cafe/join">가입하러가기</Link>
      <div></div>
      <Footer />
    </>
  );
};
export default CafeMain;
