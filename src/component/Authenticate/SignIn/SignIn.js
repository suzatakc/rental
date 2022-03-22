import { SmallHeader } from "../../Header/SmallHeader";
import { SecondBlock } from "../SecondBlock/SecondBlock";
import "../../Authenticate/Authenticate.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { ToasterContext } from "../../Context/ToasterContext";

export const SignIn = () => {
  const { successMessage, errorMessage } = useContext(ToasterContext);
  const [isCheck, setIsCheck] = useState(true);
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
                      onSubmit={(values, { setSubmitting, resetForm }) => {
                        const postData = new FormData();
                        postData.append(
                          "user_detail[password]",
                          values.password
                        );
                        postData.append("user_detail[email]", values.email);

                        //   Contactus(postData).then((res) => {
                        //     if (res.data.status === 200) {
                        //       successMessage("Form submitted successfully !");

                        //       setIsCheck(true);
                        //       setTimeout(() => {
                        //         setIsCheck(false);
                        //       }, 5000);
                        //       resetForm({
                        //         values: {
                        //           name: "",
                        //           address: "",
                        //           contact: "",
                        //           email: "",
                        //           message: "",
                        //         },
                        //       });
                        //     } else {
                        //       errorMessage(res.data.message);
                        //     }
                        //   });
                        //   setSubmitting(false);
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
                              <Field
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
                            disabled={isCheck}
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
