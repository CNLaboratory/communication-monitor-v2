import React from 'react';
import '../App.css';
import axios from 'axios';

import ToolCard from './ntua/toolCard';
import DisplayTable from './ntua/displayTable';
import Button from 'react-bootstrap/Button'
import { IoRefreshOutline } from 'react-icons/io5';

import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar} from '@mui/x-data-grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export default class DataVisualization extends React.Component {
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
       rows: [],
       data: [],
       keys: [],
       labels: [],
       refreshInterval: props.refreshInterval,
       API_URL: props.API_URL,
       counter: 0,
       displayTableComponent: []
     };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkIfDataIsLoaded = this.checkIfDataIsLoaded.bind(this);
    this.processData = this.processData.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.readFile = this.readFile.bind(this);
    //this.handleAddButton = this.handleAddButton.bind(this);
    //this.getProductData();
  }

  checkIfDataIsLoaded = (dataLoadedStatus) => {
    
    this.setState( { isDataLoaded: dataLoadedStatus });
    console.log(this.state.isDataLoaded);
  }

  processData() {
    let localKeys=[];
        let localColumns=[];
        let itemData=[];
        let localLabels=[];
        let localRows=[];

        
        //this.state.data = response.data;

        const firstItem = this.state.data[0];
        console.log('firstItem:', firstItem);
        
        for (let key in firstItem) {
            if (firstItem.hasOwnProperty(key)) {
                localKeys.push(key);
            }
        }
        localColumns.push({field: 'id'});
        for (let key in localKeys) {
            localColumns.push(
                {
                    field: localKeys[key]
                }
            )
        }
        let i = 0;
        for (const item of this.state.data) {
            let row = {};
            itemData.push(this.state.data[item]);
            row['id'] = i;
            console.log('item:', item);
            
            for (const key of localKeys) {
                row[key] = item[key];
            }
            localRows.push(row);
            console.log('row:', row);

            // Get the label for each car like Car0, Car1 etc
            const label = this.state.labelPreFix ? this.state.labelPreFix : 'Item';            
            localLabels.push(label + i++);
        }
        console.log('localKeys:', localKeys);
        console.log('localLabels:', localLabels);
        console.log('localColumns: ', localColumns);
        
        this.setState({ 
            
            isTransfering: false,
            columns:localColumns,
            rows: localRows,
            keys:localKeys,
            labels:localLabels,
            isDataLoaded: true
        });
  }
  getProductData = () => {
    axios.get(this.state.API_URL,  {headers: {"Access-Control-Allow-Origin":"*"}})
    .then((response) => {
      console.log('response.data:', response.data);
      this.setState({data:response.data}, () => {
        this.processData();
      }
        
        );
        
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
        console.log('url');
        console.log(url);

        for (url in formValues) {
            this.setState({API_URL: formValues[url]['url']}, () => {
                
                this.getProductData();
                //displayTableComponent.push(<DisplayTable columns={this.state.columns} data={this.state.data} />);
                //this.setState( { displayTableComponent: displayTableComponent });
            })
          
    
          
        }
        
        
      }
    

    refreshData() {
        console.log('refreshDAta');
        this.setState({isTool1: true, isTool2: false, isCustom: false, isDataLoaded: false, productDataArray: [], itemData:[]})
        this.getProductData();
    }

    readFile = async (e) => {
      console.log('readFile, e', e);
      
      e.preventDefault()
      const reader = new FileReader();
      reader.readAsText(e.target.files[0],  "UTF-8");
      reader.onload = async (e) => { 
        const text = (e.target.result)
        //console.log(text)
        console.log('readFile, JSON.parse(reader.result)', JSON.parse(reader.result));
        this.setState({data: JSON.parse(reader.result)}, () => {
          this.processData();
        }
          );
      };
      
    }

  render() {
    
    let toolComponent1;
    let buttonComponent;
    let toolCardComponentsArray = [];
    //let getDataComponent = <GetDataFromAPI API_URL={this.state.API_URL} checkInterval={this.state.refreshInterval} responseData = {this.getDataFromComponent} />;
    console.log(this.state.data);
    
    let customFormComponent = 
        <form  onSubmit={this.handleSubmit}>
            {this.state.formValues.map((element, index) => (
                <div className="form-inline" key={index}>
                    <label>Address</label>
                    <input type="url" name="url" value={element.url || ""} onChange={e => this.handleChange(index, e)} />
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
      console.log('dataloaded');
      console.log(this.state.itemData);
      console.log(this.state.data);
      toolCardComponentsArray = [
        <div className='tool-card'><ToolCard data={this.state.data} /></div>,
        <div className='tool-card'><ToolCard data={this.state.data} /></div>,
        <div className='tool-card'><ToolCard data={this.state.data} /></div>,
        <div className='tool-card'><ToolCard data={this.state.data} /></div>
      ]  
      //toolComponent1 = <DisplayTable columns={this.state.columns} data={this.state.data} />;
      toolComponent1 = <div style={{ display: 'flex', height: 700, marginTop: 30, marginBottom: 100}}><div style={{ flexGrow: 1 }}>
                            {console.log('this.state.rows:', this.state.rows)}
                            {console.log('this.state.columns:', this.state.columns)}
                            <DataGrid rows={this.state.rows} columns={this.state.columns} components={{ Toolbar: GridToolbar }}/>
                        </div></div>
      buttonComponent = <Button className="refresh-button" variant="primary"  onClick={this.refreshData} ><IoRefreshOutline /></Button>;
    }



    return (
      <div className='data-display'>
        <div className='header'>
          <h1>Dynamic API Input</h1>
          
          <div className='dynamic-api-form'>
            <p>This component accepts an array of similar objects.<br/> Please input an address in the form below or upload a file</p> 
            {customFormComponent}            
            {/*<button className='refresh-button' type='button' onClick={this.refreshData}>Refresh Data</button>*/}
          </div>
          <div><input type="file" onChange={(e) => this.readFile(e)} /></div>
          
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













