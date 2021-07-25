import React from "react";
import "./MainHeaderstyle.css";
import logo from "static/logo.png";
import {Link} from "react-router-dom";
function MainHeader() {
  return (
    <div className="MainHeader-container">
      <div className="gnb">
        <div>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="gnb-menu">
          <a href="/">카페홈 ㅣ</a>
          <div id="dropdown">
            <li>가입카페 ▼</li>
            <div className="mycafe-list">
              <div className="cafe-object">
                <div className="cafe-thumb"></div>

                <a href="/cafeMain">●지호카페● 대한민국 일등 카페 </a>
              </div>
              <div className="cafe-object">
                <div className="cafe-thumb"></div>
                <a href="/cafeMain">
                  도현카페-수능날 만점시험지를 휘날리자★수능 공부 과외 편입 유학
                </a>
              </div>
              <div className="cafe-object">
                <div className="cafe-thumb"></div>
                <a href="/cafeMain">
                  종현카페-전국 대학생
                  모임(대학생,레포트,토익,족보,스펙,공모전,자격증,편입학)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="front-img">
      </div>
    </div>
  );
}

export default MainHeader;
