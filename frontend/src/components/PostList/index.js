import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./PostListStyle.css";
import { useDispatch } from "react-redux";
import client from "api/client";
import { SetBoard } from "modules/board";
import usePostList from "hooks/post/usePostListEffect";
function PostList() {
  const dispatch = useDispatch();
  const params = useParams();
  const boardId = params.boardId;
  const { cafeInfo, board, posts } = usePostList();
  useEffect(() => {
    const getBoardDetail = async () => {
      const response = await client.get(`/board/readBoard/${boardId}`);
      dispatch(SetBoard(response.data.board));
    };
    getBoardDetail();
  }, [boardId]);
  return (
    <>
      <div className="list-container">
        <div className="board-tit">{board.name}</div>
        <div className="tit-explanation">{board.name}입니다.</div>
        <div className="list-handler">
          <div>{posts.length}개의 글</div>
          <div>
            <input type="checkbox" name="chk_info" value="seeNotice" /> 공지
            숨기기
          </div>
        </div>
        <div className="table-title">
          <table>
            <colgroup>
              <col style={{ width: "88px" }} />
              <col style={{ width: "526px" }} />
              <col style={{ width: "118px" }} />
              <col style={{ width: "80px" }} />
              <col style={{ width: "68px" }} />
            </colgroup>
            <tbody>
              <tr>
                <td className="post-number">말머리</td>
                <td className="post-tit">제목</td>
                <td className="td-name">작성자</td>
                <td className="td-date">작성일</td>
                <td className="td-view">조회</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="notice-post">
          <table>
            <colgroup>
              <col style={{ width: "88px" }} />
              <col style={{ width: "550px" }} />
              <col style={{ width: "118px" }} />
              <col style={{ width: "80px" }} />
              <col style={{ width: "68px" }} />
            </colgroup>
            <tbody>
              <tr>
                <td className="post-number">
                  <div>123123</div>
                </td>
                <td className="post-tit">
                  <Link to="board/post">안녕하세요 가입인사입니다.</Link>
                </td>
                <td className="td-name">유재석</td>
                <td className="td-date">2021.07.10.</td>
                <td className="td-view">0</td>
              </tr>
            </tbody>
          </table>
        </div> */}
        <div className="posts">
          <table>
            <colgroup>
              <col style={{ width: "88px" }} />
              <col style={{ width: "526px" }} />
              <col style={{ width: "118px" }} />
              <col style={{ width: "80px" }} />
              <col style={{ width: "68px" }} />
            </colgroup>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td className="post-number">
                    <div>123123</div>
                  </td>
                  <td className="post-tit">
                    <Link
                      to={`/cafeMain/${cafeInfo.route}/board/${boardId}/post/${post._id}`}
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="td-name">{post.writer.name}</td>
                  <td className="td-date">{post.createdAt.substr(5, 5)}</td>
                  <td className="td-view">12</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PostList;
