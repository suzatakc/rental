import React from "react";
import "./Banner.scss";

export const Banner = () => {
  return (
    <div className="banner-block">
      <div className="img-overlay"></div>
      <div className="breadcrumb-content">
        <div className="bg-img"></div>
        <div className="dental-text">
          <div className="text-content">
            <h3 className="mb-0 small-txt">Welcome to</h3>
            <h1 className="mb-0 large-txt">Self Ride Bike Rental</h1>
            <h3 className="small-txt">in Banepa</h3>
            <div className="title-line"></div>
          </div>
          <h3 className="txt">Rent Today , Own Tomorrow</h3>
          <div className="mtb-20">
            <a href="/" className="transparent-btn btn-radius" type="button">
              Call (011665492)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
