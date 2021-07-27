import React from "react";
import "./styles.css";
import logo from "static/logo.png";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const LandingHeader = () => {
  return (
    <div id="LandingHeader">
      <div id="header">
        <div id="search-area">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="search-box">
            <input
              type="text"
              className="search"
              placeholder="검색어를 입력하세요"
            ></input>
            <div className="search-ico">
              <span>
                <BsSearch size="18" />
              </span>
            </div>
          </div>
        </div>
        <div className="user">
          <div className="user-border">
            <ul>
              <li>
                <Link to="login">로그인</Link>
              </li>
              <li>
                <Link to="signup">회원가입</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
