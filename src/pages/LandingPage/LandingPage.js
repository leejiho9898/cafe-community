import React from "react";
import "./LandingPageStyle.css";
const LandingPage = () => {
  return (
    <div id="land">
      <div id="header">
        <div id="search-area">
          <div className="logo">
            <a href="/">CAFE</a>
          </div>
          <div className="search-box">
            <input
              type="text"
              className="search"
              placeholder="검색어를 입력하세요"
            ></input>
            <div className="search-ico">
              <span>검색</span>
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

      <div id="cafe-container">
        <div id="cafe-list">
            <ul>
                <li>지호카페</li>
                <li>종현카페</li>
                <li>도현카페</li>

            </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
