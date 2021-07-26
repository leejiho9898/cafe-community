import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Footer from "layout/Footer";
import LandingPage from "../LandingPage";
import MainHeader from "./../../layout/MainHeader/index";
import MainSideNav from "./../../layout/MainSideNav/index";
import "./CafeMainStyle.css";
import PostList from "./../../components/PostList/index";
import PostForm from "components/PostForm";
import JoinForm from "components/JoinForm/JoinForm";
import PostView from "components/PostView";

const CafeMain = ({ match }) => {
  const board = match.params.id;
  console.log(match);

  let fakeData = [
    {
      id: 1,
      board: "chat",
    },
    {
      id: 2,
      board: "notice",
    },
    {
      id: 3,
      board: "movie",
    },
    {
      id: 4,
      board: "worry",
    },
    {
      id: 5,
      board: "photo",
    },
    {
      id: 6,
      board: "humor",
    },
    {
      id: 7,
      board: "news",
    },
    {
      id: 8,
      board: "fashon",
    },
    {
      id: 9,
      board: "recent",
    },
    {
      id: 10,
      board: "game",
    },
    {
      id: 11,
      board: "moviereco",
    },
  ];
  const [boardFilter, setboardFilter] = useState([]);
  useEffect(() => {
    if (!board) {
      setboardFilter(fakeData);
    } else {
      setboardFilter(fakeData.filter((data) => data.board === board));
    }
  }, [board]);

  return (
    <>
      <div id="container">
        <MainHeader />
        <div className="main">
          <MainSideNav />
          <div className="content">
            <Switch>
              <Route path="/cafeMain/join" exact component={JoinForm} />
              <Route path="/cafeMain/write" exact component={PostForm} />
              <Route path="/cafeMain/board/post/:postid?" exact component={PostView} />
              <Route path="/cafeMain/board:boardid?" exact component={PostList} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default CafeMain;
