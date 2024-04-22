import { useState, useEffect } from "react";
import "./Section4.css";
import img1 from "../../assets/section4/image.jpg";
import img2 from "../../assets/section4/boxshot.png";
import img3 from "../../assets/section4/progress.gif";
import img4 from "../../assets/section4/progress.gif";

const Section4 = () => {
  return (
    <div>
      <div className="section4">
        <div className="combine">
          <img src={img1} id="img1" alt=""/>
          <div className="box">
            <img src={img2} id="img2" alt=""/>
            <div className="box-content">
              <h1>Stranger Things</h1>
              <p>Downloading...</p>
            </div>
            <img src={img3} id="img3" alt=""/>
            <img src={img4} id="img4" alt=""/>
          </div>
        </div>
        <div className="section4-content">
          <h1>
            Download your shows
            <span />
            to watch offline.
          </h1>
          <p>
            Save your favourites easily and always have
            <span />
            something to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
