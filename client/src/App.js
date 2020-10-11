import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateProvider } from "./context/context";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Loved from "./pages/loved/Loved";
import "antd/dist/antd.css";
import "./App.scss";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/loved" component={Loved} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
