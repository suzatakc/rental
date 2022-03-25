import "./Header.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export const SmallHeader = (props) => {
  const [type, setType] = useState("");
  useEffect(() => {
    setType(props.type);
  }, [props.type]);
  return (
    <div className="small-header">
      <div className="header-body d-space-between">
        <div className="logo">
          <img src={require("../../assets/image/logo.png")} alt="logo" />
        </div>
        <div className="header-text d-flex">
          {type === "signIn" ? (
            <>
              <p className="content text-acct">Don't have an accout?</p>
              <p className="content sign-up">
                <Link to="/sign-up">Sign Up!!</Link>
              </p>
            </>
          ) : type === "signUp" ? (
            <>
              <p className="content text-acct">Already have an accout?</p>
              <p className="content sign-up">
                <Link to="/">Sign In!!</Link>
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
