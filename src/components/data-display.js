import React from 'react';
import '../App.css';
import axios from 'axios';

import GetDataFromAPI from './ntua/getDataFromAPI';
import ToolCard from './ntua/toolCard';
import DisplayTable from './ntua/displayTable';
import Button from 'react-bootstrap/Button'
import { FaList, FaRegHeart, FaBezierCurve, FaCog, FaQuestion, FaBug, FaExclamationTriangle} from "react-icons/fa";
import { IoRefreshOutline } from 'react-icons/io5';

//const API_URL = "https://communicationmonitor.cn.ntua.gr:5000/transactionsdepiction";
const API_URL2 = "https://communicationmonitor.cn.ntua.gr:5000/sensorsdepiction";
const API_URL3 = "http://147.102.40.53:5000/product";


class DataDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ url: "" }],
       productDataArray: [],
       itemData: [],
       isDataLoaded: false,
       isTransfering: true,
       isTool1: false,
       columns: [],
       data: [],
       keys: [],
       labels: [],
       refreshInterval: props.refreshInterval,
       API_URL: props.API_URL,
       counter: 0
     };
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.checkIfDataIsLoaded = this.checkIfDataIsLoaded.bind(this);
    
    this.refreshData = this.refreshData.bind(this);
    //this.handleAddButton = this.handleAddButton.bind(this);
    this.getProductData();
  }

  checkIfDataIsLoaded = (dataLoadedStatus) => {
    
    this.setState( { isDataLoaded: dataLoadedStatus });
    console.log(this.state.isDataLoaded);
  }

  /*getDataFromComponent = (responseData) => {
    this.setState( { itemData: responseData });
    this.setState( { isDataLoaded: true });
  }*/
  getProductData = () => {
    axios.get(this.state.API_URL,  {headers: {"Access-Control-Allow-Origin":"*"}})
    .then((response) => {
        let localKeys=[];
        let localColumns=[];
        let itemData=[];
        let localLabels=[];

        this.setState({data:response.data});
        //this.state.data = response.data;

        const firstItem = this.state.data[0];
        for (let key in firstItem) {
            if (firstItem.hasOwnProperty(key)) {
                localKeys.push(key);
            }
        }
        for (let key in localKeys) {
            localColumns.push(
                {
                    Header: localKeys[key],
                    accessor: localKeys[key]
                }
            )
        }
        let i = 0;
        for (let item in this.state.data) {
            itemData.push(this.state.data[item]);
            
            // Get the label for each car like Car0, Car1 etc
            const label = this.state.labelPreFix ? this.state.labelPreFix : 'Item';            
            localLabels.push(label + i++);

        }
        
        
        this.setState({ 
            
            isTransfering: false,
            columns:localColumns,
            keys:localKeys,
            labels:localLabels,
            isDataLoaded: true
        });
        
    });

}
    refreshData() {
        console.log('refreshDAta');
        this.setState({isTool1: true, isTool2: false, isCustom: false, isDataLoaded: false, productDataArray: [], itemData:[]})
        this.getProductData();
    }

  render() {
    
    let toolComponent1;
    let toolCardComponentsArray = [];
    //let getDataComponent = <GetDataFromAPI API_URL={this.state.API_URL} checkInterval={this.state.refreshInterval} responseData = {this.getDataFromComponent} />;
    console.log(this.state.data);
    
    
    if (this.state.isDataLoaded) {
      toolCardComponentsArray = [
        <div className='tool-card'><ToolCard data={this.state.itemData} /></div>,
        <div className='tool-card'><ToolCard data={this.state.itemData} /></div>,
        <div className='tool-card'><ToolCard data={this.state.itemData} /></div>,
        <div className='tool-card'><ToolCard data={this.state.itemData} /></div>
      ]  
      toolComponent1 = <DisplayTable columns={this.state.columns} data={this.state.data} />;
    }

    return (
      <div className='data-display'>
        <div className='header'>
          <h1>{this.props.headerText}</h1>
          <div>
            <Button variant="primary"  onClick={this.refreshData} ><IoRefreshOutline /></Button>
            {/*<button className='refresh-button' type='button' onClick={this.refreshData}>Refresh Data</button>*/}
          </div>
          
        </div>
        {/*<div className="divider" style={{borderTop: '3px dotted #bbb'}}></div>*/}
        <div className="tool-card-wrapper">
          <div className="tool-card-wrapper-array">
            
            {toolComponent1}
            
          </div>
          <div className="tool-card-wrapper-inner">
            {toolCardComponentsArray}
          </div>
        </div>
        <div className="section-charts">

        
        </div>
      </div>
    );
  }
}
export default DataDisplay;


