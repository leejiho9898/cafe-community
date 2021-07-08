import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

const PostForm = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="title" />
        <select name="" id="">
          <option value="">category select</option>
          <option value="">all post</option>
          <option value="">dohyun post</option>
        </select>
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
      </form>
    </>
  );
};

export default PostForm;
