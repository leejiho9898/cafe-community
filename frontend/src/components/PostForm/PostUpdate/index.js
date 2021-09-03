import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import client from "api/client";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "./style.scss";
import { useHistory, useParams } from "react-router-dom";
import useBoardList from "hooks/board/useBoardListEffect";
import { updatePostAPI } from "api/post";

const PostUpdate = () => {
  const history = useHistory();
  const params = useParams();
  const postId = params.postId;
  const [SelectedBoard, setSelectedBoard] = useState();
  const { boards } = useBoardList();
  const [form, setform] = useState({
    title: "",
    content: "",
  });
  const { title, content } = form;
  useEffect(() => {
    const getData = async () => {
      const response = await client.get(`/post/readPostDetail/${postId}`);
      setform({
        title: response.data.post.title,
        content: response.data.post.content,
      });
    };
    getData();
  }, [postId]);

  const onClickBoard = (e) => {
    setSelectedBoard(e.currentTarget.value);
    console.log(SelectedBoard);
  };

  const onchange = (e) => {
    const nextForm = {
      ...form,
      title: e.target.value,
    };
    setform(nextForm);
    console.log(form);
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updatePostAPI(title, content, postId);
      console.log(response);
      history.push("/");
    } catch (e) {
      if (e.response.data.message) {
        alert(e.response.data.message);
      } else {
        alert("양식을 정확히 입력해주세요.");
      }
    }
  };

  return (
    <>
      <div className="tit">글수정</div>
      <form className="post-write-form" onSubmit={onsubmit}>
        <select name="select-border" id="select" onChange={onClickBoard}>
          <option value="">게시판을 선택해주세요.</option>
          {boards &&
            boards.map((board, index) => (
              <option key={index} value={board._id}>
                {board.name}
              </option>
            ))}
          {/* 아직 백엔드 문제로 게시판수정까지는 불가능한데 일단 만들긴함 */}
        </select>
        <input
          type="text"
          placeholder="글제목"
          id="tit"
          name="title"
          value={title || ""}
          onChange={onchange}
        />
        <div className="write-form">
          <CKEditor
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);

              // Insert the toolbar before the editable area.
              editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                );
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              const nextForm = {
                ...form,
                content: data,
              };
              setform(nextForm);
              console.log(form);
            }}
            editor={DecoupledEditor}
            data={content}
          />
        </div>
        <div className="submit-box">
          <button type="submit" className="submit-button">
            제출
          </button>
        </div>
      </form>
    </>
  );
};

export default PostUpdate;
