
import axios from "axios";
import { API } from "../../api/api";


const register = (form) => {
  return API.post("auth/register/", form);
};

const login = (email, password) => {
  return API
    .post("auth/login/", {
      email,
      password,
    })
    .then((response) => {
		console.log(response)
      if (response.data.access) {
        localStorage.setItem("token", JSON.stringify(response.data.access));
        
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;