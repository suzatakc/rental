import { SmallHeader } from "../../Header/SmallHeader";
import { SecondBlock } from "../SecondBlock/SecondBlock";
import "../../Authenticate/Authenticate.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { ToasterContext } from "../../Context/ToasterContext";
import { CustomerData } from "../../Api/PostApi";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { successMessage, errorMessage } = useContext(ToasterContext);
  const [isCheck, setIsCheck] = useState(true);
  const history = useNavigate();
  return (
    <>
      <div className="authenticate sign-up-block">
        <SmallHeader type={"signUp"} />
        <div className="container">
          <div className="sign-block">
            <div className="container">
              <div className="first-block">
                <Formik
                  initialValues={{
                    name: "",
                    // password: "",
                    email: "",
                    balance: "",
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required("Required!!"),
                    // password: Yup.string().required("Required!!"),
                    balance: Yup.string().required("Required!!"),
                    email: Yup.string()
                      .email("Invalid email addresss")
                      .required("Required!!"),
                  })}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    CustomerData({
                      addAccount: {
                        name: values.name,
                        email: values.email,
                        balance: values.balance,
                      },
                    }).then((res) => {
                      if (res.email === values.email) {
                        alert("Email already exist");
                      } else {
                        alert("Form submitted successfully !");
                        resetForm({
                          values: {
                            name: "",
                            // password: "",
                            email: "",
                            balance: "",
                          },
                        });
                        history("/");
                      }
                      if (res.data.status === 200) {
                        successMessage("Form submitted successfully !");

                        setIsCheck(true);
                        setTimeout(() => {
                          setIsCheck(false);
                        }, 5000);
                        resetForm({
                          values: {
                            name: "",
                            // password: "",
                            email: "",
                            balance: "",
                          },
                        });
                      } else {
                        errorMessage(res.data.message);
                      }
                      errorMessage("request failed");
                    });
                    setSubmitting(false);
                  }}
                >
                  <Form>
                    <h3 className="title">Sign Up</h3>
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">User name:</span>
                        <Field
                          className="input-field"
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                        />
                        <span className="error">
                          <ErrorMessage name="name" />
                        </span>
                      </label>
                    </div>
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">Email address:</span>
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
                    {/* <div className="input-box">
                          <label className="d-column">
                            <span className="label-text">Password:</span>
                            <Field
                              className="input-field"
                              type="password"
                              name="empasswordail"
                              placeholder="Enter your password"
                            />
                            <span className="error">
                              <ErrorMessage name="password" />
                            </span>
                          </label>
                        </div> */}
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">Balance:</span>
                        <Field
                          className="input-field"
                          pattern="^[0-9]*$"
                          maxLength="10"
                          type="number"
                          name="balance"
                          placeholder="Enter your balance"
                        />
                        <span className="error">
                          <ErrorMessage name="balance" />
                        </span>
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
