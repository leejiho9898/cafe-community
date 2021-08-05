import React, { useState } from "react";
import LandingHeader from "../../layout/LandingHeader/index";
import "./style.scss";
import { ImCheckboxChecked } from "react-icons/im";
import { useSelector } from "react-redux";
import client from "api/client";
import { useHistory } from "react-router-dom";

function CreatCafe() {
  const user = useSelector((state) => state.user);
  const [imgURL, setImgURL] = useState('');
  const history = useHistory();
  const [body, setBody] = useState({
    name: "",
    thumbnail: "",
    route: "",
    manager: user._id,
  });

  const imgUpload = async (e) => {
    setImgURL(e.target.value);
    //빈파일이 아닌 경우 함수 진행
    if (e.target.files !== null) {
      //FormData 생성
      const fd = new FormData();
      //FormData에 key, value 추가하기
      fd.append('cafe_img', e.target.files[0]);
      // axios 사용해서 백엔드에게 파일 보내기
      try {
        const image = await cafeThumbnailAPI(fd);
        console.log(image);
        setImgURL(image);
        // setMenuImg(image);
        // dispatch(SetImage({ image }));
      } catch (e) {
        alert('이미지 업로드에 실패했습니다.');
      }
    }
  };


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
                  type="file"
                  value={thumbnail}
                  name="thumbnail"
                  onChange={imgUpload}
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
