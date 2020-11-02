import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import { Home, Post, Search } from "./pages";
import "antd/dist/antd.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/search/:query?" component={Search} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
