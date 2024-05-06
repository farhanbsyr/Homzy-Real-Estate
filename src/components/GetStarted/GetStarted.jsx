import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <div className="g-wrapper">
      <div className="paddings innerWidth flexColCenter g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homzy</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon
          </span>
          <button className="button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
