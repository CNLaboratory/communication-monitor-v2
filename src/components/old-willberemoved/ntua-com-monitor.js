import React from 'react';
import '../App.css';

import GetDataFromAPI from '../ntua/getDataFromAPI';
import ToolCard from '../ntua/toolCard';


const API_URL = "https://communicationmonitor.cn.ntua.gr:5000/transactionsdepiction";
const API_URL2 = "https://communicationmonitor.cn.ntua.gr:5000/sensorsdepiction";
const API_URL3 = "http://147.102.40.53:5000/product";



class NtuaCommunicationMonitor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ url: "" }],
       productDataArray: [],
       itemData: [],
       isDataLoaded: false,
       isCustom: false,
       isTool1: false,
       isTool2: false,
       refreshInterval: 0,
       
       toolCardComponent: [
        <div className='tool-card'><button className="plusButton-1" onClick={this.handleAddButton} style={{height: '300px', width: '300px', border: 0 , background: 'url(images/icons8-plus-48.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></button></div>,
        <div className='tool-card'><button className="plusButton-2" onClick={this.handleAddButton} style={{height: '300px', width: '300px', border: 0, background: 'url(images/icons8-plus-48.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></button></div>,
        <div className='tool-card'><button className="plusButton-3" onClick={this.handleAddButton} style={{height: '300px', width: '300px', border: 0, background: 'url(images/icons8-plus-48.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></button></div>,
        <div className='tool-card'><button className="plusButton-4" onClick={this.handleAddButton} style={{height: '300px', width: '300px', border: 0, background: 'url(images/icons8-plus-48.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></button></div>
       ],
       counter: 0
     };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkIfDataIsLoaded = this.checkIfDataIsLoaded.bind(this);
    this.getDataFromComponent = this.getDataFromComponent.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
  }
  
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, { url: "" }]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let productDataArray;
    let toolComponent3;
    var url;
    productDataArray = [];
    
    for (url in formValues) {
      productDataArray.push(<GetDataFromAPI API_URL={formValues[url]['url']} checkInterval={this.state.refreshInterval} responseData = {this.getDataFromComponent} />);

      //productDataArray.push(<ProductData API_URL={formValues[url]['url']} checkInterval={0}/> );
    }
    this.setState( { productDataArray });
    //alert(JSON.stringify(this.state.formValues));
  }

  checkIfDataIsLoaded = (dataLoadedStatus) => {
    console.log(this.state.isDataLoaded);
    console.log('dataLoadedStatus');
    console.log(dataLoadedStatus);
    this.setState( { isDataLoaded: dataLoadedStatus });
    console.log(this.state.isDataLoaded);
  }

  getDataFromComponent = (responseData) => {
    console.log('responseData');
    console.log(responseData);
    this.setState( { itemData: responseData });
    this.setState( { isDataLoaded: true });
  }

  handleAddButton = () => {
    
    let toolCardComponentsArray = this.state.toolCardComponent;
    let newToolCardComponent = <div className='tool-card'><ToolCard key={'too-card-1'} data={this.state.itemData} /></div>;
    toolCardComponentsArray.push(newToolCardComponent);
    
    this.setState({toolCardComponent: toolCardComponentsArray});
    
  }

  render() {
    let isCustom = this.state.isCustom;
    let isTool1 = this.state.isTool1;
    let isTool2 = this.state.isTool2;
    let productDataArray = this.state.productDataArray;
    let componentsArray = [];
    let toolComponent1;
    let toolComponent2;
    
    let customFormComponent;
    let toolCardComponentsArray = [];
    let addComponent;
    let testComponent2;
    let newToolCardComponent;
    
    if (isCustom) {
      console.log('isCustom');
      customFormComponent = <form  onSubmit={this.handleSubmit}>
                        {this.state.formValues.map((element, index) => (
                      <div className="form-inline" key={index}>
                        <label>Address</label>
                      <input type="url" name="url" value={element.url || ""} onChange={e => this.handleChange(index, e)} />
                      {
                        index ? 
                          <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                        : null
                      }
                    </div>
                  ))}
                  <div className="button-section">
                      <button className="button add" type="button" onClick={() => this.addFormFields()}>Add</button>
                      <button className="button submit" type="submit">Submit</button>
                  </div>
                </form>;
    }
    if (isTool1) {
      console.log('isTool1');
      toolComponent1 = <GetDataFromAPI API_URL={'http://147.102.40.53:5000/product'} checkInterval={this.state.refreshInterval} responseData = {this.getDataFromComponent} />;
      
    }
    if (isTool2) {
      console.log('isTool2');
      toolComponent2 = <GetDataFromAPI API_URL={'http://147.102.40.53:5000/shifts'} checkInterval={this.state.refreshInterval} responseData = {this.getDataFromComponent} />;
    }
    if (this.state.isDataLoaded) {
      //componentsArray.push(<CreateCharts data={this.state.itemData} />);
      console.log('inside loop');
      toolCardComponentsArray = [
        <div className='tool-card'><ToolCard data={this.state.itemData} /></div>,
        <div className='tool-card'><ToolCard data={this.state.itemData} /></div>,
        <div className='tool-card'><ToolCard data={this.state.itemData} /></div>,
        <div className='tool-card'><ToolCard data={this.state.itemData} /></div>
      ]
      
      //this.state.toolCardComponent.push(<div className='tool-card'><ToolCard data={this.state.itemData} /></div>);
      //addComponent = <div className='tool-card'><button className="plusButton" onClick={this.handleAddButton} style={{height: '48px', width: '48px', background: 'url(images/icons8-plus-48.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></button></div>;
    }

    return (
      <div className='App'>
        <div className='header'>
          <h1>Please, select a tool to use</h1>
          <div>
            <button className='tools-button' type='button' onClick={() => this.setState({isTool1: true, isTool2: false, isCustom: false, isDataLoaded: false, productDataArray: [], itemData:[]})}>Product</button>
            <button className='tools-button' type='button' onClick={() => this.setState({isTool1: false, isTool2: true, isCustom: false, isDataLoaded: false, productDataArray: [], itemData:[]})}>Shifts</button>
            <button className='tools-button' type='button' onClick={() => this.setState({isTool1: false, isTool2: false, isCustom: true, isDataLoaded: false, productDataArray: [], itemData:[]})}>Custom</button>
          </div>
          
        </div>
        <div className="divider" style={{borderTop: '3px dotted #bbb'}}></div>
        <div className="tool-card-wrapper">
          <div className="tool-card-wrapper-array">
            {customFormComponent}
            {toolComponent1}
            {toolComponent2}
            {this.state.productDataArray}
          </div>
          <div className="tool-card-wrapper-inner">
            {toolCardComponentsArray}
            {addComponent}
          </div>
        </div>
        <div className="section-charts">

        
        </div>
        {/*
        <div className="productDataComponent">
            {this.state.productDataArray}

        </div>
        */}
      </div>
    );
  }
}
export default NtuaCommunicationMonitor;


