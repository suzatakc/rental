import { SmallHeader } from "../../Header/SmallHeader";
import { SecondBlock } from "../SecondBlock/SecondBlock";
import "../../Authenticate/Authenticate.scss";

export const SignUp = () => {
  return (
    <>
      <div className="authenticate sign-up-block">
        <SmallHeader type={"signUp"} />
        <div className="container">
          <div className="sign-block">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-lg-6 col-sm-12">
                  <div className="first-block">
                    <h3 className="title">Sign Up</h3>
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">User name:</span>
                        <input
                          className="input-field"
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                        />
                      </label>
                    </div>
                    {/* <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">Contact number:</span>
                        <input
                          className="input-field"
                          type="number"
                          name="contact"
                          placeholder="Econtainernter your contact number"
                        />
                      </label>
                    </div> */}
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">Email address:</span>
                        <input
                          className="input-field"
                          type="text"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </label>
                    </div>
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">Current password:</span>
                        <input
                          className="input-field"
                          type="password"
                          name="email"
                          placeholder="Enter your password"
                        />
                      </label>
                    </div>
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">Confirm password:</span>
                        <input
                          className="input-field"
                          type="password"
                          name="email"
                          placeholder="Enter password"
                        />
                      </label>
                    </div>
                    <div className="d-end button-gap">
                      <button
                        type="submit"
                        value="submit"
                        className="btn main-btn"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-6 col-sm-12">
                  <SecondBlock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
