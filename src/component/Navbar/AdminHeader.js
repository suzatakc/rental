import { Link } from "react-router-dom";
import "./Navbar.scss";

export const AdminHeader = () => {
  return (
    <div>
      <div className="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="logo">
            <img src={require("../../assets/image/logo.png")} alt="logo" />
          </div>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
              <li className="nav-item active">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/bikes">
                  Sign Up Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/policy">
                  {" "}
                  Bike Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Customer Detail
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Booking Detail
                </Link>
              </li>
            </ul>
          </div>
          <div className="user-info">
            <img src={require("../../assets/image/hiking.png")} alt="user" />
          </div>
        </nav>
      </div>
    </div>
  );
};
