import { Request, Response } from "express";
import Board from "../models/board";

// 게시판 생성
export const create = async (req, res) => {
  const { name } = req.body;
  const { cafeId } = req.params;
  
  try {
    const boards = new Board({ name, cafe: cafeId });
    await boards.save();

    return res.status(201).json({
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
