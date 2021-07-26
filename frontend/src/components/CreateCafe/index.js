import React from "react";
import LandingHeader from "../../layout/LandingHeader/index";

function CreatCafe() {
  return (
    <>
      <LandingHeader />
      <div>
        <div>카페 만들기</div>
        <div>
          나와 같은 관심사를 가진 멤버를 모집하고 열심히 운영하여 카페를
          성장시켜보세요.
        </div>
      </div>
      <div>
        <form action="">
          <div className="ele-list">
            <div className="ele">카페이름</div>
            <div className="create-name">
              <input type="text" />
            </div>
          </div>
          <div className="ele-list">
            <div className="ele">카페주소</div>
            <div className="create-route">
              localhost:3000/
              <input type="text" />
            </div>
          </div>
          <div className="ele-list">
            <div>카페 썸네일</div>
            <div className="create-thumb"></div>
            <div className="btns">
              <button>등록</button>
              <button>삭제</button>
            </div>
          </div>
          <div>
            <input type="submit" />
            <button>취소</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreatCafe;
