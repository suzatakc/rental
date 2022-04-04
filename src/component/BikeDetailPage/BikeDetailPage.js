import React, { useContext, useState } from "react";
import { PopupContext } from "../Context/PopupContext";
import { PopUp } from "../PopUp/PopUp";
import "./BikeDetailPage.scss";

export const BikesDetailsPage = () => {
  const [searchVal, setSearchVal] = useState("");

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      let temp = bikesDetails;
      if (temp) {
        temp = temp.filter((each) =>
          each.name.toLowerCase().includes(searchVal.toLowerCase())
        );
      }
      setBikesDetails(temp);
    }
  };

  const onChange = (event) => {
    setSearchVal(event.target.value);
  };

  // const [bikesDetails, setBikesDetails] = useState([]);

  // useEffect(() => {
  //   getBikeDetail().then((data) => {
  //     setBikesDetails(data);
  //   });
  // }, []);
  const [bikesDetails, setBikesDetails] = useState([
    {
      name: "Honda Hiness",
      no: "Ba Kha 1234",
      url: require("../../assets/image/honda.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "KTM 790 Duke",
      no: "Ba Kha 1234",
      url: require("../../assets/image/ktm.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Royal Enfield",
      no: "Ba Kha 1234",
      url: require("../../assets/image/royal.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Yamaha YFZ",
      no: "Ba Kha 1234",
      url: require("../../assets/image/yamaha.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "TVS Jupiter",
      no: "Ba Kha 1234",
      url: require("../../assets/image/tvs.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Hero Splendor",
      no: "Ba Kha 1234",
      url: require("../../assets/image/hero.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Bajaj Pulsar",
      no: "Ba Kha 1234",
      url: require("../../assets/image/bajaj.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Suzuki",
      no: "Ba Kha 1234",
      url: require("../../assets/image/suzuki.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Honda Activa",
      no: "Ba Kha 1234",
      url: require("../../assets/image/honda.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "KTM 790 Duke",
      no: "Ba Kha 1234",
      url: require("../../assets/image/ktm.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Royal Enfield",
      no: "Ba Kha 1234",
      url: require("../../assets/image/royal.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Yamaha YFZ",
      no: "Ba Kha 1234",
      url: require("../../assets/image/yamaha.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "TVS Jupiter",
      no: "Ba Kha 1234",
      url: require("../../assets/image/tvs.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Hero Splendor",
      no: "Ba Kha 1234",
      url: require("../../assets/image/hero.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Bajaj Pulsar",
      no: "Ba Kha 1234",
      url: require("../../assets/image/bajaj.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Suzuki",
      no: "Ba Kha 1234",
      url: require("../../assets/image/suzuki.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "TVS Jupiter",
      no: "Ba Kha 1234",
      url: require("../../assets/image/tvs.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
    {
      name: "Hero Splendor",
      no: "Ba Kha 1234",
      url: require("../../assets/image/hero.jpeg"),
      cc: "360",
      km: "45",
      kg: "180",
    },
  ]);

  const { openModal } = useContext(PopupContext);
  return (
    <div className="bike-details-section section-top">
      <div className="container">
        <div className="search-bar">
          <div className="input-box">
            <label className="d-column">
              <div className="search-icon">
                <i class="bi bi-search eye-glass"></i>
              </div>
              <input
                value={searchVal}
                onKeyPress={onKeyPress}
                onChange={onChange}
                name="name"
                type="search"
                placeholder="Search here"
                className="input-field"
              />
            </label>
          </div>
        </div>
        <div className="row">
          {bikesDetails?.map((item, index) => {
            return (
              <div className="col-md-4 col-sm-4 col-lg-4" key={index}>
                <div className="custom-card">
                  <div className="bike-img">
                    <img src={item.url} alt="bikes" />
                  </div>
                  <div className="bike-detail-block">
                    <div className="">{item.name}</div>
                    <div>{item.no}</div>
                    <p className="bike-property">
                      {item.cc} CC <span>|</span> {item.km} KM/I <span>|</span>{" "}
                      {item.kg} Kg
                    </p>
                  </div>
                  <div className="rent-btn d-end">
                    <button
                      type="button"
                      className="main-btn"
                      onClick={openModal}
                    >
                      Rent Now
                    </button>
                  </div>
                  <PopUp />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
