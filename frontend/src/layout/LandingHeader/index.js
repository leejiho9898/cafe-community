import "./styles.css";
import logo from "static/logo.png";
import { BsSearch } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserStateEmpty } from "modules/user";
import client from "api/client";

const LandingHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const logout = async () => {
    try {
      const response = await client.post("/user/logout");
      console.log(response)
      sessionStorage.removeItem("user");
      dispatch(UserStateEmpty());
      history.push("/");
    } catch (error) {
      alert("로그아웃에 실패 했습니다.");
    }
  };
  return (
    <div id="LandingHeader">
      <div id="header">
        <div id="search-area">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="search-box">
            <input
              type="text"
              className="search"
              placeholder="검색어를 입력하세요"
            ></input>
            <div className="search-ico">
              <span>
                <BsSearch size="18" />
              </span>
            </div>
          </div>
        </div>
        <div className="user">
          <div className="user-border">
            <ul>
              {user.name ? (
                <div>
                  <li>hi, {user.name}!</li>
                  <li>
                    <button onClick={logout}>로그아웃</button>
                  </li>
                </div>
              ) : (
                <div>
                  <li>
                    <Link to="login">로그인</Link>
                  </li>
                  <li>
                    <Link to="signup">회원가입</Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
