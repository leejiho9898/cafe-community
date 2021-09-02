import { readPostListAPI } from "api/post";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function usePostList() {
  const cafeInfo = useSelector((state) => state.cafe);
  const board = useSelector((state) => state.board);
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await readPostListAPI(cafeInfo._id, board._id);
      setposts(response);
    };
    getPosts();
  }, [board._id, cafeInfo._id]);

  return { cafeInfo, board, posts };
}
