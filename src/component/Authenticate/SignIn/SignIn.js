import { SmallHeader } from "../../Header/SmallHeader";
import { SecondBlock } from "../SecondBlock/SecondBlock";
import "../../Authenticate/Authenticate.scss";

export const SignIn = () => {
  return (
    <>
      <div className="authenticate">
        <SmallHeader type={"signIn"} />
        <div className="container">
          <div className="sign-block">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-lg-6 col-sm-12">
                  <div className="first-block gap">
                    <h3 className="title">Sign In</h3>
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">Email:</span>
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
                        <span className="label-text">Password:</span>
                        <input
                          className="input-field"
                          type="password"
                          name="email"
                          placeholder="Enter your password"
                        />
                      </label>
                    </div>
                    <div className="d-space-between">
                      <div className="check-box">
                        <label>
                          <input
                            type="checkbox"
                            name="radio"
                            value="Remember me"
                          />
                          <div className="custom-check"></div>
                          <span className="content"> Remember me</span>
                        </label>
                      </div>
                      <div className="content">Forgot Password?</div>
                    </div>
                    <div className="d-end button-gap">
                      <button
                        type="submit"
                        value="submit"
                        className="btn main-btn"
                      >
                        Sign In
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
