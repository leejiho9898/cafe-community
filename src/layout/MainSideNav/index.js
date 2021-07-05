import React from "react";
import { Link } from "react-router-dom";
import { TiDocumentText, TiMessages } from "react-icons/ti";
function MainSideNav() {
  return (
    <>
      <div className="cafe-info-action">
        <div className="info-action-tab">
          <p>카페정보</p>
          <Link to="">나의 활동</Link>
        </div>
        <div className="cafe-info-data">
          <div className="cafe-thumb"></div>
          <div className="manager">
            <div className="ico-manager">매니저</div>
            <p className="bold">
              <Link to="">매니저 닉네임</Link>
            </p>
            <p className="data-list">
            <Link to="">since 2021.07.06</Link>
            </p>
            <p className="data-list">
              카페소개
            </p>
          </div>
        </div>

        <div className="member-info-data">
          <div className="my-info">
            <div className="mask"></div>
            <div className="my-info-block">
              <p className="bold">Nickname</p>
              <p>가입일</p>
            </div>
            <div className="my-info-grade">
              <p>등급</p>
              <Link to="">맴버등급 안내</Link>
            </div>
            <div className="info-data">
              <ul className="my-activity">
                <li>
                  <TiDocumentText size="20" />
                  <p className="data-list">
                    <Link to="">내가 쓴글 보기</Link>
                  </p>
                  <p className="data-count"> xxx개</p>
                </li>
                <li>
                  <TiMessages size="20" />
                  <p className="data-list">
                    <Link to="">내가 쓴 댓글 보기</Link>
                  </p>
                  <p className="data-count"> xxx개</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cafe-write-btn">
          <Link to="">카페 글쓰기</Link>
        </div>
        <div className="cafe-write-btn">
          <Link to="">카페 글쓰기</Link>
        </div>
      </div>
    </>
  );
}

export default MainSideNav;
