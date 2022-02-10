import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import LogoutComponent from "./components/logout-component";
import Sidebar from './components/sidebar/sidebar';
import DefaultSidebar from "./components/sidebar/default-sidebar";
import UserSidebar from "./components/sidebar/user-sidebar";
import ModSidebar from "./components/sidebar/mod-sidebar";
import AdminSidebar from "./components/sidebar/admin-sidebar";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import DataDisplay from "./components/data-display";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      
        <div className="App">
          <div className="sidebar">
            {!currentUser && (
              <DefaultSidebar/>
            )}
          
            {showAdminBoard && (
              <AdminSidebar logOut={this.logOut}/>
            )}
          
            {showModeratorBoard && (
              <ModSidebar logOut={this.logOut}/>
            )}
          
            {currentUser && (
              <UserSidebar logOut={this.logOut}/>
            )}
          </div>
          <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/transactionsdepiction" component={() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/transactionsdepiction'} />}/>
            <Route exact path='/sensorsdepiction' component = {() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/sensorsdepiction'} />} />
            <Route exact path='/abnormaldetection' component = {() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/abnormaldetection'} />} />
            <Route exact path='/drivertampering' component = {() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/drivertampering'} />} />
            <Route exact path='/drivertamperingdetails' component = {() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/drivertamperingdetails'} />} />
            <Route exact path='/reasoning1' component = {() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/reasoning1'} />} />
            <Route exact path='/reasoning2' component = {() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/reasoning2'} />} />
            <Route exact path='/reasoning3' component = {() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/reasoning3'} />} />
            <Route exact path='/reasoning4' component = {() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/reasoning4'} />} />
            <Route exact path='/reasoning5' component = {() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/reasoning5'} />} />
            <Route exact path='/reasoning6' component = {() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/reasoning6'} />} />
            <Route exact path='/alertlogger' component = {() => <DataDisplay API_URL={'https://communicationmonitor.cn.ntua.gr:5000/alertlogger'} />} />
            
            {/*<Route exact path="/register" component={Register} />*/}
            <Route exact path="/profile" component={Profile} />
            {/*<Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            */}
          </Switch>
        </div>
              
      {/*
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            NTUA
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User Tools
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
          
        </div>
        
        */}

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
