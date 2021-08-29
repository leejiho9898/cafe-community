import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./PostViewStyle.scss";
import client from "api/client";
import { useDispatch, useSelector } from "react-redux";
import { SetPost } from "modules/post";

import { BsThreeDotsVertical } from "react-icons/bs";
function PostView() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const postId = params.postid;
  const boardId = params.boardId;
  const cafe = params.cafe;
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const cafeInfo = useSelector((state) => state.cafe);
  const [commentContent, setcommentContent] = useState([]);
  const [Date, setDate] = useState("");
  const [comments, setcommnets] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await client.get(`/post/readPostDetail/${postId}`);
      dispatch(SetPost(response.data.post));
      setDate(response.data.post.createdAt);
    };
    getData();
  }, []);

  useEffect(() => {
    const getComment = async () => {
      const response = await client.get(`/comment/readComments/${postId}`);
      console.log(response.data.comments);
      setcommnets(response.data.comments);
    };
    getComment();
  }, []);

  const onchange = (e) => {
    setcommentContent(e.target.value);
    console.log(commentContent);
  };

  const onClickWriteComment = async (e) => {
    e.preventDefault();
    const body = {
      postId,
      userId: user._id,
      content: commentContent,
    };
    try {
      const response = await client.post(`/comment/createComment`, body);
      console.log(response);
      setcommnets(comments.concat(response.data.comment));
      setcommentContent("");
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const onClickDeleteComment = async (commentId) => {
    try {
      const response = await client.delete(
        `/comment/deleteComment/${cafeInfo._id}/${commentId}`
      );
      console.log(response.data.comments);
    } catch (e) {
      alert("댓글 삭제에 실패했습니다.");
      console.log(e);
    }
  };

  return (
    <div className="post-container">
      <div className="post-from">
        <Link to={`/cafemain/${cafe.router}/board/${boardId}`}>
          {post.board.name}
        </Link>
      </div>
      <div className="post-header">
        <div className="post-title">{post.title}</div>
        <div className="writer">
          <div className="writer-info">
            <div className="mask"></div>
            <div className="nick">{post.writer.name}</div>
          </div>
          <div className="date">{Date.substr(0, 10)}</div>
        </div>
      </div>
      <div
        className="contents"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>

      <div className="title">댓글</div>
      {comments &&
        comments.map((comment, index) => (
          <div className="reply-box" key={index}>
            <div className="writer">
              <div className="mask"></div>
              <div className="nick">{comment.writer.name}</div>
              <div className="reply-contents">{comment.content}</div>
            </div>
            {user._id == comment.writer._id ? (
              <div className="reply-menu">
                <div className="bubble">
                  <button className="bubble-ele" >수정</button>
                  <button className="bubble-ele" onClick={onClickDeleteComment}>삭제</button>
                </div>
                <BsThreeDotsVertical />
              </div>
            ) : null}
          </div>
        ))}
      <form onSubmit={onClickWriteComment}>
        <div className="write-reply">
          <div className="write-reply-box">
            <div className="nick">{user.name}</div>
            <input
              type="text"
              placeholder="댓글을 남겨보세요"
              onChange={onchange}
              name="commentContents"
              value={commentContent}
            />
            <div className="buttons">
              <input type="submit" value="등록" />
            </div>
          </div>
        </div>
      </form>
      <div className="bottom-btns">
        <Link to={`/cafeMain/${cafe}/write`} className="btm-btn">
          글쓰기
        </Link>
        <Link to={`/cafeMain/${cafe}/update/${postId}`} className="btm-btn">
          수정
        </Link>
        <Link className="btm-btn">삭제</Link>
        <Link
          className="btm-btn"
          onClick={() => {
            history.push(`/cafeMain/${cafe}/board/${boardId}/`);
          }}
        >
          목록
        </Link>
      </div>
    </div>
  );
}

export default PostView;
