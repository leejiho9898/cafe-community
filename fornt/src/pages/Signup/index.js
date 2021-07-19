import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import client from "./../../api/client";

const Signup = () => {
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
      console.log(response);
      history.push("/")
    } catch (e) {
      alert("회원가입에 실패했습니다.");
    }
  };
  return (
    <>
      <div id="Signup">
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            value={id}
            name="id"
            placeholder="id"
            onChange={onChange}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="pw"
            onChange={onChange}
          />
          <input
            type="password"
            value={passwordCheck}
            name="passwordCheck"
            placeholder="pwCheck"
            onChange={onChange}
          />
          <input
            type="text"
            value={name}
            name="name"
            placeholder="name"
            onChange={onChange}
          />
          <button type="submit">REGISTER</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
