import React from "react";
import "./styles.css";
import logo from "static/logo.png";
import { BsSearch } from "react-icons/bs";

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
              <li>로그인</li>
              <li>회원가입</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
