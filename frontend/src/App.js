import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CafeMain from "./pages/CafeMain";
import JoinForm from "components/JoinForm/JoinForm";
import Signup from "pages/Signup";
import Login from "pages/Login";
import CreateCafe from "components/CreateCafe";
import CafeManagement from "pages/CafeManagement";
import LandingHeader from "layout/LandingHeader";

function App() {
  return (
    <>
      <LandingHeader />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/createcafe" component={CreateCafe} />
        <Route path="/cafeMain/:cafe" component={CafeMain} />
        <Route path="/management/:cafe?" component={CafeManagement} />
        <Route path="/join" component={JoinForm} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  );
}

export default App;
