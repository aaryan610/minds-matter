import React, { useContext } from "react";
import { UserContext } from "../Main";
import "./Navbar.css";

const Navbar = () => {
  let { user } = useContext(UserContext);
  return (
    <React.Fragment>
      <div className="navbar">
        <h3 className="left">Mind Matters</h3>
        <div className="right">
          <div className="navList">
            <a href="/" className="link">
              Home
            </a>
            <a href="/test" className="link">
              Take a Test
            </a>
            <a href="/articles" className="link">
              Articles
            </a>
            <a href="/relax" className="link">
              Relax!
            </a>
            {user ? (
              <a href="/profile" className="link">
               {user.displayName}
              </a>
            ) : (
              <a href="/login" className="link">
                Log In
              </a>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;