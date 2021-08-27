import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "./PostformStyle.scss";
import { useSelector } from "react-redux";
import client from "api/client";
import { useHistory } from "react-router-dom";
const PostForm = () => {
  const history = useHistory();
  const cafeInfo = useSelector((state) => state.cafe);
  const user = useSelector((state) => state.user);
  const board = useSelector((state) => state.board);
  console.log(user);
  const [form, setform] = useState({
    title: "",
    content: "",
  });

  const { title, content } = form;

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
    const body = {
      title,
      content,
      boardId: "61288966cb11021d9013237d",
      writer: user._id,
    };
    try {
      const response = await client.post(
        `/post/createPost/${cafeInfo._id}`,
        body
      );
      console.log(response);
      history.push("http://localhost:3000/cafeMain/first/board/61288966cb11021d9013237d")
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <div className="tit">글쓰기</div>
      <form className="post-write-form" onSubmit={onsubmit}>
        <select name="select-border" id="select">
          <option value="1">잡담게시판</option>
          <option value="2">공지게시판</option>
          <option value="3">영화게시판</option>
          <option value="4">고민게시판</option>
          <option value="5">포토게시판</option>
          <option value="6">유머게시판</option>
          <option value="7">뉴스게시판</option>
          <option value="8">패션게시판</option>
          <option value="9">근황게시판</option>
          <option value="10">게임게시판</option>
          <option value="11">영화추천게시판</option>
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
