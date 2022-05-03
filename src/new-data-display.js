import React from 'react';
import './App.css';
import axios from 'axios';
import ToolCard from './components/ntua/toolCard';
import DisplayTable from './components/ntua/displayTable';
import NewDisplayTable from './new-display-table';
import Button from 'react-bootstrap/Button'
import { IoRefreshOutline } from 'react-icons/io5';
import * as S from './styles';

import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar} from '@mui/x-data-grid';

export default class NewDataDisplay extends React.Component {
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
       counter: 0,
       displayTableComponent: [],
       activeTab: 'Table'
     };
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.checkIfDataIsLoaded = this.checkIfDataIsLoaded.bind(this);
    this.processData = this.processData.bind(this);
    this.refreshData = this.refreshData.bind(this);
    //this.handleAddButton = this.handleAddButton.bind(this);
    this.getProductData();
  }

  componentDidMount() {
    console.log('New Data Display, url:', this.props.API_URL);
  }

  checkIfDataIsLoaded = (dataLoadedStatus) => {
    
    this.setState( { isDataLoaded: dataLoadedStatus });
    
  }

  //process data for the react-table
  processData() {
    let localKeys=[];
        let localColumns=[];
        let itemData=[];
        let localLabels=[];
        let localRows=[];

        
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
        
        for (let item in this.state.data) {
            itemData.push(this.state.data[item]);
        }
        
        this.setState({ 
            data: this.state.data,
            isTransfering: false,
            columns:localColumns,
            keys:localKeys,
            labels:localLabels,
            isDataLoaded: true
        });
  }


  //process data for the mui table
  /*processData() {
    let localKeys=[];
        let localColumns=[];
        let itemData=[];
        let localLabels=[];
        let localRows=[];

        
        //this.state.data = response.data;

        const firstItem = this.state.data[0];
        
        
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
            
            
            for (const key of localKeys) {
                row[key] = item[key];
            }
            localRows.push(row);
            

            // Get the label for each car like Car0, Car1 etc
            const label = this.state.labelPreFix ? this.state.labelPreFix : 'Item';            
            localLabels.push(label + i++);
        }
        
        
        this.setState({ 
            
            isTransfering: false,
            columns:localColumns,
            rows: localRows,
            keys:localKeys,
            labels:localLabels,
            isDataLoaded: true
        });
  }*/

  getProductData = () => {
    axios.get(this.state.API_URL,  {headers: {"Access-Control-Allow-Origin":"*"}})
    .then((response) => {
      
      this.setState({data:response.data}, () => {
        this.processData();
      });
    });
  }

  refreshData() {
      console.log('refreshData()');
      this.setState({isTool1: true, isTool2: false, isCustom: false, isDataLoaded: false, productDataArray: [], itemData:[]})
      this.getProductData();
  }

  render() {
    
    let toolComponent1;
    let buttonComponent;
    let toolCardComponentsArray = [];
    //let getDataComponent = <GetDataFromAPI API_URL={this.state.API_URL} checkInterval={this.state.refreshInterval} responseData = {this.getDataFromComponent} />;
    
    
    
    if (this.state.isDataLoaded) {
      
      
      if (!Array.isArray(this.state.data) || this.state.data.length === 0) {
          toolComponent1 = <h3>No data to display or api error</h3>
      } else {
        toolCardComponentsArray = [
          <S.Row key='row1'><S.Col12>
            <S.Card><S.CardBody><ToolCard data={this.state.data} /></S.CardBody></S.Card>
            <S.Card><S.CardBody><ToolCard data={this.state.data} /></S.CardBody></S.Card>
          </S.Col12></S.Row>,
          <S.Row key='row2'><S.Col12>
            <S.Card><S.CardBody><ToolCard data={this.state.data} /></S.CardBody></S.Card>
            <S.Card><S.CardBody><ToolCard data={this.state.data} /></S.CardBody></S.Card>
          </S.Col12></S.Row>
        ]  
        //toolComponent1 = <DisplayTable columns={this.state.columns} data={this.state.data} />;
        toolComponent1 = <NewDisplayTable columns={this.state.columns} data={this.state.data} refreshData={this.refreshData}/>;
        //toolComponent1 = <div style={{display: 'flex', height: 500, marginTop: 30}}><DataGrid rows={this.state.rows} columns={this.state.columns} components={{ Toolbar: GridToolbar }}/></div>;
        //buttonComponent = <S.StyledButton onClick={this.refreshData} ><IoRefreshOutline /></S.StyledButton>;
      }
    }

    return (
      <>
      <S.Row>
      <S.Col12>
        <S.MainContentTabsWrapper>
          <S.MainContentTab>
            <S.MainContentTabLink className={this.state.activeTab==='Table' ? 'active' : ''} onClick={()=>{this.setState({activeTab: 'Table'})}}>
              Table
            </S.MainContentTabLink>
          </S.MainContentTab>
          <S.MainContentTab>
            <S.MainContentTabLink className={this.state.activeTab==='Charts' ? 'active' : ''} onClick={()=>{this.setState({activeTab: 'Charts'})}}>
              Charts
            </S.MainContentTabLink>
          </S.MainContentTab>
        </S.MainContentTabsWrapper>
        {this.state.activeTab==='Table' &&
          <S.Card>
            <S.CardBody>
              {toolComponent1}
            </S.CardBody>
          </S.Card>    
        } 
      </S.Col12>
      </S.Row>
      {this.state.activeTab==='Charts' && toolCardComponentsArray}
      </>
    );
  }
}

