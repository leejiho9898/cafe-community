import client from "./client";

export const readBoardListAPI = async (cafeId) => {
  const response = await client.get(`/board/readBoardList/${cafeId}`);
  return response.data.boards;
};

export const createBoardAPI = async (cafeId, name) => {
  const response = await client.post(`/board/createBoard/${cafeId}`, { name });
  return response.data.board;
};

export const deleteBoardAPI = async (cafeId,boardId) => {
  const response = await client.delete(`/board/deleteBoard/${cafeId}/${boardId}`);
  return response.data.boards;
};

export const updateBoardAPI = async (cafeId, name, boardId) => {
  const body = {
    name,
    boardId,
  };
  const response = await client.patch(`/board/modifyBoard/${cafeId}`, body);
  return response.data.boards;
};
