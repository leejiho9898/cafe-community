import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./PostViewStyle.scss";
import client from "api/client";
import { useDispatch, useSelector } from "react-redux";
import { SetPost } from "modules/post";

function PostView() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const postId = params.postid;
  const boardId = params.boardId;
  const cafe = params.cafe;
  const post = useSelector((state) => state.post);
  const [Date, setDate] = useState("")
  useEffect(() => {
    const getData = async () => {
      const response = await client.get(`/post/readPostDetail/${postId}`);
      console.log(response.data.post);
      dispatch(SetPost(response.data.post));
      setDate(response.data.post.createdAt)
    };
    getData();
  }, []);
  return (
    <div className="post-container">
      <div className="post-from">{post.board.name}</div>
      <div className="post-header">
        <div className="post-title">{post.title}</div>
        <div className="writer">
          <div className="writer-info">
            <div className="mask"></div>
            <div className="nick">{post.writer.name}</div>
          </div>
          <div className="date">{Date.substr(0,10)}</div>
        </div>
      </div>
      <div className="contents" dangerouslySetInnerHTML={{ __html: post.content }}></div>
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
        <Link to={`/cafeMain/${cafe}/write`} className="btm-btn">
          글쓰기
        </Link>
        <Link to={`/cafeMain/${cafe}/update/${postId}`} className="btm-btn">
          수정
        </Link>
        <Link className="btm-btn">
          삭제
        </Link>
        <Link className="btm-btn" onClick={()=>{history.push(`/cafeMain/${cafe}/board/${boardId}/`)}}>
          목록
        </Link>
      </div>
    </div>
  );
}

export default PostView;
