import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./constants";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import UserSidebar from "./components/sidebar/user-sidebar";
import ModSidebar from "./components/sidebar/mod-sidebar";
import AdminSidebar from "./components/sidebar/admin-sidebar";
import DynamicAPI from "./components/dynamic-api";
import OrderTrack from "./components/order-track";
import EventBus from "./common/EventBus";
import DataDisplay from "./components/data-display";
import { ENDPOINTS } from "./constants";
import UserManagement from "./components/user-management";
import UserEdit from "./components/user-edit";
import NewLogin from "./components/new-login";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

import background from "./img/background-main.jpg";
import UploadFile from './components/upload-file-test';
import DataVisualization from "./components/data-visualization";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);

    this.state = {
      backgroundColor: true,
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      loggedIn: false
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        backgroundColor: false,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        loggedIn: true
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }
  componentWillUnmount() {
    EventBus.remove("logout");
    
  }
  logIn() {
    console.log('logIn() called');
    const user = AuthService.getCurrentUser();

    if(user) {
      this.setState({
        currentUser: user,
        backgroundColor: false,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        loggedIn: true,
      })
    }
    
  }

  logOut() {
    AuthService.logout();
    this.setState({
      backgroundColor: true,
      showModeratorBoard: false,
      showAdminBoard: false,
      loggedIn: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard, loggedIn } = this.state;
    let mainWindowBackgroundColor;
    //let backgroundImage = `url(${background})`;
    let backgroundImage = ''
    if (this.state.backgroundColor) {
      mainWindowBackgroundColor = '#e5e5e5';
    } else {
      mainWindowBackgroundColor = 'white'
    }
    

    console.log('currentUser');
    console.log(currentUser);
    console.log('showAdminBoard');
    console.log(showAdminBoard);
    console.log('showModeratorBoard');
    console.log(showModeratorBoard);
    console.log('loggedIn');
    console.log(loggedIn);


    return (
      
        <div className="App" style={{backgroundColor: mainWindowBackgroundColor, backgroundImage: backgroundImage, backgroundSize: 'cover'}}>
          <div className="sidebar">
          
            {showAdminBoard && (
              <AdminSidebar logOut={this.logOut}/>
            )}
          
            {showModeratorBoard && (
              <ModSidebar logOut={this.logOut}/>
            )}
          
            {currentUser && !showModeratorBoard && !showAdminBoard &&(
              <UserSidebar logOut={this.logOut}/>
            )}
          </div>
          <div className="container mt-3">
          {!loggedIn && <NewLogin logIn={this.logIn}/>}
          {/*loggedIn && <Home />*/}
              
          {<NotificationContainer/>}


          <Routes>
            
            {/* <Route path="/" component={Login} /> */}
            {/*loggedIn && <Route path="/" component={Home}/>*/}
            {/*<Route path="/login" element={Login}></Route>*/}
            {/*<Route path="/" element={<Home/>}></Route>*/}
            
            <Route path="/transactionsdepiction" element={<DataDisplay API_URL={ENDPOINTS.transactionsdepiction.url} headerText={ENDPOINTS.transactionsdepiction.pageTitle}/>}></Route>
            <Route path='/sensorsdepiction' element = {<DataDisplay API_URL={ENDPOINTS.sensorsdepiction.url} headerText={ENDPOINTS.sensorsdepiction.pageTitle} />}></Route>
            <Route path='/abnormaldetection' element = {<DataDisplay API_URL={ENDPOINTS.abnormaldetection.url} headerText={ENDPOINTS.abnormaldetection.pageTitle} />}></Route>
            <Route path='/drivertampering' element = {<DataDisplay API_URL={ENDPOINTS.drivertampering.url} headerText={ENDPOINTS.drivertampering.pageTitle} />}></Route>
            <Route path='/drivertamperingdetails' element = {<DataDisplay API_URL={ENDPOINTS.drivertamperingdetails.url} headerText={ENDPOINTS.drivertamperingdetails.pageTitle} />}></Route>
            <Route path='/abnormalgraph' element = {<DataDisplay API_URL={ENDPOINTS.abnormalgraph.url} headerText={ENDPOINTS.abnormalgraph.pageTitle} />}></Route>
            <Route path='/transactionsgraph' element = {<DataDisplay API_URL={ENDPOINTS.transactionsgraph.url} headerText={ENDPOINTS.transactionsgraph.pageTitle} />}></Route>
            <Route path='/reasoning1' element = {<DataDisplay API_URL={ENDPOINTS.reasoning1.url} headerText={ENDPOINTS.reasoning1.pageTitle} />} ></Route>
            <Route path='/reasoning2' element = {<DataDisplay API_URL={ENDPOINTS.reasoning2.url} headerText={ENDPOINTS.reasoning2.pageTitle} />} ></Route>
            <Route path='/reasoning3' element = {<DataDisplay API_URL={ENDPOINTS.reasoning3.url} headerText={ENDPOINTS.reasoning3.pageTitle} />} ></Route>
            <Route path='/reasoning4' element = {<DataDisplay API_URL={ENDPOINTS.reasoning4.url} headerText={ENDPOINTS.reasoning4.pageTitle} />} ></Route>
            <Route path='/reasoning5' element = {<DataDisplay API_URL={ENDPOINTS.reasoning5.url} headerText={ENDPOINTS.reasoning5.pageTitle} />} ></Route>
            <Route path='/reasoning6' element = {<DataDisplay API_URL={ENDPOINTS.reasoning6.url} headerText={ENDPOINTS.reasoning6.pageTitle} />} ></Route>
            <Route path='/reasoning7' element = {<DataDisplay API_URL={ENDPOINTS.reasoning7.url} headerText={ENDPOINTS.reasoning7.pagetitle} />} ></Route>
            <Route path='/alertlogger' element = {<DataDisplay API_URL={ENDPOINTS.alertlogger.url} headerText={ENDPOINTS.alertlogger.pagetitle} />} ></Route>
            <Route path='/threatandincident' element = {<DataDisplay API_URL={ENDPOINTS.threatandincident.url} headerText={ENDPOINTS.threatandincident.pagetitle} /> } ></Route>
            <Route path='/dynamicapi' element = {<DynamicAPI />} ></Route>
            <Route path='/ordertrack' element = {<OrderTrack />} ></Route>
            
            

            <Route path='/usermanagement' element = {<UserManagement />} ></Route>
            <Route path='/useredit' element = {<UserEdit />} ></Route>
            <Route path="/profile" element={<Profile />} ></Route>
            
            {/*Experimental */}
            <Route path='/uploadfiletest' element={<UploadFile />} ></Route>
            <Route path='/datavisualization' element={<DataVisualization/>} ></Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

