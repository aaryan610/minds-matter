import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

//Pages
import Home from "./Home/Home";
import Login from "./Login";
import {firebase} from '../firebase'
import Profile from "./Profile";

const UserContext = createContext()
const Main = () => {
  const [user,setUser] = useState('')
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  })
  return (
    <React.Fragment>
      <UserContext.Provider value={{user,setUser}}>
      <Router>
        <Navbar />
        {/* Pages */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Footer />
      </Router>
      </UserContext.Provider>
    </React.Fragment>
  );
};

export {Main,UserContext};
