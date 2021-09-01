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
  const [activeUpdate, setactiveUpdate] = useState("");
  const [commentContent, setcommentContent] = useState([]);
  const [Date, setDate] = useState("");
  const [comments, setcommnets] = useState([]);
  const [updateContent, setupdateContent] = useState("")
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
        `/comment/deleteComment/${postId}/${commentId}`
      );
      setcommnets(response.data.comments);
    } catch (e) {
      alert("댓글 삭제에 실패했습니다.");
      console.log(e);
    }
  };
  const onClickActiveUpdateComment = async (commentId,content) => {
    setactiveUpdate(commentId);
    setupdateContent(content)
  };
  const cancelUpdateComment = ()=>{
    setactiveUpdate("");
  }

  const onChangeUpdate=(e)=>{
    setupdateContent(e.target.value)
    console.log(activeUpdate);
  }
  const onClickUpdataComment = async (commentId,content) => {
    const body = {
      commentId,
      content,
      postId,
    };
    console.log(content)
    console.log(commentId)
    try {
      const response = await client.patch(`/comment/updateComment`, body);
      setcommnets(response.data.comments);
      setactiveUpdate("");
      
    } catch (e) {
      alert("댓글 수정에 실패했습니다.");
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

              {activeUpdate === comment._id ? (
                <div className="update-reply">
                  <input type="text" onChange={onChangeUpdate} value={updateContent} className="updateinput"/>
                  <div className="bubble-ele2" onClick={()=>{onClickUpdataComment(comment._id,updateContent)}}>제출</div>
                <div className="bubble-ele2" onClick={cancelUpdateComment}>취소</div>
                </div>
              ) : (
                <div className="reply-contents"> {comment.content}</div>
              )}
            </div>
            {user._id == comment.writer._id ? (
              <div className="reply-menu">
                <div className="bubble">
                  <div
                    className="bubble-ele"
                    onClick={() => onClickActiveUpdateComment(comment._id,comment.content)}
                  >
                    수정
                  </div>
                  <div
                    className="bubble-ele"
                    onClick={() => onClickDeleteComment(comment._id)}
                  >
                    삭제
                  </div>
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
