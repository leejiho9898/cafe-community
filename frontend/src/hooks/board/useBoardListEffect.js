import { createBoardAPI, readBoardListAPI } from "api/board";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useInput from "./../common/useInput";

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

  const [createName, onChangeName, setCreateName] = useInput("");
  const onCreateBoard = async (e) => {
    e.preventDefault();
    try {
      const board = await createBoardAPI(cafeInfo._id, createName);

      setBoards(boards.concat(board));
      setCreateName("");
    } catch (error) {
      alert(error);
      setCreateName("");
    }
  };

  

  
  return {
    boards,
    cafeInfo,
    setBoards,
    createName,
    onChangeName,
    onCreateBoard
    
  };
}
