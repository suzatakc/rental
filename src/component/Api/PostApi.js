import axios from "axios";

export const CustomerData = (data) => {
  debugger;
  return axios.post("/bikeBookingSystem/addCustomer/", data);
};
