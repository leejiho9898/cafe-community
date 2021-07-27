import React, { useEffect, useState } from "react";
import client from "./../../api/client";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "modules/user";

const Login = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: "",
    password: "",
  });

  const { id, password } = form;

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
    };
    try {
      const response = await client.post("/user/login", body);
      console.log(response);
      dispatch(SetUser(response.data.user));
      history.push("/");
    } catch (e) {
      alert("로그인에 실패했습니다.");
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
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={id}
          name="id"
          onChange={onChange}
          placeholder="id"
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChange}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
