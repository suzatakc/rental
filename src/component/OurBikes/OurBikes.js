import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./OurBike.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export const OurBikes = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [bikes] = useState([
    {
      name: "Honda Hiness",
      no: "Ba Kha 1234",
      url: require("../../assets/image/honda.jpeg"),
    },
    {
      name: "KTM 790 Duke",
      no: "Ba Kha 5678",
      url: require("../../assets/image/ktm.jpeg"),
    },
    {
      name: "Royal Enfield",
      no: "Ba Kha 1374",
      url: require("../../assets/image/royal.jpeg"),
    },
    {
      name: "Yamaha YFZ",
      no: "Ba Kha 1524",
      url: require("../../assets/image/yamaha.jpeg"),
    },
    {
      name: "TVS Jupiter",
      no: "Ba Kha 1904",
      url: require("../../assets/image/tvs.jpeg"),
    },
    {
      name: "Hero Splendor",
      no: "Ba Kha 1884",
      url: require("../../assets/image/hero.jpeg"),
    },
    {
      name: "Bajaj Pulsar",
      no: "Ba Kha 1224",
      url: require("../../assets/image/bajaj.jpeg"),
    },
    {
      name: "Suzuki",
      no: "Ba Kha 1255",
      url: require("../../assets/image/suzuki.jpeg"),
    },
  ]);
  return (
    <div className="our-bikes-sections">
      <div className="container">
        <div className="title-block text-center">
          <h2 className="main-title">Our available bikes</h2>
          <div className="title-line"></div>
        </div>
        <Slider {...settings}>
          {bikes.map((item, index) => {
            return (
              <Link to="/bikes">
                <div className="custom-card" key={index}>
                  <div className="bike-image">
                    <img src={item.url} alt="bikes" />
                  </div>
                  <div className="bike-details">
                    <h6 className="main-title text-uppercase">
                      <span>Bike Name: </span>
                      {item.name}
                    </h6>
                    <p className="content text-uppercase">
                      <span>Bike Number:</span> {item.no}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
