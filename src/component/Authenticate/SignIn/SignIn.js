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
  var myBoolean = true;

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
                    is_admin: "",
                  }}
                  validationSchema={Yup.object({
                    password: Yup.string().required("Required!!"),

                    email: Yup.string()
                      .email("Invalid email addresss")
                      .required("Required!!"),
                  })}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log("onsubmit");
                    SignInData({
                      email: values.email,
                      password: values.password,
                      is_admin: values.is_admin,
                    }).then((res) => {
                      debugger;
                      myBoolean = true;
                      alert(res.data);
                      const isAdmin = checkIsAdmin(res.data);
                      if (isAdmin) {
                        history("/user-table");
                      } else {
                        history("/home");
                      }

                      errorMessage("request failed");
                    });
                    debugger;
                    setSubmitting(false);
                    if (!myBoolean) {
                      alert("alert failed");
                    }
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
                    <div className="d-end">
                      {/* <div className="check-box">
                        <label>
                          <Field
                            type="checkbox"
                            name="is_admin"
                            // value="Remember me"
                          />
                          <div className="custom-check"></div>
                          <span className="content"> Is Admin</span>
                          <span className="error">
                            <ErrorMessage name="is_admin" />
                          </span>
                        </label>
                      </div> */}
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
