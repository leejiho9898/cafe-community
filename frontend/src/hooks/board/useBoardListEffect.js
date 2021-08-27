import { readBoardListAPI } from "api/board";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useBoardList() {
  const cafeInfo = useSelector((state) => state.cafe);
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    const getBoard = async () => {
      const boards = await readBoardListAPI(cafeInfo._id);
      setBoards(boards);
    };
    getBoard();
  }, [cafeInfo]);

  //게시판 생성



  
  return {
    boards,
    cafeInfo,
    setBoards
  };
}