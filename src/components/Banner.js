import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assest/maldives-banner.png";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    return (
      <div className="mx-auto container">
        <Slider {...settings}>
          <div className="flex justify-center items-center">
            <img src={img} alt="#" />
          </div>
          <div className="flex justify-center items-center">
            <img src={img} alt="#" />
          </div>
          <div className="flex justify-center items-center">
            <img src={img} alt="#" />
          </div>
          <div className="flex justify-center items-center">
            <img src={img} alt="#" />
          </div>
        </Slider>
      </div>
    );
  }
}
