import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "./PostformStyle.css"
const PostForm = () => {
  return (
    <>
      <form>
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
        <input type="text" placeholder="글제목" id="tit" />
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
              console.log(data);
            }}
            editor={DecoupledEditor}
            data=""
          />
        </div>
        <button type="submit">제출</button>
      </form>
    </>
  );
};

export default PostForm;
