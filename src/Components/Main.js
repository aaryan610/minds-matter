import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

//Pages
import Home from "./Home/Home";

const Main = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        {/* Pages */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />

        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default Main;
