import React from "react";
import "./LandingPageStyle.css";
import LandingHeader from "layout/LandingHeader";
import Footer from 'layout/Footer/Footer';

const LandingPage = () => {
  return (
    <>
      <LandingHeader />
    <div id="land">

      <div id="contents"></div>
      <div>
        <div className="cafe-tit">
          <ul>
            <li className="active">
              내카페
              <span className="num">3</span>
            </li>
            <li>
              즐겨찾는 카페
            </li>
          </ul>
        </div>
        <div id="cafe-container">
          <div className="cafe-list">
            <div className="cafe-object">
              <div className="cafe-thumb"></div>

              <a href="/cafe">●지호카페● 대한민국 일등 카페 </a>
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
              <a href="/cafe">
                도현카페-수능날 만점시험지를 휘날리자★수능 공부 과외 편입 유학
              </a>
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

              <a href="/cafe">
                종현카페-전국 대학생
                모임(대학생,레포트,토익,족보,스펙,공모전,자격증,편입학)
              </a>
            </div>
            <div className="cafe-recent">
              <ul>
                <li>최근에 올라온글</li>
                <li>최근에 올라온글</li>
                <li>최근에 올라온글</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default LandingPage;
