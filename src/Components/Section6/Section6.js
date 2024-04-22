import React from "react";
import "./Section6.css";
import img from "../../assets/section6/children.png";

const Section6 = () => {
  return (
    <div>
      <div className="section6">
        <div className="section6-image">
          <img src={img} alt=""/>
        </div>
        <div className="section6-content">
          <h1>
            Create profiles for <span />
            children.
          </h1>
          <p>
            Send children on adventures with their
            <span />
            favourite characters in a space made just for
            <span />
            them—free with your membership.
          </p>
        </div>
      </div>
      <hr className="line"/>
    </div>
  );
};

export default Section6;
