import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

import ProductData from "../components/productData";

const API_URL = "http://147.102.40.53:5000/product";

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
          <h3>{this.state.content}</h3>
          {/*
          <a href="#" className="transfer-link" onClick={Product.getProductData}>
              Transfer Data
          </a> */}
          <div id='tableData'>
             {/*{<BasicTable columns={columns} data={carData}/>}*/}
          </div>
          <div>
            <button onClick={this._onButtonClick}>Transfer Button</button>
            {this.state.showComponent ?
              <ProductData API_URL={API_URL} checkInterval={0}/> :
                null
            }
          </div>
          <div className="App">
            <div className="container">
            
            
            </div>
          </div>
          
        </header>
      </div>
    );
  }
}
