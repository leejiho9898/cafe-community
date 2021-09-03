import "./style.scss";
import ManagementNav from "./../../layout/ManagementNav/index";
import { Route } from "react-router-dom";
import BoardManage from "components/ManageForm/BoardManage/index";
import PostManage from "components/ManageForm/PostManage";

function CafeManagement() {
  return (
    <>


      <div id="management-container">
        <ManagementNav />
      </div>
      <Route exact path="/management/:cafe/board/:boardId?" component={BoardManage} />
      <Route exact path="/management/:cafe/post/:boardId?/:postId?" component={PostManage} />
    </>
  );
}

export default CafeManagement;
