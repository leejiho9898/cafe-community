import React, { useState } from "react";
import client from "./../../api/client";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
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

  const onSubmit = async(e) => {
    e.preventDefault();
    const body = {
      id,
      password,
    };
    try {
      const response = await client.post("/user/login", body)
      history.push("/");
    } catch (e) {
      alert("로그인에 실패했습니다.");
    }
  };

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
