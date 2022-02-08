import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

import NtuaCommunicationMonitor from "./ntua-com-monitor";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <NtuaCommunicationMonitor />
          
        </header>
      </div>
    );
  }
}
