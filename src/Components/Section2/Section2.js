import React from "react";
import "./Section2.css";
import video from "../../assets/section2/tv.mp4";
// import remote from "../../assets/section2/remote.jpg";
import tv from "../../assets/section2/tv.jpg";
const Section2 = () => {
  return (
    <div>
      <hr className="line" />
      <div className="section2">
        <div className="section2-content">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox,
            <span /> Chromecast, Apple TV, Blu-ray players and
            <span /> more.
          </p>
        </div>
        <div className="section2-video">
          <video src={video} autoPlay loop muted id="sec2-video"></video>
          <div className="dummy">
          
            <img src={tv} id="img" alt="" />

          </div>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default Section2;
//            <img src={remote} id="remote1" alt="" />

