import React, { useEffect, useState } from "react";
import client from "api/client";
import { Link, useParams } from "react-router-dom";
import { TiDocumentText, TiMessages } from "react-icons/ti";
import { BsSearch, BsFileText } from "react-icons/bs";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import cafe, { SetCafe } from "modules/cafe";
import BorderNav from "../BoardNav";
import useBoardList from "hooks/board/useBoardListEffect";

function CafeInfoNav() {
  const cafeInfo = useSelector((state) => state.cafe);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [InfoSwich, setInfoSwich] = useState(true);
  const params = useParams();
  const route = params.cafe;
  useEffect(() => {
    const getCafe = async () => {
      const response = await client.get(`/cafe/cafeInfo/${route}/${user._id}`);
      // console.log(user._id)
      dispatch(SetCafe(response.data.cafeInfo));
    };
    getCafe();
  }, [route, dispatch]);

  return (
    <>
      <div className="sidenav-container">
        <div className="cafe-info-action">
          <div className="info-action-tab">
            <p className="info-tab-link">
              <Link
                onClick={() => {
                  setInfoSwich(true);
                }}
              >
                카페 정보
              </Link>
            </p>
            <p className="info-tab-link">
              <Link
                onClick={() => {
                  setInfoSwich(false);
                }}
              >
                나의 활동
              </Link>
            </p>
          </div>
          {InfoSwich === true ? (
            <div className="cafe-info-data" key="1">
              <div className="cafe-thumb"></div>
              <div className="manager">
                <div className="ico-manager">매니저</div>
                <div className="bold">
                  <Link to="">{cafeInfo.manager.name}</Link>
                </div>
                <p className="data-list">since 2021.07.06</p>

                <p className="data-list">
                  <Link to={`/management/${cafeInfo.route}`}>카페관리</Link>
                </p>
              </div>
            </div>
          ) : (
            <div className="member-info-data">
              <div className="my-info">
                <div className="mask"></div>
                <div className="my-info-block">
                  <p className="bold">Nickname</p>
                  <p className="data-list">가입 2021.07.07</p>
                </div>
              </div>
              <div className="my-info-grade">
                <div clsssName="data-list">열심회원</div>
                <Link to="">맴버등급 안내</Link>
              </div>
              <div className="info-data">
                <div className="my-ex">
                  <div className="flex">
                    <TiDocumentText size="20" />
                    <p className="data-list">
                      <Link to="">내가 쓴글 보기</Link>
                    </p>
                  </div>
                  <div className="data-count"> xxx개</div>
                </div>
                <div className="my-ex">
                  <div className="flex">
                    <TiMessages size="20" />
                    <div className="data-list">
                      <Link to="">내가 쓴 댓글 보기</Link>
                    </div>
                  </div>
                  <p className="data-count"> xxx개</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="cafe-btns">
          <div className="cafe-write-btn blk">
            <Link to={`/cafeMain/${route}/write`}>카페 글쓰기</Link>
          </div>
          <div className="cafe-chat-btn">
            <Link to="">채팅</Link>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" />
          <BsSearch size="18" />
        </div>
        <BorderNav />
      </div>
    </>
  );
}

export default CafeInfoNav;
