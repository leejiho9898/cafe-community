import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "modules";
import { SetUser } from "modules/user";


function loadUser() {
  try {
    let user = sessionStorage.getItem("user");
    if (!user) return;
    store.dispatch(SetUser(JSON.parse(user)));
  } catch (e) {
    console.log(`loadUser 오류`);
  }
}

loadUser();
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
