import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import { ChatProvider } from "./utils/contexts/chatContext";
import actions from "./utils/contexts/chatActions";
import "./App.css";

function App() {

  return (
    <ChatProvider startChat={true} userObj={[]}>
      <Router>
        <AuthRoute />
      </Router>
    </ChatProvider>
  );
}

export default App;
