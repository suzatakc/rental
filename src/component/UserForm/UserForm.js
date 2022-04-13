import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState, useEffect, useContext } from "react";
import "./UserForm.scss";
import * as Yup from "yup";
import { PopupContext } from "../Context/PopupContext";
import { ToasterContext } from "../Context/ToasterContext";
import { getBikeDetail } from "../Api/PostApi";

export const UserForm = () => {
  const { successMessage } = useContext(ToasterContext);
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
        bikeNumber: "",
        fare: "",
        citizenNumber: "",
        liscenseNumber: "",
        pickupTime: "",
        pickupDate: "",
        arrivalTime: "",
        arrivalDate: "",
        contact: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Must be 2 characters or more")
          .required("Required!!"),

        email: Yup.string()
          .email("Invalid email addresss")
          .required("Required!!"),

        fare: Yup.number().required("Required!!"),

        bikeNumber: Yup.string().required("Required!!"),
        pickupTime: Yup.mixed().required("Required!!"),
        pickupDate: Yup.string().required("Required!!"),
        arrivalTime: Yup.mixed().required("Required!!"),
        arrivalDate: Yup.string().required("Required!!"),
        contact: Yup.string().required("Required!!"),
        citizenNumber: Yup.number().required("Required!!"),
        liscenseNumber: Yup.number().required("Required!!"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("asdfg");
        getBikeDetail({
          customerInfo: {
            email: values.email,
            pickupTime: values.pickupDate + " " + values.pickupTime,
            arrivalTime: values.arrivalDate + " " + values.arrivalTime,
            pickupDate: values.pickupDate,
            bikeNumber: values.bikeNumber,
            name: values.name,
            fare: values.fare,
            arrivalDate: values.arrivalDate,
            citizenNumber: values.citizenNumber,
            liscenseNumber: values.liscenseNumber,
            contact: values.contact,
          },
          paymentInfo: {
            accountNo: "df",
            cardType: "dfg",
          },
        }).then((res) => {
          alert(res.data.success);
          successMessage("Form submitted successfully !");

          setIsCheck(true);
          setTimeout(() => {
            setIsCheck(false);
          }, 5000);
          resetForm({
            values: {
              name: "",
              email: "",
              bikeNumber: "",
              pick: "",
              drop: "",
              days: "",
              pickupDate: "",
            },
          });
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
                      name="bikeNumber"
                      type="number"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="bikeNumber" />
                    </span>
                  </label>
                </div>
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Citizenship No:</span>
                    <Field
                      name="citizenNumber"
                      type="text"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="citizenNumber" />
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
                    <span className="label-text">Pick up date :</span>
                    <Field
                      name="pickupDate"
                      type="date"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="pickupDate" />
                    </span>
                  </label>
                </div>
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Drop off date :</span>
                    <Field
                      name="arrivalDate"
                      type="date"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="arrivalDate" />
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
                      name="liscenseNumber"
                      type="number"
                      pattern="^[0-9]*$"
                      maxLength="10"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="liscenseNumber" />
                    </span>
                  </label>
                </div>

                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Pick up time :</span>
                    <Field
                      name="pickupTime"
                      type="time"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="pickupTime" />
                    </span>
                  </label>
                </div>
                <div className="input-box">
                  <label className="d-column">
                    <span className="label-text">Drop-off-time :</span>
                    <Field
                      name="arrivalTime"
                      type="number"
                      placeholder="Enter contact"
                      className="input-field"
                    />
                    <span className="error">
                      <ErrorMessage name="arrivalTime" />
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
