import { SmallHeader } from "../../Header/SmallHeader";
import "../../Authenticate/Authenticate.scss";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { CustomerData } from "../../Api/PostApi";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
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
                    phoneNumber: "",
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required("Required!!"),
                    password: Yup.string().required("Required!!"),
                    balance: Yup.number().required("Required!!"),
                    email: Yup.string()
                      .email("Invalid email addresss")
                      .required("Required!!"),
                    phoneNumber: Yup.string().required("Required!!"),
                  })}
                  onSubmit={(values, resetForm) => {
                    CustomerData({
                      addAccount: {
                        name: values.name,
                        email: values.email,
                        balance: values.balance,
                        password: values.password,
                        phoneNumber: values.phoneNumber,
                      },
                    }).then((res) => {
                      if (res.data === "Number must be of 10 digits") {
                        alert(res.data);
                      } else if (
                        res.data === "admin,true" ||
                        res.data === "admin,false"
                      ) {
                        alert("signup sucessful");
                        history("/");
                      } else {
                        alert(res.data);
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
                          name="password"
                          placeholder="Enter your password"
                        />
                        <span className="error">
                          <ErrorMessage name="password" />
                        </span>
                      </label>
                    </div>
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">Balance:</span>
                        <Field
                          as="select"
                          className="input-field"
                          pattern="^[0-9]*$"
                          maxLength="10"
                          type="number"
                          name="balance"
                        >
                          <option disabled>Select</option>
                          <option value={500}>500</option>
                          <option value={1000}>1000</option>
                          <option value={1500}>1500</option>
                          <option value={2000}>2000</option>
                          <option value={2500}>2500</option>
                          <option value={3000}>3000</option>
                          <option value={3500}>3500</option>
                          <option value={4000}>4000</option>
                          <option value={4500}>4500</option>
                          <option value={5000}>5000</option>
                        </Field>
                        <span className="error">
                          <ErrorMessage name="balance" />
                        </span>
                      </label>
                    </div>
                    <div className="input-box">
                      <label className="d-column">
                        <span className="label-text">Phone number:</span>
                        <Field
                          className="input-field"
                          type="number"
                          name="phoneNumber"
                          placeholder="Enter your password"
                        />
                        <span className="error">
                          <ErrorMessage name="phoneNumber" />
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
