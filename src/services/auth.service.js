import axios from "axios";

class AuthService {
  
  constructor() {
    //console.log('window.location.hostname:', window.location.hostname);
    
    /*
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      //this.API_URL = 'http://localhost:8080/api/auth/';
      this.API_URL = 'http://' + process.env.REACT_APP_NODE_SERVER_DOMAIN + ':' + process.env.REACT_APP_NODE_SERVER_PORT + '/api/auth/';

    } else if (window.location.hostname === 'comm-monitor-v2.codeheaven.gr') {
      this.API_URL = 'https://ntua-node-auth-v2.codeheaven.gr:8445/api/auth/';
    } else {
      this.API_URL = 'https://cndevs.cn.ntua.gr:8443/api/auth/';
    }*/
    console.log('process.env.REACT_APP_USING_HTTPS:', process.env.REACT_APP_USING_HTTPS);
    this.API_URL = ((process.env.REACT_APP_USING_HTTPS === 'true') ? 'https://' : 'http://' ) + process.env.REACT_APP_NODE_SERVER_DOMAIN + ':' + process.env.REACT_APP_NODE_SERVER_PORT + '/api/auth/';
    console.log('API_URL:', this.API_URL);
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

  register(newUser) {
    const username = newUser.username;
    const email = newUser.email;
    const password = newUser.password;
    const firstName = newUser.firstName;
    const lastName = newUser.lastName;
    const roles = newUser.roles;
    const disabled = newUser.disabled;
    const phoneNumber = newUser.phoneNumber;

    return axios.post(this.API_URL + "signup", {
      username,
      email,
      password,
      firstName,
      lastName,
      roles,
      disabled,
      phoneNumber
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  getAllUsers() {
    //const axiosInstance = axios.create();
    //axiosInstance.defaults.timeout = this.state.settings.operationTimeOut;

    return axios.get(this.API_URL + "getallusers");
  }
  updateUser(updatedUser) {
    const username = updatedUser.username;
    const email = updatedUser.email;
    const password = updatedUser.password;
    const firstName = updatedUser.firstName;
    const lastName = updatedUser.lastName;
    const roles = updatedUser.roles;
    const disabled = updatedUser.disabled;
    const phoneNumber = updatedUser.phoneNumber;

    console.log('update user password: ', password);
    if (password) {
      return axios.post(this.API_URL + "updateuser", {
        username,
        email,
        password,
        firstName,
        lastName,
        roles,
        disabled,
        phoneNumber
      });
    } else {
      return axios.post(this.API_URL + "updateuser", {
        username,
        email,
        firstName,
        lastName,
        roles,
        disabled,
        phoneNumber
      });
    }
    
  }
  deleteUser(username) {
    console.log('deleteUser, username:', username);
    return axios.post(this.API_URL + "removeuser", {
      username
    });
  }
}

export default new AuthService();
