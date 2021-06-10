import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div>NAVER</div>
        <div>카페</div>
        <div>
          <input type="text" />
        </div>
        <div>
          <span className="돋보기"></span>
        </div>
        <div>통합검색</div>
        <div>닉네임</div>
      </div>
      <div className="nav">
        <ul>
          <li>카페홈</li>
          <li>주제별</li>
          <li>지역별</li>
          <li>랭킹</li>
          <li>대표카페</li>
          <li>내소식</li>
          <li>채팅</li>
          <li>카페지원센터</li>
        </ul>
        <div className="main">
          <div className="main-first">
            <div>Editer's Pick</div>
            <div>모두보기</div>
            <div><span></span></div>
            <div><span></span></div>
          </div>
          <div className="main-Editers-pick">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="side-ad"><span></span></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
