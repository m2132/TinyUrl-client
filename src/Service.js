import axios from "axios";
import jwt_decode from "jwt-decode";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
console.log('process.env.API_URL', process.env.REACT_APP_API_URL)
setAuthorizationBearer();

function saveAccessToken(authResult) {
  localStorage.setItem("access_token", authResult.token);
  setAuthorizationBearer();
}

function setAuthorizationBearer() {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
}

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      return (window.location.href = "/login");
    }
    return Promise.reject(error);
  }
);

export default {
  getLoginUser: () => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      return jwt_decode(accessToken);
    }
    return null;
  },

  logout: () => {
    localStorage.setItem("access_token", "");
  },

  register: async (name,email, password) => {
    const res = await axios.post("http://localhost:6001/login", { name, email, password });
    saveAccessToken(res.data);
  },

  login: async (name, password) => {
    const res = await axios.post("http://localhost:6001", {name, password });
    // const res = await axios.post("https://tinyurl-b8yl.onrender.com/login", {name, email, password });
    saveAccessToken(res.data);
  },

  // getPublic: async () => {
  //   const res = await axios.get("/public");
  //   return res.data;
  // },

  // getPrivate: async () => {
  //   const res = await axios.get("/private");
  //   return res.data;
  // },
  postUrl: async (originalUrl, uniqueName) => {
    console.log('1',originalUrl)
    console.log('2',uniqueName)
    const res = await axios.post("http://localhost:6001",{ "originalUrl":originalUrl , "uniqueName":uniqueName });
    return res.data;
  }
};
