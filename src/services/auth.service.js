import axios from "axios";

//const API_URL = "http://cndevs.cn.ntua.gr:8080/api/auth/";

class AuthService {
  
  constructor() {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      this.API_URL = 'http://localhost:8080/api/auth/';
    } else if (window.location.hostname === 'https://comm-monitor-v2.codeheaven.gr') {
      this.API_URL = 'https://ntua-node-auth-v2.codeheaven.gr:8443/api/auth/';
    } else {
      this.API_URL = 'https://cndevs.cn.ntua.gr:8443/api/auth/';
    }
  }

  login(username, password) {
    return axios
      .post(this.API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(this.API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  getAllUsers() {
    return axios.get(this.API_URL + "getallusers");
  }
  updateUser() {
    
  }
}

export default new AuthService();
