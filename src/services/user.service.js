import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'http://cndevs.cn.ntua.gr:8080/api/test/';

class UserService {

  constructor() {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      this.API_URL = 'http://localhost:8080/api/test/';
    } else if (window.location.hostname === 'https://comm-monitor-v2.codeheaven.gr') {
      this.API_URL = 'https://ntua-node-auth-v2.codeheaven.gr:8443/api/auth/';
    } else {
      this.API_URL = 'https://cndevs.cn.ntua.gr:8443/api/auth/';
    }
  }

  getPublicContent() {
    return axios.get(this.API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(this.API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(this.API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(this.API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
