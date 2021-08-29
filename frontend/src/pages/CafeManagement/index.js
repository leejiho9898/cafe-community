import LandingHeader from "layout/LandingHeader";
import MainHeader from "layout/MainHeader";
import "./style.scss";
import React from "react";
import ManagementNav from "./../../layout/ManagementNav/index";
import { Route } from "react-router-dom";
import BoardManage from "components/ManageForm/BoardManage/index";
import PostManage from "components/ManageForm/PostManage";

function CafeManagement() {
  return (
    <>
      <LandingHeader />

      <MainHeader />

      <div id="management-container">
        <ManagementNav />
      </div>
      <Route exact path="/management/:cafe/board/:boardId?" component={BoardManage} />
      <Route exact path="/management/:cafe/post/:postId?" component={PostManage} />
    </>
  );
}

export default CafeManagement;
