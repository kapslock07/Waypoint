import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";


import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
