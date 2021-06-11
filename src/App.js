import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div id="logo">
          <a href="https://www.naver.com">JIVER</a>
        </div>
        <div id="logo-right">
          <a href="https://section.cafe.naver.com/">카페</a>
        </div>
        <div>
          <input type="text" />
        </div>
        <div className="dot">
          <span></span>
        </div>
        <div>통합검색</div>
      </div>
      <div className="nav">
        <div className="main">
          <div className="main-first">
            <div>Editer's Pick</div>
          </div>
          <div className="main-Editers-pick">
            <span className="editer-one">d</span>
            <span className="editer-two">d</span>
            <span className="editer-three">d</span>
          </div>
          <div className="side-ad">
            <span></span>
          </div>
          <div className="main-second">
            <div className="main-second-top">
              <ul>
                <li>내 카페</li>
                <li>새글피드</li>
              </ul>
            </div>
            <div className="in-mycafe">
              <ul>
                <li>전체</li>
                <li>즐겨찾는카페</li>
                <li>운영카페</li>
              </ul>
            </div>
            <div className="main-second-cafelist">
              <ul>
                <li>jiho's cafe</li>
                <li>디젤매니아</li>
                <li>수만휘</li>
                <li>중고나라</li>
                <li>매드탱크 공식카페</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
