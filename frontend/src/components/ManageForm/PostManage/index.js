import useBoardList from "hooks/board/useBoardListEffect";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import "./style2.scss";
const PostManage = () => {
  const { cafeInfo, boards } = useBoardList();
  return (
    <div id="boardManage-container">
      <div className="title">글 관리</div>
      <div className="board-manage-div">
        <div className="manage-board-list">
          <div className="manage-board-title">게시판리스트</div>

          <div className="manage-board-ele">
            {boards.map((board, index) => (
              <div className="board1" key={index}>
                <Link to={`/management/${cafeInfo.route}/post/${board._id}`}>
                  {board.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <IoMdArrowForward id="arrow" size="25" />

        <div className="manage-board-action">post들 불러오기</div>
        <div className="manage-board-ele">
          <form>
            <li>삭제하기</li>
            <li>강퇴하기</li>
            <li>재가입 불가 강퇴하기</li>
            <li>활동정지 (몇일 고르는칸 드롭다운)</li>
            <li>맞</li>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostManage;
