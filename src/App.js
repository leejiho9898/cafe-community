import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CafeMain from "./pages/CafeMain";
import JoinForm from "components/JoinForm/JoinForm";


function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/cafeMain" component={CafeMain} />
          <Route path="/join" component={JoinForm} />
          {/* <Route path="/logout" component={Logout} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
