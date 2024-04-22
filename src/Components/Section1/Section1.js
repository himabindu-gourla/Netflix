import React from "react";
import "./Section1.css";
import Navbar from "../../Components/Navbar/Navbar";
import arrow from '../../assets/section1/arrow.jpg';

const Section1 = () => {
  return (
    <div className="section1">
      <Navbar />
      <div className="hero">
        <h1>
          Unlimited movies, TV
          <span />
          shows and more.
        </h1>
        <p className="p1">Watch anywhere. Cancel anytime.</p>
        <p className="p2">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="email">
          <input type="email" placeholder="Email address" />
          <div className="button"><button>Get Started</button>
          <img src={arrow} alt=""/></div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
