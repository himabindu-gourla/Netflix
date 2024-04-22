import React, { useState } from "react";
import "../Section3/Section3.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// ----------------------------------------------------------

import img1 from "../../assets/section3/avengers.jpg";
import img2 from "../../assets/section3/baaghi3.jpg";
import img3 from "../../assets/section3/bahubali.jpg";
import img4 from "../../assets/section3/got.jpg";
import img5 from "../../assets/section3/kgf2.jpg";
import img6 from "../../assets/section3/liger.jpg";
import img7 from "../../assets/section3/lionking.jpg";
import img8 from "../../assets/section3/rrr.jpeg";
import img9 from "../../assets/section3/sacredgames.jpg";
import img10 from "../../assets/section3/shamshera.jpg";
import img11 from "../../assets/section3/super30.jpg";
import img12 from "../../assets/section3/vikram.jpg";

// ------------------------------------------------------------

import video1 from "../../assets/section3/avengers.mp4";
import video2 from "../../assets/section3/baaghi3.mp4";
import video3 from "../../assets/section3/Bahubali.mp4";
import video4 from "../../assets/section3/Got.mp4";
import video5 from "../../assets/section3/Kgf2.mp4";
import video6 from "../../assets/section3/Liger.mp4";
import video7 from "../../assets/section3/Lion_King.mp4";
import video8 from "../../assets/section3/RRR.mp4";
import video9 from "../../assets/section3/Sacred_games.mp4";
import video10 from "../../assets/section3/Shamshera.mp4";
import video11 from "../../assets/section3/Super30.mp4";
import video12 from "../../assets/section3/Vikram.mp4";

// -------------------------------------------------------------

const Section3 = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  const videos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
    video11,
    video12,
  ];

  const movies = [
    "Avengers",
    "Baaghi3",
    "Bahubali",
    "Games of Thrones",
    "Kgf2",
    "Liger",
    "Lion King",
    "RRR",
    "Sacred games",
    "Shamshera",
    "Super30",
    "Vikram",
  ];

  const directors = [
    "Whedon",
    "Ahmed",
    "Rajamouli",
    "",
    "Prasanth Neel",
    "Puri Jagan",
    "Favreau",
    "SS Rajamouli",
    "",
    "Karan",
    "Vikas Bahl",
    "Lokesh",
  ];

  const data = [
    {
      image: images[0],
      video: videos[0],
      movie: movies[0],
      director: directors[0],
    },
    {
      image: images[1],
      video: videos[1],
      movie: movies[1],
      director: directors[1],
    },
    {
      image: images[2],
      video: videos[2],
      movie: movies[2],
      director: directors[2],
    },
    {
      image: images[3],
      video: videos[3],
      movie: movies[3],
      director: directors[3],
    },
    {
      image: images[4],
      video: videos[4],
      movie: movies[4],
      director: directors[4],
    },
    {
      image: images[5],
      video: videos[5],
      movie: movies[5],
      director: directors[5],
    },
    {
      image: images[6],
      video: videos[6],
      movie: movies[6],
      director: directors[6],
    },
    {
      image: images[7],
      video: videos[7],
      movie: movies[7],
      director: directors[7],
    },
    {
      image: images[8],
      video: videos[8],
      movie: movies[8],
      director: directors[8],
    },
    {
      image: images[9],
      video: videos[9],
      movie: movies[9], 
      director: directors[9],
    },
    {
      image: images[10],
      video: videos[10],
      movie: movies[10],
      director: directors[10],
    },
    {
      image: images[11],
      video: videos[11],
      movie: movies[11],
      director: directors[11],
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [display, setDisplay] = useState("");

  let url;
  let film;
  const change = () => {
    return setDisplay(url,film);
  };

  
  return (
    <>
      <div className="section3">
        <div className="section3-images">                                                                                              
          <Slider {...settings}>
            {data.map((img, i) => {
              return (
                <div key={i}>
                  <img
                    src={img.image}
                    onClick={() => {
                      return (url = data[i].video, change());
                    }}
                  alt=""/>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="section3-videos">
          <div className="display-video">
            <video src={display} controls autoPlay id="display-video" />
            </div>
        </div>
      </div>

      <hr className="line" />
    </>
  );
};

export default Section3;
