import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CafeMain from "./pages/CafeMain";
import JoinForm from "components/JoinForm/JoinForm";
import PostForm from "components/PostForm";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/cafeMain/:post?" component={CafeMain} />
        <Route path="/join" component={JoinForm} />

        {/* <Route path="/logout" component={Logout} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;