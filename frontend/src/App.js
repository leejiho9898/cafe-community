import "./App.css";
import {Route, Link, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CafeMain from "./pages/CafeMain";
import JoinForm from "components/JoinForm/JoinForm";
import PostForm from "components/PostForm";
import Signup from "pages/Signup";
import Login from "pages/Login";
import CreateCafe from "components/CreateCafe";

function App() {
  return (

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/createcafe" component={CreateCafe} />
        <Route path="/cafeMain/:post?" component={CafeMain} />
        <Route path="/join" component={JoinForm} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
      </Switch>

  );
}

export default App;
