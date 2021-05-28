import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import Home from "./Home/Home";
import Login from "./Login";

const Main = () => {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Login />
      </Router>
    </React.Fragment>
  );
};

export default Main;
