import React, {useRef} from "react";
import NotificationsTable from "./notifications-table";
import { IoRefreshOutline } from 'react-icons/io5';
import * as S from './styles';
import { RiSettings2Line } from "react-icons/ri";
import Circle from "./assets/images/circle.svg"
import CircleDark from "./assets/images/circle-dark.svg"
import { Dropdown, Option } from "./components/ntua/dropdown";

export default class NotificationsDisplayTable extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      userMenuClicked: false,
      columnFiltersEnabled: false,
      columnDensity: props.columnDensity ? props.columnDensity : 'standard',
      stickyHeaderEnabled: true,
      paginationEnabled: props.paginationEnabled ? props.paginationEnabled : false,
      strippedRows: true,
      autoRefreshEnabled: props.autoRefreshEnabled ? props.autoRefreshEnabled : false
    }
    console.log('NotificationsDisplayTable - autoRefreshEnabled:', this.state.autoRefreshEnabled);
    this.userMenu = React.createRef();
    this.refreshData = this.refreshData.bind(this);
    this.handleSettingsMenuClicked = this.handleSettingsMenuClicked.bind(this);
    this.handleColumnFiltersClicked = this.handleColumnFiltersClicked.bind(this);
    this.handleColumnDensitySelection = this.handleColumnDensitySelection.bind(this);
    this.handleStickyHeaderEnabledClicked = this.handleStickyHeaderEnabledClicked.bind(this);
    this.handlePaginationEnabledClicked = this.handlePaginationEnabledClicked.bind(this);
    this.handleStrippedRowsEnabledClicked = this.handleStrippedRowsEnabledClicked.bind(this);
    this.handleAutoRefreshClicked = this.handleAutoRefreshClicked.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
    this.markAllAsRead = this.markAllAsRead.bind(this);
  }

  refreshData() {
    this.props.refreshData();
  }
  handleSettingsMenuClicked() {
    const userMenuClicked = !this.state.userMenuClicked;
    this.setState({
      userMenuClicked: userMenuClicked
    })
  }
  handleLinesSwitchClicked() {

  }
  handleColumnFiltersClicked() {
    const columnFiltersEnabled = !this.state.columnFiltersEnabled;
    console.log('columnFiltersEnabled');
    this.setState({
      columnFiltersEnabled: columnFiltersEnabled
    })
  }
  handleColumnDensitySelection(event) {
    this.setState({
      columnDensity: event.target.value
    })
  }
  handleStickyHeaderEnabledClicked() {
    const stickyHeaderEnabled = !this.state.stickyHeaderEnabled;
    console.log('stickyHeaderEnabled:', stickyHeaderEnabled);
    this.setState({
      stickyHeaderEnabled: stickyHeaderEnabled
    })
  }
  handlePaginationEnabledClicked() {
    const paginationEnabled = !this.state.paginationEnabled;
    console.log('paginationEnabled:', paginationEnabled);
    this.setState({
      paginationEnabled: paginationEnabled
    })
  }
  handleStrippedRowsEnabledClicked() {
    const strippedRows = !this.state.strippedRows;
    this.setState({
      strippedRows: strippedRows
    })
  }
  handleAutoRefreshClicked() {
    const autoRefreshEnabled = !this.state.autoRefreshEnabled;
    this.setState({
      autoRefreshEnabled: autoRefreshEnabled
    }, () => {
      this.props.handleAutoRefreshChanged(autoRefreshEnabled);
    })
    
  }
  markAsRead(rowID) {
    this.props.markAsRead(rowID);
  }
  markAllAsRead() {
    this.props.markAllAsRead();
  }

  render () {
    //console.log('NotificationsDisplayTable - this.props.columns:', this.props.columns);
    //console.log('NotificationsDisplayTable - this.props.data:', this.props.data);
    //console.log('NotificationsDisplayTable - this.props.readTable:', this.props.readTable);
    
    return (
      <S.DisplayTableWrapper>
        <S.MultipleButtonsWrapper>
        <S.ButtonWrapper>
            <S.StyledButtonGrey onClick={this.markAllAsRead}>Mark All As Read</S.StyledButtonGrey>
          </S.ButtonWrapper>
        <S.ButtonWrapper onClick={this.handleAutoRefreshClicked}>
            
            <S.ToggleSwitchInput image={Circle} imageDark={CircleDark} checked={this.state.autoRefreshEnabled}/>
            <S.ToggleSwitchLabel>Auto Refresh</S.ToggleSwitchLabel>
          </S.ButtonWrapper>
          <S.ButtonWrapper>
            <S.StyledButtonGrey onClick={this.refreshData}><IoRefreshOutline /></S.StyledButtonGrey>
          </S.ButtonWrapper>
          
          <S.ButtonWrapper>
            <S.StyledButtonGrey ><RiSettings2Line onClick={this.handleSettingsMenuClicked}/></S.StyledButtonGrey>
            <S.TableSettingsPanel style={{display: this.state.userMenuClicked ? 'flex' : 'none'}}>
              <S.SettingWrapper>
                <Dropdown
                  key='column-density'
                  formLabel='Column Density'
                  buttonText='Apply'
                  onChange={this.handleColumnDensitySelection} >
                  <Option key='compact' value='compact'/>
                  <Option key='standard' value='standard' selected/>
                  <Option key='comfortable' value='comfortable'/>
                </Dropdown>
              </S.SettingWrapper>
              <S.SettingWrapper onClick={this.handleColumnFiltersClicked}>
                <S.ToggleSwitchInput image={Circle} imageDark={CircleDark} checked={this.state.columnFiltersEnabled}/>
                <S.ToggleSwitchLabel>Column Filters</S.ToggleSwitchLabel>
              </S.SettingWrapper>
              <S.SettingWrapper onClick={this.handleStickyHeaderEnabledClicked}>
                <S.ToggleSwitchInput image={Circle} imageDark={CircleDark} checked={this.state.stickyHeaderEnabled}/>
                <S.ToggleSwitchLabel>Sticky Header</S.ToggleSwitchLabel>
              </S.SettingWrapper>
              <S.SettingWrapper onClick={this.handlePaginationEnabledClicked}>
                <S.ToggleSwitchInput  image={Circle} imageDark={CircleDark} checked={this.state.paginationEnabled}/>
                <S.ToggleSwitchLabel>Pagination</S.ToggleSwitchLabel>
              </S.SettingWrapper>
              <S.SettingWrapper onClick={this.handleStrippedRowsEnabledClicked}>
                <S.ToggleSwitchInput  image={Circle} imageDark={CircleDark} checked={this.state.strippedRows}/>
                <S.ToggleSwitchLabel>Stripped</S.ToggleSwitchLabel>
              </S.SettingWrapper>
            </S.TableSettingsPanel>
          </S.ButtonWrapper>
        </S.MultipleButtonsWrapper>
        <NotificationsTable 
          columns={this.props.columns} 
          data={this.props.data} 
          columnFiltersEnabled={this.state.columnFiltersEnabled}
          columnDensity={this.state.columnDensity}
          stickyHeaderEnabled={this.state.stickyHeaderEnabled}
          paginationEnabled={this.state.paginationEnabled}
          stripped={this.state.strippedRows}
          readTable={this.props.readTable}
          markAsRead={this.props.markAsRead}
        />
      </S.DisplayTableWrapper>
    )
  }
}