import React from "react";
import LandingHeader from "../../layout/LandingHeader/index";
import { useDispatch } from 'react-redux';
import "./style.scss"
import { ImCheckboxChecked } from 'react-icons/im';


function CreatCafe() {
  const dispatch = useDispatch();
  return (
    <>
      <LandingHeader />
      <div id="creat-cafe-container">
      <div>
        <div className="title">카페 만들기</div>
        <div className="title-explain">
          나와 같은 관심사를 가진 멤버를 모집하고 열심히 운영하여 카페를
          성장시켜보세요.
        </div>
      </div>
      <div>
        <form>
          <div className="ele-list">
            <div className="ele"><ImCheckboxChecked/> 카페 이름</div>
            <div className="create-name">
              <input type="text" />
            </div>
          </div>
          <div className="ele-list">
            <div className="ele"><ImCheckboxChecked/>  카페주소</div>
            <div className="create-route">
              localhost:3000/
              <input type="text" />
            </div>
          </div>
          <div className="ele-list">
            <div className="ele"><ImCheckboxChecked/>  카페 썸네일</div>
            <div className="create-thumb"><input type="ondrop" /></div>
            <div className="thumb-btns">
              <button className="thumb-btn">등록</button>
              <button className="thumb-btn">삭제</button>
            </div>
          </div>
          <div className="form-btns">
            <input type="submit" className="form-btn" />
            <button className="form-btn">취소</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default CreatCafe;
