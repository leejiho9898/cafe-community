import client from "./client";

export const readPostListAPI = async (cafeId, boardId) => {
  const response = await client.get(`/post/readPostList/${cafeId}/${boardId}`);
  return response.data.posts;
};

export const createPostAPI = async (
  cafeId,
  title,
  content,
  boardId,
  writer
) => {
  const body = {
    title,
    content,
    boardId,
    writer,
  };
  const response = await client.post(`/post/createPost/${cafeId}`, body);
  return response.data.posts;
};

export const updatePostAPI = async (title, content, postId) => {
  const body = {
    title,
    content,
    postId,
  };
  const response = await client.patch(`/post/updatePost`, body);
  return response.data.post;
};

export const readPostDetailAPI = async (postId) => {
  const response = await client.get(`/post/readPostDetail/${postId}`);
  return response.data.post;
};

export const deletePostAPI = async (postId) => {
  const response = await client.delete(`/post/deletePost/${postId}`);
  return response.data;
};
