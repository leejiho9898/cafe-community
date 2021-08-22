import client from "api/client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import "./style.scss";

function BoardManage() {
  const history = useHistory();
  const cafeInfo = useSelector((state) => state.cafe);
  const [Boards, setBoards] = useState([]);
  const params = useParams();

  const boardId = params.boardId;
  useEffect(() => {
    const getBoard = async () => {
      const response = await client.get(`/board/readBoardList/${cafeInfo._id}`);
      setBoards(response.data.boards);
    };
    getBoard();
  }, [cafeInfo]);

  const [title1, setTitle1] = useState(); //수정용
  const [title2, setTitle2] = useState(); //제작용

  const onChangeUpdateTitle = (e) => {
    setTitle1(e.target.value);
    console.log(title1);
  };
  
  const onChangecreateTitle = (e) => {
    setTitle2(e.target.value);
    console.log(title2);
  };


  const onClickDelete = async () => {
    try {
      const newBoard = await client.delete(
        `http://localhost:4000/api/board/deleteBoard/${cafeInfo._id}/${boardId}`
      );
      console.log(newBoard.data);
      history.push(`/management/${cafeInfo.route}/board`);
      window.location.reload();
    } catch (e) {
      alert("게시글 삭제에 실패했습니다.");
      console.log(e);
    }
  };



  const onSubmit =async (e) =>{
    e.preventDefault();
    const body = {
      name:title2,
    };
    try {
      const response = await client.post(`/board/createBoard/${cafeInfo._id}`, body);
      console.log(response);
      history.push(`/management/${cafeInfo.route}/board`);
      window.location.reload();
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  

  

  const onClickUpdate = async () => {

    const body = {
      name: title1,
      boardId,
    };
    try {
      const response = await client.patch(
        `/board/modifyBoard/${cafeInfo._id}`,
        body
      );
      console.log(response);
      history.push(`/management/${cafeInfo.route}/board`);
      window.location.reload();
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div id="boardManage-container">
      <div className="title">게시판 관리</div>
      <div className="board-manage-div">
        <div className="manage-board-list">
          <div className="manage-board-title">게시판리스트</div>
          <div className="manage-board-ele">
            {Boards.map((board, index) => (
              <div>
                <div className="board1" key={index}>
                  <Link to={`/management/first/board/${board._id}`}>
                    {board.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="manage-board-action">
            <div className="action-ele">게시판 생성</div>
            <div className="flex">
              <div className="action-input">
                <input type="text" onChange={onChangecreateTitle} />
              </div>
              <div className="del-board-box">
                <input type="submit" className="del-board" value="생성" onClick={onClickUpdate} />
              </div>
            </div>
            {boardId && (
              <>
                <div className="action-ele">게시판 이름 변경</div>
                <div className="flex">
                  <div className="action-input">
                    <input type="text" onChange={onChangeUpdateTitle} />
                  </div>
                  <div className="del-board-box">
                    <div className="del-board" onClick={onClickUpdate}>수정</div>
                  </div>
                </div>
                <div className="action-ele">게시판 삭제</div>
                <div className="del-board-box">
                  <div className="del-board" onClick={onClickDelete}>
                    삭제
                  </div>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardManage;
