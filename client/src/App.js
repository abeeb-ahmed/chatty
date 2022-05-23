import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {!user ? <Redirect to="/login" /> : <Home />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/profile/:username">
            {!user ? <Redirect to="/login" /> : <Profile />}
          </Route>
          <Route path="/messenger">
            {!user ? <Redirect to="/login" /> : <Messenger />}
          </Route>
          <Route path="*">{!user ? <Redirect to="/login" /> : <Home />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
