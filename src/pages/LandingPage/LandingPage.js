import React from "react";
import "./LandingPageStyle.css";

const LandingPage = () => {
  return (
    <div id="land">
      <div id="header">
        <div id="search-area">
          <div className="logo">
            <a href="/">JHCAFE</a>
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
        <div className="cafe-list">
          <div className="cafe-object">
            <div className="cafe-thumb"></div>
            <strong>
              <a href="/cafe">●지호카페● 대한민국 일등 카페 </a>
            </strong>
          </div>
          <div className="cafe-recent">
            <ul>
              <li>최근에 올라온글</li>
              <li>최근에 올라온글</li>
              <li>최근에 올라온글</li>
            </ul>
          </div>
        </div>
        <div className="cafe-list">
          <div className="cafe-object">
            <div className="cafe-thumb"></div>
            <strong>
              <a href="/cafe">
                도현카페-이도현의 만점시험지를 휘날리자★수능 공부 과외 편입 유학
              </a>
            </strong>
          </div>
        </div>
        <div className="cafe-list">
          <div className="cafe-object">
            <div className="cafe-thumb"></div>
            <strong>
              <a href="/cafe">
                종현카페-전국 대학생
                모임(대학생,레포트,토익,족보,스펙,공모전,자격증,편입학)
              </a>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
