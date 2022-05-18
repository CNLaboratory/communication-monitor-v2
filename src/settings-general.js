import React from 'react'
import * as S from './styles'
import Circle from "./assets/images/circle.svg"
import CircleDark from "./assets/images/circle-dark.svg"
import { DropdownHorizontal, DropdownHorizontalWithButton, Option } from "./components/ntua/dropdown";

export default class GeneralSettings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      settings: props.settings
    }

    this.handleColumnFiltersClicked = this.handleColumnFiltersClicked.bind(this);
    this.handleColumnDensitySelection = this.handleColumnDensitySelection.bind(this);
    this.handleStickyHeaderEnabledClicked = this.handleStickyHeaderEnabledClicked.bind(this);
    this.handlePaginationEnabledClicked = this.handlePaginationEnabledClicked.bind(this);
    this.handleStrippedRowsEnabledClicked = this.handleStrippedRowsEnabledClicked.bind(this);
    this.handleAutoRefreshInputChanged = this.handleAutoRefreshInputChanged.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.settingsChanged = this.settingsChanged.bind(this);
  }

  componentDidMount() {
    console.log('this.state.settings:', this.state.settings);
    console.log('this.props.settings:', this.props.settings);
  }

  settingsChanged() {
    this.props.handleSettingsUpdate(this.state.settings);
  }

  handleColumnFiltersClicked() {
    let settings = this.state.settings;
    settings.tableColumnFiltersEnabled = !settings.tableColumnFiltersEnabled;
    console.log('columnFiltersEnabled');
    this.setState({
      settings: settings
    }, () => {
      this.settingsChanged();
    })
  }
  handleColumnDensitySelection(event) {
    let settings = this.state.settings;
    settings.tableDensity = event.target.value;
    console.log('tableDensity changed, new value:', event.target.value);
    this.setState({
      settings: settings
    }, () => {
      this.settingsChanged();
    })
    
  }
  handleStickyHeaderEnabledClicked() {
    let settings = this.state.settings;
    settings.tableStickyHeaderEnabled = !settings.tableStickyHeaderEnabled;
    console.log('tableStickyHeaderEnabled:', settings.tableStickyHeaderEnabled);
    this.setState({
      settings: settings
    }, () => {
      this.settingsChanged();
    })
  }
  handlePaginationEnabledClicked() {
    let settings = this.state.settings;
    settings.tablePaginationEnabled = !settings.tablePaginationEnabled;
    console.log('tablePaginationEnabled:', settings.tablePaginationEnabled);
    this.setState({
      settings: settings
    }, () => {
      this.settingsChanged();
    })
  }
  handleStrippedRowsEnabledClicked() {
    let settings = this.state.settings;
    settings.tableStrippedRows = !settings.tableStrippedRows;
    console.log('tableStrippedRows:', settings.tableStrippedRows);
    this.setState({
      settings: settings
    }, () => {
      this.settingsChanged();
    })
  }
  handleAutoRefreshInputChanged(event) {
    let settings = this.state.settings;
    settings.tableAutoRefreshInterval = event.target.value;
    console.log('tableAutoRefreshInterval:', settings.tableAutoRefreshInterval);
    this.setState({
      settings: settings
    }, () => {
      this.settingsChanged();
    })
  }
  handleThemeChange(event) {
    let settings = this.state.settings;
    settings.theme = event.target.value;
    this.setState({
      settings: settings
    }, () => {
      this.settingsChanged();
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
                <S.GeneralSettingToggleSwitchInput image={Circle} imageDark={CircleDark} checked={this.state.settings.tableColumnFiltersEnabled}/>
              </S.GeneralSettingWrapper>
              <S.GeneralSettingWrapper onClick={this.handleStickyHeaderEnabledClicked}>
                <S.GeneralSettingsToggleSwitchLabel>Sticky Header</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingToggleSwitchInput image={Circle} imageDark={CircleDark} checked={this.state.settings.tableStickyHeaderEnabled}/>
              </S.GeneralSettingWrapper>
              <S.GeneralSettingWrapper onClick={this.handlePaginationEnabledClicked}>
                <S.GeneralSettingsToggleSwitchLabel>Pagination</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingToggleSwitchInput  image={Circle} imageDark={CircleDark} checked={this.state.settings.tablePaginationEnabled}/>
              </S.GeneralSettingWrapper>
              <S.GeneralSettingWrapper onClick={this.handleStrippedRowsEnabledClicked}>
                <S.GeneralSettingsToggleSwitchLabel>Stripped</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingToggleSwitchInput  image={Circle} imageDark={CircleDark} checked={this.state.settings.tableStrippedRows}/>
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
                  onChange={this.handleThemeChange}
                  >
                  <Option key='light' value='light' selected={this.props.settings.theme === 'light' ? true : false}/>
                  <Option key='dark' value='dark' selected={this.props.settings.theme === 'dark' ? true : false}/>
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