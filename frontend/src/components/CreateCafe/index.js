import React, { useState } from "react";
import LandingHeader from "../../layout/LandingHeader/index";
import "./style.scss";
import { ImCheckboxChecked } from "react-icons/im";
import { useSelector } from "react-redux";
import client from "api/client";
import { useHistory } from "react-router-dom";

function CreatCafe() {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const [body, setBody] = useState({
    name: "",
    thumbnail: "",
    route: "",
    manager: user._id,
  });
  const { name, thumbnail, route, manager } = body;

  const onChange = (e) => {
    const { name, value } = e.target;

    const nextBody = {
      ...body,
      [name]: value,
    };
    setBody(nextBody);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await client.post("/cafe/create", body);
      console.log(response);
      history.push("/");
    } catch (e) {
      alert("카페생성에 실패했습니다.");
    }
  };
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
          <form onSubmit={onSubmit}>
            <div className="ele-list">
              <div className="ele">
                <ImCheckboxChecked /> 카페 이름
              </div>
              <div className="create-name">
                <input
                  type="text"
                  value={name}
                  name="name"
                  placeholder="카페 이름 입력"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="ele-list">
              <div className="ele">
                <ImCheckboxChecked /> 카페주소
              </div>
              <div className="create-route">
                localhost:3000/
                <input
                  type="text"
                  value={route}
                  name="route"
                  placeholder="카페 주소 입력"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="ele-list">
              <div className="ele">
                <ImCheckboxChecked /> 카페 썸네일
              </div>
              <div className="create-thumb">
                <input
                  type="text"
                  value={thumbnail}
                  name="thumbnail"
                  onChange={onChange}
                />
              </div>
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
