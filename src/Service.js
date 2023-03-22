import axios from "axios";
import jwt_decode from "jwt-decode";

const secret = "gf2v3y657ybijqw423ambu9";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
console.log('process.env.API_URL', process.env.REACT_APP_API_URL)
setAuthorizationBearer();

function saveAccessToken(authResult) {
  console.log('authResult',authResult)
  localStorage.setItem("access_token", authResult.accessToken);
  console.log(localStorage)
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
      return (window.location.href = "/register");
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
    console.log("==========",name)
    // const res = await axios.post("https://tinyurl.com/m6352/login", {name, email, password });//addUser+register(create jwt)
    const res = await axios.post("http://localhost:6001/register", {name, email, password });//addUser+register(create jwt)
    
    saveAccessToken(res.data);
  },

  login: async (name, password) => {
    // const res = await axios.post("https://tinyurl.com/m6352", {name, password });//check jwt 
    console.log(name,password);
    const res = await axios.post("http://localhost:6001/login", {name, password });//check jwt 
    console.log(res.data)
    saveAccessToken(res.data);
  },

  postUrl: async (originalUrl, uniqueName) => {
    // const res = await axios.post("https://tinyurl.com/m6352",{ "originalUrl":originalUrl , "uniqueName":uniqueName });
    const res = await axios.post("http://localhost:6001/link",{ originalUrl , uniqueName });
    return res.data;
  },

  addTarget:async(uniqueName,name,targetValue)=>{
    const res=await axios.post("http://localhost:6001/link/"+uniqueName+"/target",{name,targetValue});
    return res.data;
  },
  addTrget:async()=>{
    const accessToken = localStorage.getItem("access_token")
    const decoded = jwt_decode(accessToken);
    let id = decoded.userId;
    const res=await axios.get("http://localhost:6001/link/"+id);
    return res.data;
  }
};
