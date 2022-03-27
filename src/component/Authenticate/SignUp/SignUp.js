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
                    password: "",
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
                        password: values.password,
                      },
                    }).then((res) => {
                      if (res.email === values.email) {
                        alert("Email already exist");
                      } else {
                        alert("Form submitted successfully !");
                        resetForm({
                          values: {
                            name: "",
                            password: "",
                            email: "",
                            balance: "",
                          },
                        });
                        history("/");
                      }
                    });
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
                    <div className="input-box">
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
                    </div>
                    <div className="input-box">
                      {/* <label className="d-column">
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
                      </label> */}
                      <span className="label-text">Balance:</span>
                      <select className="input-field">
                        <option selected disabled>
                          Select
                        </option>
                        <option>500</option>
                        <option>1000</option>
                        <option>1500</option>
                        <option>2000</option>
                        <option>2500</option>
                        <option>3000</option>
                        <option>3500</option>
                        <option>4000</option>
                        <option>4500</option>
                        <option>5000</option>
                      </select>
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
