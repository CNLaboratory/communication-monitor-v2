import React from 'react';
import '../App.css';
import axios from 'axios';

import DisplayTable from './ntua/displayTable';
import Button from 'react-bootstrap/Button'
import { IoRefreshOutline } from 'react-icons/io5';


class OrderTrack extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ url: "" }],
       productDataArray: [],
       itemData: [],
       isDataLoaded: false,
       isTransfering: true,
       emptyOrder: false,
       isTool1: false,
       columns: [],
       data: [],
       keys: [],
       labels: [],
       refreshInterval: props.refreshInterval,
       API_URL: '',
       counter: 0,
       displayTableComponent: [],
       settings: props.settings
     };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkIfDataIsLoaded = this.checkIfDataIsLoaded.bind(this);
    
    this.refreshData = this.refreshData.bind(this);
    //this.handleAddButton = this.handleAddButton.bind(this);
    //this.getProductData();
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
    const axiosInstance = axios.create();
    axiosInstance.defaults.timeout = this.state.settings.operationTimeOut;

    axiosInstance.get(this.state.API_URL,  {headers: {"Access-Control-Allow-Origin":"*"}})
    .then((response) => {
        let localKeys=[];
        let localColumns=[];
        let itemData=[];
        let localLabels=[];
        console.log('response.data:', response.data);
        if (response.data.length === 0) {
          console.log('empty order');
          this.setState({emptyOrder: true});

        } else {
          this.setState({data:response.data, emptyOrder: false}, () => {
          
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
        
        
          

        

        
    });

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
        var url;

        for (url in formValues) {
            let endpoint;
            console.log('formValues[url]["url"]');
            console.log(formValues[url]["url"]);
            if (formValues[url]["url"]) {
                
                
                endpoint = 'https://communicationmonitor.cn.ntua.gr:5000/evaluateorders?order=';
                this.setState({API_URL: endpoint + formValues[url]['url']}, () => {
                
                    this.getProductData();
                    //displayTableComponent.push(<DisplayTable columns={this.state.columns} data={this.state.data} />);
                    //this.setState( { displayTableComponent: displayTableComponent });
                })
                
            } else {
                this.setState({data: [], isDataLoaded: false});
            }
            
          
    
          
        }
        
        
      }
    

    refreshData() {
        console.log('refreshDAta');
        this.setState({isTool1: true, isTool2: false, isCustom: false, isDataLoaded: false, productDataArray: [], itemData:[]})
        this.getProductData();
    }

  render() {
    
    let toolComponent1;
    let buttonComponent;
    
    //let getDataComponent = <GetDataFromAPI API_URL={this.state.API_URL} checkInterval={this.state.refreshInterval} responseData = {this.getDataFromComponent} />;
    console.log(this.state.data);
    
    let customFormComponent = 
        <form  onSubmit={this.handleSubmit}>
            {this.state.formValues.map((element, index) => (
                <div className="form-inline" key={index}>
                    <label>Order ID</label>
                    <input type="number" name="url" value={element.url || ""} onChange={e => this.handleChange(index, e)} />
                    {
                        index ? 
                        <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                        : null
                    }
                    <button className="button submit" type="submit">Submit</button>
                </div>
            ))}
            <div className="button-section">
                {/*<button className="button add" type="button" onClick={() => this.addFormFields()}>Add</button>*/}
                
            </div>
        </form>;
    
    if (this.state.isDataLoaded) {
      
      toolComponent1 = <DisplayTable columns={this.state.columns} data={this.state.data} />;
      buttonComponent = <Button className="refresh-button" variant="primary"  onClick={this.refreshData} ><IoRefreshOutline /></Button>;
    }



    return (
      <div className='data-display'>
        <div className='header'>
          <h1>Dynamic API Input</h1>
          
          <div className='dynamic-api-form'>
            <h4>Please input your order ID below</h4> 
            {customFormComponent}            
            {/*<button className='refresh-button' type='button' onClick={this.refreshData}>Refresh Data</button>*/}
          </div>
          
        </div>
        {/*<div className="divider" style={{borderTop: '3px dotted #bbb'}}></div>*/}
        <div className="tool-card-wrapper">
        
          <div className="tool-card-wrapper-array">
            {buttonComponent}
            
            {toolComponent1}
            {this.state.emptyOrder && <h2>Invalid Order</h2>}
            
          </div>
          <div className="tool-card-wrapper-inner">
            {/*toolCardComponentsArray*/}
          </div>
        </div>
        <div className="section-charts">

        
        </div>
      </div>
    );
  }
}
export default OrderTrack;













