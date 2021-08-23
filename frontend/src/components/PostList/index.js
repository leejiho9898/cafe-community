import React from "react";
import { Link, useParams } from "react-router-dom";
import "./PostListStyle.css";
function PostList() {
  const params = useParams();
  const boardname = params.boardname;
  return (
    <>
      <div className="list-container">
        <div className="board-tit">{boardname}</div>
        <div className="tit-explanation">{boardname}입니다.</div>
        <div className="list-handler">
          <div>11,130개의 글</div>
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
        <div className="notice-post">
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
        </div>
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
              <tr>
                <td className="post-number">
                  <div>123123</div>
                </td>
                <td className="post-tit">
                  <Link>안녕하세요 가입인사입니다.</Link>
                </td>
                <td className="td-name">유재석</td>
                <td className="td-date">2021.07.10.</td>
                <td className="td-view">12</td>
              </tr>
              <tr>
                <td className="post-number">
                  <div>123123</div>
                </td>
                <td className="post-tit">
                  <Link>안녕하세요 가입인사입니다.</Link>
                </td>
                <td className="td-name">유재석</td>
                <td className="td-date">2021.07.10.</td>
                <td className="td-view">0</td>
              </tr>
              <tr>
                <td className="post-number">
                  <div>123123</div>
                </td>
                <td className="post-tit">
                  <Link>안녕하세요 가입인사입니다.</Link>
                </td>
                <td className="td-name">유재석</td>
                <td className="td-date">2021.07.10.</td>
                <td className="td-view">0</td>
              </tr>
              <tr>
                <td className="post-number">
                  <div>123123</div>
                </td>
                <td className="post-tit">
                  <Link>안녕하세요 가입인사입니다.</Link>
                </td>
                <td className="td-name">유재석</td>
                <td className="td-date">2021.07.10.</td>
                <td className="td-view">0</td>
              </tr>
              <tr>
                <td className="post-number">
                  <div>123123</div>
                </td>
                <td className="post-tit">
                  <Link>안녕하세요 가입인사입니다.</Link>
                </td>
                <td className="td-name">유재석</td>
                <td className="td-date">2021.07.10.</td>
                <td className="td-view">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PostList;
