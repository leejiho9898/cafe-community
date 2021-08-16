import React from "react";
import "./style.scss";
import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cafe from "modules/cafe";

function ManagementNav() {
  const cafeInfo = useSelector((state) => state.cafe)
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
              <Link to={`/management/${cafeInfo.route}/board`}>게시판 관리</Link>
            </div>
            <div>
              <Link to={`/management/${cafeInfo.route}/post`}>글 관리</Link>
            </div>
          </div>
        </div>

        <div className="contents-manage">
          <div className="contents-tit">
            <TiDocumentText size="24" />
            멤버, 스탭 관리
          </div>
          <div className="contents-list">
            <div><Link>전체 멤버 관리</Link></div>
            <div><Link>등급 관리</Link></div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default ManagementNav;
