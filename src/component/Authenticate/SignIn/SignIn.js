import { SmallHeader } from "../../Header/SmallHeader";
import "../../Authenticate/Authenticate.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { ToasterContext } from "../../Context/ToasterContext";
import { SignInData } from "../../Api/PostApi";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const { errorMessage } = useContext(ToasterContext);
  let history = useNavigate();

  const checkIsAdmin = (data) => {
    const splitedData = data.split(",");
    if (splitedData[1] === "true") {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="authenticate">
        <SmallHeader type={"signIn"} />
        <div className="container">
          <div className="sign-block">
            <div className="container">
              <div className="first-block gap">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object({
                    password: Yup.string().required("Required!!"),

                    email: Yup.string()
                      .email("Invalid email addresss")
                      .required("Required!!"),
                  })}
                  onSubmit={(values) => {
                    console.log("onsubmit");
                    SignInData({
                      signIn: {
                        email: values.email,
                        password: values.password,
                        isAdmin: values.isAdmin,
                      },
                    }).then((res) => {
                      alert(res.data);
                      if (res.data === "Invalid Username and password!!!") {
                        history("/");
                      } else if (res.data === "Sign in successful!!!") {
                        history("/home");
                      } else if (res.data === "admin,true") {
                        history("/admin");
                      } else {
                        history("/");
                      }
                    });
                  }}
                >
                  <Form>
                    <h3 className="title">Sign In</h3>
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">Email:</span>
                        <Field
                          className="input-field"
                          type="text"
                          name="email"
                          placeholder="Enter your email"
                        />
                        <span className="error">
                          <ErrorMessage name="email" />
                        </span>
                      </label>
                    </div>
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">Password:</span>
                        <Field
                          className="input-field"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                        />
                        <span className="error">
                          <ErrorMessage name="password" />
                        </span>
                      </label>
                    </div>
                    <div className="d-space-between">
                      <div className="check-box">
                        <label>
                          <Field type="checkbox" name="isAdmin" />
                          <div className="custom-check"></div>
                          <span className="content"> Is Admin</span>
                          <span className="error">
                            <ErrorMessage name="isAdmin" />
                          </span>
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
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
