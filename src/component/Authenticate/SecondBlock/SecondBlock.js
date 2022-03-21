import "./SecondBlock.scss";

export const SecondBlock = () => {
  return (
    <div className="second-block">
      <div className="section-gap">
        <div className="title-section">
          <h4 className="regular-content block-text">Bike Rent</h4>
          <p className="medium-content">
            helping you reach your destination with your choices of bikes.
          </p>
          <p className="small-content">Grab the best opportunity now !!</p>
        </div>
        <div className="image-b">
          <img
            className="icons-box"
            src={require("../../../assets/image/money.png")}
            alt="price"
          />
          <span>Resonable price</span>
        </div>
        <div className="image-b">
          <img
            className="icons-box"
            src={require("../../../assets/image/bike.png")}
            alt="bike"
          />
          <span>Numbers of choices</span>
        </div>
        <div className="image-b">
          <img
            className="icons-box"
            src={require("../../../assets/image/time.png")}
            alt="time"
          />
          <span>Saves your precious time</span>
        </div>
        <div className="image-b mb-0">
          <img
            className="icons-box"
            src={require("../../../assets/image/hiking.png")}
            alt="visit"
          />
          <span>Safe Travels</span>
        </div>
      </div>
    </div>
  );
};
