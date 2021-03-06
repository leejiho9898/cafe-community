import "./style.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import client from "./../../api/client";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "modules/user";

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const [form, setForm] = useState({
    id: "",
    password: "",
    passwordCheck: "",
    name: "",
  });

  const { id, password, passwordCheck, name } = form;

  const onChange = (e) => {
    const { name, value } = e.target;

    const nextForm = {
      ...form,
      [name]: value,
    };
    setForm(nextForm);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      id,
      password,
      name,
    };
    try {
      const response = await client.post("/user/register", body);
      dispatch(SetUser(response.data.user));
      history.push("/");
    } catch (e) {
      alert("회원가입에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (user._id) {
      history.push("/");
      try {
        sessionStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("세션 스토리지 저장에 실패했습니다");
      }
    }
  }, [history, user]);

  return (
    <>

      <div id="Signup-container">
        <div className="title">회원가입</div>
        <form action="" onSubmit={onSubmit}>
          <div className="ele-box">
            <input
              type="text"
              value={id}
              name="id"
              placeholder="id"
              onChange={onChange}
            />
          </div>
          <div className="ele-box">
            <input
              type="password"
              value={password}
              name="password"
              placeholder="pw"
              onChange={onChange}
            />
          </div>
          <div className="ele-box">
            <input
              type="password"
              value={passwordCheck}
              name="passwordCheck"
              placeholder="pwCheck"
              onChange={onChange}
            />
          </div>
          <div className="ele-box">
            <input
              type="text"
              value={name}
              name="name"
              placeholder="name"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="login-btn">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
