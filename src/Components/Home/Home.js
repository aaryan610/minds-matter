import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="homeCont">
        <section className="section1">
          <div className="left">
            <img src="./assets/images/home-section-1.png" alt="" />
          </div>
          <div className="right">
            <h1>
              Find Digital
              <br />
              <span>Mental Health</span> Resources
            </h1>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
