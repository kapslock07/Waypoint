import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import "./App.css";

function App() {

  return (
    <Router>
      <AuthRoute />
    </Router>
  );
}

export default App;
