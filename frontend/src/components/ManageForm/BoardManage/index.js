import { createBoardAPI, deleteBoardAPI, updateBoardAPI } from "api/board";
import client from "api/client";
import useBoardList from "hooks/board/useBoardListEffect";
import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./style.scss";

function BoardManage() {
  const params = useParams();

  const boardId = params.boardId;
  const { cafeInfo, boards, setBoards } = useBoardList();

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
    console.log("나 딜리트다");
    try {
      const response = await deleteBoardAPI(cafeInfo._id, boardId);
      console.log(response);
      setBoards(response);
    } catch (e) {
      alert(e);
    }
  };

  const onClickCreate = async (e) => {
    console.log("나 크리에이트다");
    e.preventDefault();
    try {
      const response = await createBoardAPI(cafeInfo._id, title2);
      console.log(response);

      setBoards(boards.concat(response));
    } catch (e) {
      alert(e);
    }
  };
  const onClickUpdate = async () => {
    try {
      const response = await updateBoardAPI(cafeInfo._id, title1, boardId);
      console.log(response);
      setBoards(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="boardManage-container">
      <div className="title">게시판 관리</div>
      <div className="board-manage-div">
        <div className="manage-board-list">
          <div className="flex">
            <div className="manage-board-title">게시판리스트</div>
            <div><Link to={`/management/${cafeInfo.route}/board`}>게시판 생성하러가기</Link></div>
          </div>

          <div className="manage-board-ele">
            {boards.map((board, index) => (
              <div className="board1" key={index}>
                <Link to={`/management/first/board/${board._id}`}>
                  {board.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={onClickCreate}>
          <div className="manage-board-action">
            {boardId ? (
              <>
                <div className="action-ele">게시판 이름 변경</div>
                <div className="flex">
                  <div className="action-input">
                    <input type="text" onChange={onChangeUpdateTitle} />
                  </div>
                  <div className="del-board-box">
                    <div className="del-board" onClick={onClickUpdate}>
                      수정
                    </div>
                  </div>
                </div>
                <div className="action-ele">게시판 삭제</div>
                <div className="del-board-box">
                  <div className="del-board" onClick={onClickDelete}>
                    삭제
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="action-ele">게시판 생성</div>
                <div className="flex">
                  <div className="action-input">
                    <input type="text" onChange={onChangecreateTitle} />
                  </div>
                  <div className="del-board-box">
                    <input type="submit" className="del-board" value="생성" />
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
