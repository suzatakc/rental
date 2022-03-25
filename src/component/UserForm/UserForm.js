import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState, useEffect, useContext } from "react";
import "./UserForm.scss";
import * as Yup from "yup";
import { PopupContext } from "../Context/PopupContext";
import { ToasterContext } from "../Context/ToasterContext";
import { UserData } from "../Api/PostApi";

export const UserForm = () => {
  const { successMessage, errorMessage } = useContext(ToasterContext);
  const [isCheck, setIsCheck] = useState(true);

  useEffect(() => {
    setIsCheck();
  }, []);

  const { closeModal } = useContext(PopupContext);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        bike: "",
        fare: "",
        pickup: "",
        dropof: "",
        travel: "",
        citizen: "",
        liscense: "",
        contact: "",
        dropdate: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Must be 2 characters or more")
          .required("Required!!"),

        email: Yup.string()
          .email("Invalid email addresss")
          .required("Required!!"),

        fare: Yup.number().required("Required!!"),

        bike: Yup.string().required("Required!!"),
        pickup: Yup.mixed().required("Required!!"),
        dropof: Yup.mixed().required("Required!!"),
        dropdate: Yup.string().required("Required!!"),
        travel: Yup.string().required("Required!!"),
        contact: Yup.number().required("Required!!"),
        citizen: Yup.number().required("Required!!"),
        liscense: Yup.number().required("Required!!"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        UserData({
          customerInfo: {
            email: values.email,
            pickupTime: values.travel + " " + values.pickup,
            arrivalTime: values.dropdate + " " + values.dropof,
            travelDate: values.travel,
            bikeNumber: values.bike,
            name: values.name,
            fare: values.fare,
            dropDate: values.dropdate,
            citizen: values.citizen,
            liscense: values.liscense,
            contact: values.contact,
          },
        }).then((res) => {
          if (
            values.successMessage ===
            "Sorry!! Pick Up time cannot be after drop off"
          ) {
            alert("request failed");
            successMessage("Form submitted successfully !");

            setIsCheck(true);
            setTimeout(() => {
              setIsCheck(false);
            }, 5000);
            resetForm({
              values: {
                name: "",
                email: "",
                bike: "",
                pick: "",
                drop: "",
                days: "",
                travel: "",
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
        <div className="field-content">
          <div className="custom-card">
            <div className="d-space-between">
              <h3 className="main-title">Rent Form</h3>
              <button
                onClick={closeModal}
                type="button"
                className="close"
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
                    <span className="label-text">Bike No:</span>
                    <Field
                      name="bike"
                      type="number"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="bike" />
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
                {/* <div className="form-group">
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
                </div> */}
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Travel date :</span>
                    <Field
                      name="travel"
                      type="date"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="travel" />
                    </span>
                  </label>
                </div>
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Drop off date :</span>
                    <Field
                      name="dropdate"
                      type="date"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="dropdate" />
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
                      name="email"
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
                    <span className="label-text">Fare:</span>
                    <Field
                      name="fare"
                      type="number"
                      placeholder="Enter fare"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="fare" />
                    </span>
                  </label>
                </div>
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

                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Pick up time :</span>
                    <Field
                      name="pickup"
                      type="time"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="pickup" />
                    </span>
                  </label>
                </div>
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Drop-off-time :</span>
                    <Field
                      name="dropof"
                      type="time"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="dropof" />
                    </span>
                  </label>
                </div>
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">No of days :</span>
                    <Field
                      pattern="^[0-9]*$"
                      maxLength="2"
                      name="days"
                      type="number"
                      placeholder="Enter number of days for rent"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="days" />
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="d-end">
              <button
                type="button"
                class="secondary-btn"
                data-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>

              <button
                type="submit"
                value="submit"
                className="main-btn"
                disabled={isCheck}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
