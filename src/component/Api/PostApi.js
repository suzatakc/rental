import axios from "axios";
import { domain } from "./AxiosInstance";

export const CustomerData = (data) => {
  return axios.post(domain + "/bikeBookingSystem/addCustomer/", data);
};

export const BikeData = (data) => {
  return axios.post(domain + "/bikeBookingSystem/bikeDetail", data);
};
export const SignInData = (data) => {
  return axios.post(domain + "/bikeBookingSystem/signin/", data);
};

export const getBikeDetail = (data) => {
  return axios.post(domain + "/bikeBookingSystem", data);
};
