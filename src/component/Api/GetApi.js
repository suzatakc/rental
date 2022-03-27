import axios from "axios";
import { domain } from "./AxiosInstance";

export const getBikeDetail = (data) => {
  return axios.post(domain + "/bikeBookingSystem/bikeDetail", data);
};
