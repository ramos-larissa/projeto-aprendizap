import axios from "axios";

export const getLessons = () => {
  return axios.get(process.env.REACT_APP_API_URL);
};
