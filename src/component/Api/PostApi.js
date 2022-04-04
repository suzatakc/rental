import axios from "axios";
import { domain } from "./AxiosInstance";

export const CustomerData = (data) => {
  return axios.post(domain + "/bikeBookingSystem/addCustomer/", data);
};

export const UserData = (data) => {
  return axios.post(domain + "/bikeBookingSystem/", data);
};
export const SignInData = (data) => {
  return axios.post(domain + "/bikeBookingSystem/signin/", data);
};
