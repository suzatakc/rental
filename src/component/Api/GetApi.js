import axios from "axios";

export const getAllCustomer = () => {
  return axios.get("/bikeBookingSystem/getAllCustomer/");
};
