import { SecondBlock } from "../Authenticate/SecondBlock/SecondBlock";
import "./Features.scss";

export const Features = () => {
  return (
    <div className="feature-section section-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h1 className="main-title mt-20   ">
              Hello! We Are Bike
              <span className="card-block"> Rental Shop.</span>
            </h1>
            <div className="title-line"></div>
            <div className="pt-50">
              <p className="content">
                Bike Rent Shop, with the help of hardworking and a friendly
                team, founded on Jan 1 2022 at Banepa, Kavre. We provide
                affordable,reasonable, time saving and best services among our
                area with number of choices. With the Motto " To Help You For
                Your Journey " we have established this Service with our best
                facility to help you in your beautiful journey.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <SecondBlock />
          </div>
        </div>
      </div>
    </div>
  );
};
