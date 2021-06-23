import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CafeMain from "./pages/CafeMain/CafeMain";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/cafe" component={CafeMain} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
