import LandingHeader from "layout/LandingHeader";
import MainHeader from "layout/MainHeader";
import "./style.scss";
import React from "react";
import ManagementNav from "./../../layout/ManagementNav/index";
import { Route } from "react-router-dom";
import BoardManage from "components/ManageForm/BoardManage/index";

function CafeManagement() {
  return (
    <>
      <LandingHeader />
      <MainHeader />
      <div id="management-container">
        <ManagementNav />
        <Route exact path="/management/board" component={BoardManage} />
        <div></div>
      </div>
    </>
  );
}

export default CafeManagement;
