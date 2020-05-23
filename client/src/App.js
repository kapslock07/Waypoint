import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./components/Login";

import Nav from "./components/Nav";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Login />
          <Route exact path={["/", "/home"]}>
            <Feed />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
