import React from "react";
import { Link } from "react-router-dom";
import "./PostViewStyle.scss";
function PostView() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-title">가입인사</div>
        <div className="writer">
          <div className="writer-info">
            <div className="mask"></div>
            <div className="nick">이지호</div>
          </div>
            <div className="date">2021.08.02 11:21</div>
        </div>
      </div>
      <div className="contents">안녕하세요 가입인사입니다 반갑습니다.</div>
      <div className="title">댓글</div>
      <div className="reply-box">
        <div className="writer">
          <div className="mask"></div>
          <div className="nick">탄탄이</div>
          <div className="reply-contents">네 환영합니다~</div>
        </div>
      </div>
      <div className="reply-box">
        <div className="writer">
          <div className="mask"></div>
          <div className="nick">탄탄이</div>
          <div className="reply-contents">네 환영합니다~</div>
        </div>
      </div>
      <div className="write-reply">
        <div className="write-reply-box">
          <div className="nick">이지호</div>
          <input type="text" placeholder="댓글을 남겨보세요" />
          <div className="buttons">등록</div>
        </div>
      </div>
      <div className="bottom-btns">
        <Link to="" className="btm-btn">글쓰기</Link>
        <Link to="" className="btm-btn">수정</Link>
        <Link to="" className="btm-btn">삭제</Link>
        <Link to="" className="btm-btn">목록</Link>
      </div>
    </div>
  );
}

export default PostView;


{/* <div id="dropdown">
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
</div> */}