import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import client from "api/client";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { useHistory, useParams } from "react-router-dom";
import useBoardList from "hooks/board/useBoardListEffect";
import { updatePostAPI } from "api/post";

const PostUpdate = () => {
  const history = useHistory();
  const params = useParams();
  const postId = params.postId;
  const cafeInfo = useSelector((state) => state.cafe);
  const [SelectedBoard, setSelectedBoard] = useState();
  const user = useSelector((state) => state.user);
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
  }, [params]);

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

    const body = {
      title,
      content,
      postId,
    };

    try {
      const response = await updatePostAPI(title,content,postId)
      history.push("/")
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <div className="tit">글수정</div>
      <form className="post-write-form" onSubmit={onsubmit}>
        <select name="select-border" id="select"  onChange={onClickBoard}>
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

              setform({ content: data });
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
