import { json, Request, Response } from "express";
import Post from "./../models/post";

// 게시글 생성
export const createPost = async (req, res) => {
  const { title, content, boardId, writer } = req.body;
  const { cafeId } = req.params;
  try {
    if (!boardId) {
      return res.status(400).json({
        success: false,
        message: "게시판을 선택해 주세요.",
      });
    }
    const post = new Post({
      title,
      content,
      writer,
      board: boardId,
      cafe: cafeId,
    });
    await post.save();
    console.log(post);
    return res.status(201).json({
      success: true,
      post,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

//게시글 리스트 불러오기
export const readPostList = async (req, res) => {
  const { cafeId, boardId } = req.params;
  try {
    const posts = await Post.find({
      cafe: cafeId,
      board: boardId,
    }).populate("writer");
    return res.status(200).json({
      success: true,
      posts: [...posts.reverse()],
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

//게시글 상세보기
export const readPostDetail = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById({ _id: postId }).populate("board writer");

    if (!post) {
      return res.status(400).json({
        success: false,
        message: "해당 게시물이 존재하지 않습니다.",
      });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 게시물 수정
export const updatePost = async (req, res) => {
  const { postId, title, content } = req.body;

  try {
    let post = await Post.findById({ _id: postId });

    if (!post) {
      return res.status(400).json({
        success: false,
        message: "해당 게시물이 존재하지 않습니다.",
      });
    }

    post = await Post.findByIdAndUpdate(
      { _id: postId },
      { title, content },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      post,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 게시물 삭제
export const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    let post = await Post.findById({ _id: postId });

    if (!post) {
      return res.status(400).json({
        success: false,
        message: "해당 게시물이 존재하지 않습니다.",
      });
    }

    post = await Post.findByIdAndDelete({ _id: postId });

    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};
