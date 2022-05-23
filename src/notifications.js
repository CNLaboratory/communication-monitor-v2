import React from 'react';
import axios from 'axios';
import NewDisplayTable from './new-display-table';
import * as S from './styles';
import NotificationsDisplayTable from './notification-display-table';

export default class NotificationsDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      formValues: [{ url: "" }],
      productDataArray: [],
      itemData: [],
      currentData: [],
      messagesTable: {}, //this map logs all messages and read/unread status. The format is {item: true/false} where true is unread and false is read
      readTable: {}, //this object holds key value pairs of [rowid:true/false] for read/unread status
      readKeyTable: {}, //[rowId: key]
      isDataLoaded: false,
      isTransfering: true,
      isTool1: false,
      columns: [],
      data: [],
      keys: [],
      labels: [],
      autoRefreshEnabled: this.props.autoRefreshEnabled ? this.props.autoRefreshEnabled : false,
      refreshInterval: props.refreshInterval,
      
      API_URL: props.API_URL,
      displayTableComponent: [],
      activeTab: 'Table'
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.checkIfDataIsLoaded = this.checkIfDataIsLoaded.bind(this);
    this.processData = this.processData.bind(this);
    this.refreshData = this.refreshData.bind(this);
    //this.handleAddButton = this.handleAddButton.bind(this);
    this.handleAutoRefreshChanged = this.handleAutoRefreshChanged.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
    this.markAllAsRead = this.markAllAsRead.bind(this);
    this.getProductData();
  }

  updateAutoRefresh() {
    if (this.props.autoRefreshEnabled && this.props.checkInterval) {
      this.setState({
        timer: setInterval(this.getProductData, this.props.checkInterval)
      });
    }
  }
  componentDidMount() {
    console.log('New Data Display, url:', this.props.API_URL);
    this.updateAutoRefresh();
  }
  handleAutoRefreshChanged(autoRefreshEnabled) {
    if (autoRefreshEnabled) {
      this.setState({
        timer: setInterval(this.getProductData, this.state.refreshInterval)
      })
      
    } else {
      clearInterval(this.state.timer);
    }
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
        
        const firstItem = this.state.data[0]['message'];
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
            //console.log('item.message:', this.state.data[item]['message'])
            let newItem = this.state.data[item]['message'];
            itemData.push(newItem);
        }
        console.log('itemData:', itemData)
        //we reverse the items so that more recent events are first
        itemData.reverse();
        console.log('after reverse, itemData:', itemData);
        
        this.setState({ 
            itemData: itemData,
            isTransfering: false,
            columns:localColumns,
            keys:localKeys,
            labels:localLabels,
            isDataLoaded: true
        }, () => this.analyzeData());
  }
  analyzeData() {
    const currentData = this.state.currentData;
    const newData = this.state.itemData;
    let messagesTable = this.state.messagesTable;

    for (let i = 0; i < newData.length; i++) {
      let key = newData[i]['detection_timestamp'] + newData[i]['asset'] + newData[i]['service_type'] + newData[i]['alert_timestamp'];
      if (!(key in messagesTable)) {
        console.log('new data found');
        messagesTable[key] = true;
        currentData.unshift(newData[i]);
      }
    }
    console.log('before setting state');
    console.log('messagesTable length:', Object.keys(messagesTable).length);
    console.log('messagesTable:', messagesTable);
    console.log('currentData:', currentData);
    console.log('newData:', newData);
    
    //create readTable with [rowId: read/unread status]
    let readTable = {};
    let readKeyTable = {};
    for (let i = 0; i < currentData.length; i++) {
      let key = currentData[i]['detection_timestamp'] + currentData[i]['asset'] + currentData[i]['service_type'] + currentData[i]['alert_timestamp'];
      readTable[i] = messagesTable[key];
      readKeyTable[i] = key;
    }

    this.setState({
      currentData: currentData,
      messagesTable: messagesTable,
      readTable: readTable,
      readKeyTable: readKeyTable
    })
  }

  getProductData = () => {
    const axiosInstance = axios.create();
    axiosInstance.defaults.timeout = this.state.settings.operationTimeOut;

    axiosInstance.get(this.state.API_URL,  {headers: {"Access-Control-Allow-Origin":"*"}})
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

  markAsRead(rowId) {
    console.log('notifications - markAsRead called');
    let messagesTable = this.state.messagesTable;
    
    let key = this.state.readKeyTable[rowId];
    messagesTable[key] = !messagesTable[key];

    let readTable = this.state.readTable;
    readTable[rowId] = !readTable[rowId];

    this.setState({
      readTable: readTable,
      messagesTable: messagesTable
    })

  }
  markAllAsRead() {
    let messagesTable = this.state.messagesTable;
    for (let key in messagesTable) {
      messagesTable[key] = false;
    }
    let readTable = this.state.readTable;
    for (let key in readTable) {
      readTable[key] = false;
    }

    this.setState({
      readTable: readTable,
      messagesTable: messagesTable
    })
  }

  render() {
    
    let toolComponent1;
    if (this.state.isDataLoaded) {
      if (!Array.isArray(this.state.itemData) || this.state.data.length === 0) {
          toolComponent1 = <h3>No data to display or api error</h3>
      } else {
        toolComponent1 = 
          <NotificationsDisplayTable 
            columns={this.state.columns} 
            data={this.state.itemData}
            readTable={this.state.readTable}
            refreshData={this.refreshData}
            autoRefreshCallBack={this.handleAutoRefreshChanged} 
            autoRefreshEnabled={this.state.autoRefreshEnabled} 
            columnDensity='compact' 
            paginationEnabled
            markAsRead={this.markAsRead}
            markAllAsRead={this.markAllAsRead}
            />;
      }
    }

    return (
      <>
      <S.Row>
      <S.Col12>
        
        {this.state.activeTab==='Table' &&
          <S.Card>
            <S.CardBody>
              {toolComponent1}
            </S.CardBody>
          </S.Card>    
        }
      </S.Col12>
      </S.Row>
      </>
    );
  }
}


