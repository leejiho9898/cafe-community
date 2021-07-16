import React from "react";
import "./JoinFormStyle.css";
function JoinForm() {
  return (
    <div id="LoginForm">
      <form action="">
        <div id="Join-Tit">
          <h3>카페 가입하기</h3>

          </div>
          <div className="Join-SubTit">
            <p>카페 가입을 위한 정보를 입력해주세요.</p>
        </div>
        <div className="Join-SubTit">
          <h4>⊙카페설명</h4>
        </div>
        <div className="Join-Answer-border">
          <div className="Join-Q">
            <p>대한민국 일등 카페 ●지호카페● 입니다.</p>
          </div>
        </div>

        <div className="Join-SubTit">
          <h4>가입안내</h4>
        </div>
        <div className="Join-Answer-border">
          <div className="Join-Q">
            <p>JICAFE ●지호카페● 오신걸 환영합니다^^</p>
          </div>
        </div>

        <div className="Join-SubTit">
          <h4>⊙별명</h4>
        </div>
        <div className="Join-Answer-border">
          <div className="Join-Q">
            <p>⊙카페별 별명 설정</p>
          </div>
          <input type="text" />
          <button id="nickname-check">중복확인</button>
        </div>
        <button type="submit">동의후 가입하기</button>
      </form>
    </div>
  );
}
export default JoinForm;
