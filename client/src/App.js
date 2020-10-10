import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "./context/context";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Loved from "./pages/loved/Loved";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/loved" component={Loved} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
