import axios from "axios";
import config from "./config";

const register = (email, username, mobileNumber, password) => {
  return axios.post(config.baseurl + "/auth/signup", {
    email,
    username,
    mobileNumber,
    password,
  });
};

const login = async (email, password) => {
  const response = await axios
    .post(config.baseurl + "/auth/login", {
      email,
      password
    });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;