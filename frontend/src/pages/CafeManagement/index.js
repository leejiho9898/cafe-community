import LandingHeader from "layout/LandingHeader";
import MainHeader from "layout/MainHeader";
import "./style.scss";
import React from "react";
import ManagementNav from "./../../layout/ManagementNav/index";

function CafeManagement() {
  return (
    <>
      <LandingHeader />
      <MainHeader />
      <div id="management-container">
        <ManagementNav />
        <div className="title">카페 관리</div>
        <div></div>
      </div>
    </>
  );
}

export default CafeManagement;
