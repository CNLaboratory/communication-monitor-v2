import React from 'react'
import * as S from './styles'
import Circle from "./assets/images/circle.svg"
import CircleDark from "./assets/images/circle-dark.svg"
import { DropdownHorizontal, Option } from "./components/ntua/dropdown";

export default class GeneralSettings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      columnFiltersEnabled: false,
      columnDensity: props.columnDensity ? props.columnDensity : 'compact',
      stickyHeaderEnabled: true,
      paginationEnabled: props.paginationEnabled ? props.paginationEnabled : true,
      strippedRows: true,
      autoRefreshInterval: 30000,
    }

    this.handleColumnFiltersClicked = this.handleColumnFiltersClicked.bind(this);
    this.handleColumnDensitySelection = this.handleColumnDensitySelection.bind(this);
    this.handleStickyHeaderEnabledClicked = this.handleStickyHeaderEnabledClicked.bind(this);
    this.handlePaginationEnabledClicked = this.handlePaginationEnabledClicked.bind(this);
    this.handleStrippedRowsEnabledClicked = this.handleStrippedRowsEnabledClicked.bind(this);
    this.handleAutoRefreshInputChanged = this.handleAutoRefreshInputChanged.bind(this);
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
  handleAutoRefreshInputChanged(event) {
    //const autoRefreshInterval = !this.state.autoRefreshInterval;
    console.log('event.target.value:', event.target.value);
    this.setState({
      autoRefreshInterval: event.target.value
    })
  }

  render() {
    return(
      <S.Row>
        <S.Col12>
          <S.Card>
            <S.CardBody>
              <S.CardTitle>Data Table Settings</S.CardTitle>
              <S.GeneralSettingsGroup>
              <S.GeneralSettingWrapper>
                <DropdownHorizontal
                  key='column-density'
                  formLabel='Column Density'
                  buttonText='Apply'
                  onChange={this.handleColumnDensitySelection} >
                  <Option key='compact' value='compact'/>
                  <Option key='standard' value='standard' selected/>
                  <Option key='comfortable' value='comfortable'/>
                </DropdownHorizontal>
              </S.GeneralSettingWrapper>
              <S.GeneralSettingWrapper onClick={this.handleColumnFiltersClicked}>
                <S.GeneralSettingsToggleSwitchLabel>Column Filters</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingToggleSwitchInput image={Circle} imageDark={CircleDark} checked={this.state.columnFiltersEnabled}/>
              </S.GeneralSettingWrapper>
              <S.GeneralSettingWrapper onClick={this.handleStickyHeaderEnabledClicked}>
                <S.GeneralSettingsToggleSwitchLabel>Sticky Header</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingToggleSwitchInput image={Circle} imageDark={CircleDark} checked={this.state.stickyHeaderEnabled}/>
              </S.GeneralSettingWrapper>
              <S.GeneralSettingWrapper onClick={this.handlePaginationEnabledClicked}>
                <S.GeneralSettingsToggleSwitchLabel>Pagination</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingToggleSwitchInput  image={Circle} imageDark={CircleDark} checked={this.state.paginationEnabled}/>
              </S.GeneralSettingWrapper>
              <S.GeneralSettingWrapper onClick={this.handleStrippedRowsEnabledClicked}>
                <S.GeneralSettingsToggleSwitchLabel>Stripped</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingToggleSwitchInput  image={Circle} imageDark={CircleDark} checked={this.state.strippedRows}/>
              </S.GeneralSettingWrapper>
              <S.GeneralSettingWrapper >
                <S.GeneralSettingsToggleSwitchLabel>Auto Refresh Interval</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingInput onChange={this.handleAutoRefreshInputChanged}/>
              </S.GeneralSettingWrapper>
              </S.GeneralSettingsGroup>
            </S.CardBody>
          </S.Card>
          <S.Card>
            <S.CardBody>
              <S.CardTitle>Notifications</S.CardTitle>
              <S.GeneralSettingsGroup>
              
              <S.GeneralSettingWrapper >
                <S.GeneralSettingsToggleSwitchLabel>Auto Refresh Interval</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingInput onChange={this.handleAutoRefreshInputChanged}/>
              </S.GeneralSettingWrapper>
              </S.GeneralSettingsGroup>
            </S.CardBody>
          </S.Card>
          <S.Card>
            <S.CardBody>
              <S.CardTitle>Theme</S.CardTitle>
              <S.GeneralSettingsGroup>
              
              <S.GeneralSettingWrapper>
                <DropdownHorizontal
                  key='theme'
                  formLabel='Choose Theme'
                  buttonText='Apply'
                  onChange={this.handleColumnDensitySelection} >
                  <Option key='light' value='light'/>
                  <Option key='dark' value='dark' selected/>
                  
                </DropdownHorizontal>
              </S.GeneralSettingWrapper>
              </S.GeneralSettingsGroup>
            </S.CardBody>
          </S.Card>
        </S.Col12>
      </S.Row>

    )
  }
  

}