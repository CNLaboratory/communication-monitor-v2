import React from 'react';
import axios from 'axios';
import NewDisplayTable from './new-display-table';
import * as S from './styles';
import NotificationsDisplayTable from './notification-display-table';

// accepts the following props
// refreshData()
// handleAutoRefreshChanged()
//
export default class NewNotificationsDisplay extends React.Component {
  constructor(props) {
    super(props);
    //console.log('newnotificationsdisplay - props.columns:', props.columns);
    //console.log('newnotificationsdisplay - props.itemData:', props.itemData);
    this.state = { 
      
      columns: props.columns,
      data: props.itemData,
      readTable: props.readTable,
      autoRefreshEnabled: props.autoRefreshEnabled,
      markAsRead: props.markAsRead,
      markAllAsRead: props.markAllAsRead,
      
    };
  
    this.refreshData = this.refreshData.bind(this);
    this.handleAutoRefreshChanged = this.handleAutoRefreshChanged.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
    this.markAllAsRead = this.markAllAsRead.bind(this);
  }

  

  handleAutoRefreshChanged(autoRefreshEnabled) {
    this.props.handleAutoRefreshChanged();
  }

  refreshData() {
    this.props.refreshData();
  }

  markAsRead(rowId) {
    this.props.markAsRead(rowId);

  }
  markAllAsRead() {
    this.props.markAllAsRead();
  }

  render() {
    //console.log('NewNotificationsDisplay');
    //console.log('this.props.columns:', this.props.columns);
    //console.log('this.props.data:', this.props.itemData);
    let toolComponent1 = 
      <NotificationsDisplayTable 
        columns={this.props.columns} 
        data={this.props.itemData}
        readTable={this.props.readTable}
        autoRefreshEnabled={this.props.autoRefreshEnabled}
        handleAutoRefreshChanged={this.props.handleAutoRefreshChanged}
        columnDensity='compact' 
        paginationEnabled
        markAsRead={this.markAsRead}
        markAllAsRead={this.markAllAsRead}
        refreshData={this.refreshData}
        />;
      
    

    return (
      <>
      <S.Row>
      <S.Col12>
          <S.Card>
            <S.CardBody>
              {toolComponent1}
            </S.CardBody>
          </S.Card>    
        
      </S.Col12>
      </S.Row>
      </>
    );
  }
}


