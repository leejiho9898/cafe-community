import {
  createBoardAPI,
  deleteBoardAPI,
  readBoardListAPI,
  updateBoardAPI,
} from "api/board";
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
  const [createName, onChangeCreateName, setCreateName] = useInput("");
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

  //게시판 삭제

  const onDeletBoard = async (boardId) => {
    try {
      const boards = await deleteBoardAPI(cafeInfo._id, boardId);
      setBoards(boards);
    } catch (error) {
      alert(error);
    }
  };

  //게시판 불러오기



  
  //게시판 수정
  const [updateName, onChangeUpdateName, setUpdateName] = useInput("");
  const onUpdateBoard = async (boardId) => {
    try {
      const response = await updateBoardAPI(cafeInfo._id, updateName, boardId);
      setBoards(response);
      setUpdateName("");
    } catch (error) {
      alert(error);
    }
  };
  return {
    boards,
    cafeInfo,
    setBoards,
    createName,
    onChangeCreateName,
    onCreateBoard,
    onDeletBoard,
    onUpdateBoard,
    onChangeUpdateName,
    updateName,
  };
}
