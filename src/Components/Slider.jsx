
import mask1 from "./images/mask1.png"
import mask2 from "./images/mask2.png"
import mask3 from "./images/mask3.png"
import mask4 from "./images/mask4.png"

import React, { Component } from "react";
import Slider from "react-slick";

export const Slides = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <img className="pic" src={mask1} alt="" />
          </div>
          <div>
          <img className="pic" src={mask2} alt="" />
          </div>
          <div>
          <img className="pic" src={mask3} alt="" />
          </div>
          <div>
          <img className="pic" src={mask4} alt="" />
          </div>
          {/* <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div> */}
        </Slider>
      </div>
    );
}