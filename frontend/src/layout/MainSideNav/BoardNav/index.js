import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsFileText } from "react-icons/bs";
import { useEffect } from "react";
import client from "api/client";
import { useSelector } from "react-redux";
function BoardNav() {


  const [boards, setBoards] = useState([]);
  const cafeInfo = useSelector((state) => state.cafe);
  const params = useParams();
  const route = params.cafe;

  useEffect(() => {
    console.log(cafeInfo);
    const getBoard = async () => {
        const response = await client.get(`/board/readBoardList/${cafeInfo._id}`);
        setBoards(response.data.boards);
      };
      getBoard();
  }, [cafeInfo]);

  return (
    <div>
      {boards.map((board, index) => (
        <div className="notice-board-list" key={index}>
          <div className="notice-board">
            <BsFileText size="18" />
            <Link to={`/cafeMain/${route}/board/${board.name}`}>{board.name}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoardNav;
