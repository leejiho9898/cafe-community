import { Link, useParams } from "react-router-dom";
import { BsFileText } from "react-icons/bs";
import useBoardList from "hooks/board/useBoardListEffect";
function BoardNav() {
  const params = useParams();
  const route = params.cafe;

  const { boards } = useBoardList();
  return (
    <div>
      {boards &&
        boards.map((board, index) => (
          <div className="notice-board-list" key={index}>
            <div className="notice-board">
              <BsFileText size="18" />
              <Link to={`/cafeMain/${route}/board/${board._id}`}>
                {board.name}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BoardNav;
