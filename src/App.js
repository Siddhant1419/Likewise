import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header";
import LikewiseCards from "./LikewiseCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats"
import ChatScreen from "./ChatScreen"
import FrontPage from "./FrontPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chat/:person">
            <Header backButton="/chat"/>
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/"/>
            <Chats />
          </Route>
          {/* Home/Default Route */}
          <Route path="/">
            {/* <FrontPage /> */}
            <Header />
            <LikewiseCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
