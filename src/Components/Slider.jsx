
import mask1 from "./images/mask1.png"
import mask2 from "./images/mask2.png"
import mask3 from "./images/mask3.png"
import mask4 from "./images/mask4.png"

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


export const Slides =() => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };
    return (
      <div className="slides">
        <Slider {...settings}>
        <div className="card">
              <img src={mask1} alt="" />
          </div>
          <div className="card">
              <img src={mask2} alt="" />
          </div>
          <div className="card">
              <img src={mask3} alt="" />
          </div>
          <div className="card">
              <img src={mask4} alt="" />
          </div>
          <div className="card">
              <img src={mask1} alt="" />
          </div>
          <div className="card">
              <img src={mask2} alt="" />
          </div>

        </Slider>
      </div>
    );
}