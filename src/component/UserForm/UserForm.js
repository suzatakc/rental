import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";
import "./UserForm.scss";
import * as Yup from "yup";

export const UserForm = () => {
  const [isCheck, setIsCheck] = useState(true);

  useEffect(() => {
    setIsCheck();
  }, []);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        contact: "",
        citizen: "",
        liscense: "",
        bike: "",
        rent: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Must be 2 characters or more")
          .required("Required!!"),

        contact: Yup.string()
          .min(10, "Must be 10 characters")
          .required("Required!!"),

        email: Yup.string()
          .email("Invalid email addresss")
          .required("Required!!"),

        citizen: Yup.number().required("Required!!"),
        liscense: Yup.number().required("Required!!"),
        bike: Yup.string().required("Required!!"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const postData = new FormData();
        postData.append("user_detail[name]", values.name);
        postData.append("user_detail[contact]", values.contact);
        postData.append("user_detail[email]", values.email);
        postData.append("user_detail[citizen]", values.citizen);
        postData.append("user_detail[liscense]", values.liscense);
        postData.append("user_detail[bike]", values.bike);

        // FormDetails(postData).then((res) => {
        //   if (res.data.status === 200) {
        //     success("Form submitted successfully !");
        //     setIsCheck(true);
        //     setTimeout(() => {
        //       setIsCheck(false);
        //     }, 5000);
        //     resetForm({
        //       values: {
        //         name: "",
        //         email: "",
        //         contact: "",
        //         citizen: "",
        //         liscense: "",
        //         bike: "",
        //         rent: "",
        //       },
        //     });
        //   } else {
        //     errorMessage(res.data.message);
        //   }
        // });
        setSubmitting(false);
      }}
    >
      <Form>
        <div className="field-content">
          <div className="custom-card">
            <div className="d-space-between">
              <h3 className="main-title">Rent Form</h3>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Name:</span>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Enter name"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="name" />
                    </span>
                  </label>
                </div>
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Contact:</span>
                    <Field
                      name="contact"
                      type="number"
                      pattern="^[0-9]*$"
                      maxLength="10"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="contact" />
                    </span>
                  </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Email:</span>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Enter your email"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="email" />
                    </span>
                  </label>
                </div>
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Citizenship No:</span>
                    <Field
                      name="citizen"
                      type="number"
                      pattern="^[0-9]*$"
                      maxLength="10"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="citizen" />
                    </span>
                  </label>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Liscense No:</span>
                    <Field
                      name="liscense"
                      type="number"
                      pattern="^[0-9]*$"
                      maxLength="10"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="liscense" />
                    </span>
                  </label>
                </div>
                <div className="form-group">
                  <div className="d-flex">
                    <div className="check-box">
                      <label>
                        <Field name="rent" type="checkbox" />
                        <div className="custom-check"></div>
                        <span className="content"> Rent Now</span>
                      </label>
                    </div>
                  </div>
                  <span className="error">
                    <ErrorMessage name="rent" />
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Bike No:</span>
                    <Field
                      name="bike"
                      type="text"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="bike" />
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="d-end">
              <button type="button" class="secondary-btn" data-dismiss="modal">
                Close
              </button>

              <button type="submit" className="main-btn" disabled={isCheck}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
