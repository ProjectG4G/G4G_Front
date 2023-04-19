import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://34.159.231.164/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "auth/users");
};

const getUserBoard = () => {
  return axios.get(API_URL + "auth/users/", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "auth/moderators/", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const userService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default userService