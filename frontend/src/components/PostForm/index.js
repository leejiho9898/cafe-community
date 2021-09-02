import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "./PostformStyle.scss";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useBoardList from "hooks/board/useBoardListEffect";
import { createPostListAPI } from "api/post";
const PostForm = () => {
  const history = useHistory();
  const cafeInfo = useSelector((state) => state.cafe);
  const user = useSelector((state) => state.user);
  const { boards } = useBoardList();

  const [SelectedBoard, setSelectedBoard] = useState();
  const [form, setform] = useState({
    title: "",
    content: "",
  });

  const { title, content } = form;

  const onClickBoard = (e) => {
    setSelectedBoard(e.currentTarget.value);
    console.log(SelectedBoard);
  };

  const onchange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setform(nextForm);
    console.log(form);
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    console.log(content);
    try {
      const response = await createPostListAPI(
        cafeInfo._id,
        title,
        content,
        SelectedBoard,
        user._id
      );
      console.log(response);
      history.push(`/cafeMain/first/board/${SelectedBoard}`);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <div className="tit">글쓰기</div>
      <form className="post-write-form" onSubmit={onsubmit}>
        <select name="select-border" id="select" onChange={onClickBoard}>
          {boards &&
            boards.map((board, index) => (
              <option key={index} value={board._id}>
                {board.name}
              </option>
            ))}
        </select>
        <input
          type="text"
          placeholder="글제목"
          id="tit"
          name="title"
          value={title}
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
            }}
            editor={DecoupledEditor}
            data=""
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

export default PostForm;
