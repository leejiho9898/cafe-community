import useBoardList from "hooks/board/useBoardListEffect";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const PostManage = () => {
  const { cafeInfo, boards, setBoards } = useBoardList();
  return (
    <div className="postManage-container">
      <div className="title">게시글 관리</div>
        <div className="manage-board-title">게시판리스트</div>
        <div className="manage-board-ele">
            {boards.map((board, index) => (
              <div className="board1" key={index}>
                <Link to={`/management/first/board/${board._id}`}>
                  {board.name}
                </Link>
              </div>
            ))}
          </div>
        <div>asd</div>
      </div>
  );
};

export default PostManage;
