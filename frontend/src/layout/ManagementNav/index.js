import React from "react";
import "./style.scss";
import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";

function ManagementNav() {
  return (
    <div id="ManagementNav-container">
      <div className="tit-menu">
        <div className="contents-manage">
          <div className="contents-tit">
            <TiDocumentText size="24" />
            콘텐츠
          </div>
          <div className="contents-list">
            <div>
              <Link to="/management/board">게시판 관리</Link>
            </div>
            <div>
              <Link to="/management/post">글 관리</Link>
            </div>
          </div>
        </div>

        <div className="contents-manage">
          <div className="contents-tit">
            <TiDocumentText size="24" />
            멤버, 스탭 관리
          </div>
          <div className="contents-list">
            <div>전체 멤버 관리</div>
            <div>등급 관리</div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default ManagementNav;
