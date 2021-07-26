import React from "react";
import "./PostViewStyle.scss";
function PostView() {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-tit">가입인사</div>
        <div className="writer">
          <div className="mask"></div>
          <div className="nick">이지호</div>
        </div>
      </div>
      <div className="contents">안녕하세요 가입인사입니다 반갑습니다.</div>
      <div className="reply-box">
        <div className="title">댓글</div>
        <div className="writer">
          <div className="mask"></div>
          <div className="nick">탄탄이</div>
          <div className="reply-contents">네 환영합니다~</div>
        </div>
      </div>
      <div className="write-reply">
            <div className="reply-box">
            <div className="nick">이지호</div>
              <input type="text" placeholder="댓글을 남겨보세요" />
              <div className="buttons">등록</div>
            </div>
          </div>
    </div>
  );
}

export default PostView;
