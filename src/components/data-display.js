import React from 'react';
import '../App.css';
import axios from 'axios';
import ToolCard from './ntua/toolCard';
import DisplayTable from './ntua/displayTable';
import Button from 'react-bootstrap/Button'
import { IoRefreshOutline } from 'react-icons/io5';

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


  getProductData = () => {
    const axiosInstance = axios.create();
    axiosInstance.defaults.timeout = this.state.settings.operationTimeOut;

    axiosInstance.get(this.state.API_URL,  {headers: {"Access-Control-Allow-Origin":"*"}})
    .then((response) => {
        let localKeys=[];
        let localColumns=[];
        let itemData=[];
        let localLabels=[];

        const firstItem = response.data[0];
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
        
        for (let item in response.data) {
            itemData.push(response.data[item]);
        }
        
        this.setState({ 
            data: response.data,
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
    let buttonComponent;
    let toolCardComponentsArray = [];
    //let getDataComponent = <GetDataFromAPI API_URL={this.state.API_URL} checkInterval={this.state.refreshInterval} responseData = {this.getDataFromComponent} />;
    console.log(this.state.data);
    
    
    if (this.state.isDataLoaded) {
      console.log('dataloaded');
      console.log(this.state.data);
      if (!Array.isArray(this.state.data) || this.state.data.length === 0) {
          toolComponent1 = <h2>No data to display or api error</h2>
      } else {
        toolCardComponentsArray = [
          <div className='tool-card'><ToolCard data={this.state.data} /></div>,
          <div className='tool-card'><ToolCard data={this.state.data} /></div>,
          <div className='tool-card'><ToolCard data={this.state.data} /></div>,
          <div className='tool-card'><ToolCard data={this.state.data} /></div>
        ]  
        toolComponent1 = <DisplayTable columns={this.state.columns} data={this.state.data} />;
        buttonComponent = <Button className="refresh-button" variant="primary"  onClick={this.refreshData} ><IoRefreshOutline /></Button>;
      }
    }

    return (
      <div className='data-display'>
        <div className='header'>
          <h1 style={{textAlign: 'center', marginTop: '80px'}}>{this.props.headerText}</h1>
          <div>
            
            {/*<button className='refresh-button' type='button' onClick={this.refreshData}>Refresh Data</button>*/}
          </div>
          
        </div>
        {/*<div className="divider" style={{borderTop: '3px dotted #bbb'}}></div>*/}
        <div className="tool-card-wrapper">
          <div className="tool-card-wrapper-array">
            {buttonComponent}
            
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


