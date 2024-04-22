import React from 'react';
import './Section5.css';
import tv from '../../assets/section5/device.png';
import video from '../../assets/section5/devices.mp4';

const Section5 = () => {
  return (
    <>
    <hr className="line"/>
    <div className="section5">
      <div className="section5-content">
        <h1>Watch everywhere.</h1>
        <p>
        Stream unlimited movies and TV shows on<span/>your phone, tablet, laptop, and TV.
        </p>
      </div>
      <div className="section5-video">
        <img src={tv} id="tv3" alt=""/>
        <video src={video} autoPlay loop muted id="sec5-video"></video>
      </div>
    </div>
    <hr className="line"/>
    </>
  )
}

export default Section5