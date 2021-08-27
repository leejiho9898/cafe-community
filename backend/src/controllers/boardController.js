import { Request, Response } from "express";
import Board from "../models/board";

// 게시판 생성
export const create = async (req, res) => {
  const { name } = req.body;
  const { cafeId } = req.params;

  try {
    const boards = await Board.find({ cafe: cafeId });
    console.log(boards);
    const exist = boards.find((f) => f.name === name);

    if (exist) {
      return res.status(409).json({
        success: false,
        message: "해당 게시판이 이미 존재합니다.",
      });
    }
    const board = new Board({ name, cafe: cafeId });
    await board.save();

    return res.status(201).json({
      success: true,
      board,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

//게시판 읽기
export const readBoardList = async (req, res) => {
  const { cafeId } = req.params;
  try {
    const boards = await Board.find({
      cafe: cafeId,
    });
    return res.status(200).json({
      success: true,
      boards,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

//게시판 불러오기
export const readBoard = async (req, res) => {
  const { boardId } = req.params;
  try {
    const board = await Board.findById({
      _id: boardId,
    });
    return res.status(200).json({
      success: true,
      board,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

//게시판 수정
export const modifyBoard = async (req, res) => {
  const { boardId, name } = req.body;
  const { cafeId } = req.params;
  try {
    const board = await Board.findByIdAndUpdate(
      { _id: boardId },
      { name },
      { new: true }
    );
    if (!board) {
      return res.status(400).json({
        success: false,
        message: "게시판이 존재하지 않습니다.",
      });
    }

    const boards = await Board.find({ cafe: cafeId });
    return res.status(200).json({
      success: true,
      boards,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

//게시판 지우기
export const deleteBoard = async (req, res) => {
  const { boardId,cafeId } = req.params;
  try {
    const board = await Board.findOneAndDelete({
      _id: boardId,
    });

    if (!board) {
      return res.status(400).json({
        success: false,
        message: "해당 게시판이 존재하지 않습니다",
      });
    }

    const boards = await Board.find({ cafe: cafeId });

    return res.status(200).json({
      success: true,
      boards,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
