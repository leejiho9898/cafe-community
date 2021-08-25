import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Footer from "layout/Footer";
import LandingPage from "../LandingPage";
import MainHeader from "./../../layout/MainHeader/index";
import MainSideNav from "../../layout/MainSideNav/CafeInfoNav/index";
import "./CafeMainStyle.css";
import PostList from "./../../components/PostList/index";
import PostForm from "components/PostForm";
import JoinForm from "components/JoinForm/JoinForm";
import PostView from "components/PostView";
import LandingHeader from "layout/LandingHeader";

const CafeMain = () => {



  return (
    <>
      <div id="container">
        <LandingHeader />
        {/* <MainHeader /> */}
        <div className="main">
          <MainSideNav />
          <div className="content">
            <Switch>
              <Route path="/cafeMain/:cafe/join" exact component={JoinForm} />
              <Route path="/cafeMain/:cafe/write" component={PostForm} />
              <Route
                path="/cafeMain/:cafe/board/:boardId?/post/:postid?"
                exact
                component={PostView}
              />
              <Route
                path="/cafeMain/:cafe/board/:boardId?"
                exact
                component={PostList}
              />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default CafeMain;
