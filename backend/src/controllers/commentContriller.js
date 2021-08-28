import { Request, Response } from "express";
import Comment from "../models/comment";

//댓글 생성
export const createComment = async (req, res) => {
  const { postId, userId, content } = req.body;

  try {
    if (!postId) {
      return res.status(400).json({
        success: false,
        message: "해당 게시물이 없습니다.",
      });
    }
    if (!content) {
      return res.status(400).json({
        success: false,
        message: "댓글 내용이 입력되지 않았습니다.",
      });
    }

    let comment = new Comment({
      post: postId,
      writer: userId,
      content,
    });

    comment = await comment.populate("writer").execPopulate();
    await comment.save();

    return res.status(200).json({
      success: true,
      comment,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

export const readComments = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await Comment.find({
      post: postId,
    }).populate("writer");
    return res.status(200).json({
      success: true,
      comments: [...comments.reverse()],
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

export const updateComments = async (req, res) => {
  const { content, commentId } = req.body;
  try {
    let comment = await Comment.findById({ _id: commentId });

    if (!comment) {
      return res.status(400).json({
        success: false,
        message: "해당 댓글이 존재하지 않습니다.",
      });
    }

    comment = await Comment.findByIdAndUpdate(
      { _id: commentId },
      { content },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      comment,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

export const deleteComment = async (req, res) => {
  const { postId, commentId } = req.params;
  try {
    let comment = await Comment.findById({ _id: commentId });

    if (!comment) {
      return res.status(400).json({
        success: false,
        message: "해당 댓글이 존재하지 않습니다.",
      });
    }

    comment = await Comment.findByIdAndDelete({ _id: commentId });

    const comments = await Comment.find({
      post: postId,
    });

    console.log("asd");
    return res.status(200).json({
      success: true,
      comments,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
