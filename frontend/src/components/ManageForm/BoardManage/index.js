import useBoardList from "hooks/board/useBoardListEffect";
import { Link, useParams } from "react-router-dom";
import "./style.scss";

function BoardManage() {
  const params = useParams();

  const boardId = params.boardId;
  const {
    cafeInfo,
    boards,
    createName,
    onChangeCreateName,
    onCreateBoard,
    onDeletBoard,
    onUpdateBoard,
    onChangeUpdateName,
    updateName,
  } = useBoardList();

  return (
    <div id="boardManage-container">
      <div className="title">게시판 관리</div>
      <div className="board-manage-div">
        <div className="manage-board-list">
          <div className="flex">
            <div className="manage-board-title">게시판리스트</div>
            <div>
              <Link to={`/management/${cafeInfo.route}/board`}>
                게시판 생성하러가기
              </Link>
            </div>
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
        <form onSubmit={onCreateBoard}>
          <div className="manage-board-action">
            {boardId ? (
              <>
                <div className="action-ele">게시판 이름 변경</div>
                <div className="flex">
                  <div className="action-input">
                    <input
                      type="text"
                      onChange={onChangeUpdateName}
                      value={updateName}
                    />
                  </div>
                  <div className="del-board-box">
                    <div
                      className="del-board"
                      onClick={() => onUpdateBoard(boardId)}
                    >
                      수정
                    </div>
                  </div>
                </div>
                <div className="action-ele">게시판 삭제</div>
                <div className="del-board-box">
                  <div
                    className="del-board"
                    onClick={() => onDeletBoard(boardId)}
                  >
                    삭제
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="action-ele">게시판 생성</div>
                <div className="flex">
                  <div className="action-input">
                    <input
                      type="text"
                      onChange={onChangeCreateName}
                      value={createName}
                    />
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
