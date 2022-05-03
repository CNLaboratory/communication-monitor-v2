import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./constants";
import 'react-notifications/lib/notifications.css';


import GlobalStyles from "./globalStyles";
import {Dashboard} from "./dashboard";
//import OldDashboard from "./old-dashboard";


class App extends Component {
  

  render() {
    

    return (
      <div>
        <GlobalStyles />
        {<Dashboard/>}
        {/*<OldDashboard/>*/}
      </div>
        
        
    );
  }
}

export default App;

