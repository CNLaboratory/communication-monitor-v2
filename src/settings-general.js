import React from 'react'
import * as S from './styles'
import Circle from "./assets/images/circle.svg"
import CircleDark from "./assets/images/circle-dark.svg"
import { DropdownHorizontal, DropdownHorizontalWithButton, Option } from "./components/ntua/dropdown";
import {NotificationManager} from 'react-notifications';
import { defaultSettings } from './constants';


export default class GeneralSettings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      settings: props.settings,
      autoRefreshIntervalTemp: props.settings.tableAutoRefreshInterval,
      notificationsFetchIntervalTemp: props.settings.notificationsFetchInterval,
      operationTimeoutTemp: props.settings.operationTimeOut,
    }

    this.handleColumnFiltersClicked = this.handleColumnFiltersClicked.bind(this);
    this.handleColumnDensitySelection = this.handleColumnDensitySelection.bind(this);
    this.handleStickyHeaderEnabledClicked = this.handleStickyHeaderEnabledClicked.bind(this);
    this.handlePaginationEnabledClicked = this.handlePaginationEnabledClicked.bind(this);
    this.handleStrippedRowsEnabledClicked = this.handleStrippedRowsEnabledClicked.bind(this);
    this.handleAutoRefreshInputChanged = this.handleAutoRefreshInputChanged.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.settingsChanged = this.settingsChanged.bind(this);
    this.handleAutoRefreshEnabledClicked = this.handleAutoRefreshEnabledClicked.bind(this);
    this.handleApplyAutoRefreshClicked = this.handleApplyAutoRefreshClicked.bind(this);
    this.handleNotificationsFetchInputChanged = this.handleNotificationsFetchInputChanged.bind(this);
    this.handleApplyNotificationsFetchIntervalClicked = this.handleApplyNotificationsFetchIntervalClicked.bind(this);
    this.handleOperationTimetoutChanged = this.handleOperationTimetoutChanged.bind(this);
    this.handleApplyOperationTimeoutClicked = this.handleApplyOperationTimeoutClicked.bind(this);
    this.resetSettingsClicked = this.resetSettingsClicked.bind(this);
  }

  componentDidMount() {
    console.log('this.state.settings:', this.state.settings);
    console.log('this.props.settings:', this.props.settings);
  }

  settingsChanged() {
    console.log('settingsChanged:', this.state.settings);
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
  handleAutoRefreshEnabledClicked() {
    let settings = this.state.settings;
    settings.tableAutoRefreshEnabled = !settings.tableAutoRefreshEnabled;
    console.log('tableAutoRefreshEnabled:', settings.tableAutoRefreshEnabled);
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
  handleAutoRefreshInputChanged(event) {
    let autoRefreshIntervalTemp = event.target.value;
    console.log('autoRefreshIntervalTemp:', autoRefreshIntervalTemp);
    this.setState({
      autoRefreshIntervalTemp: autoRefreshIntervalTemp
    });
  }
  handleApplyAutoRefreshClicked() {
    let settings = this.state.settings;
    settings.tableAutoRefreshInterval = this.state.autoRefreshIntervalTemp;
    console.log('tableAutoRefreshInterval:', settings.tableAutoRefreshInterval);
    this.setState({
      settings: settings
    }, () => {
      NotificationManager.success('Table auto refresh interval changed', 'Sucess', 3000);
      this.settingsChanged();
    })
  }
  handleNotificationsFetchInputChanged(event) {
    let notificationsFetchIntervalTemp = event.target.value;
    console.log('notificationsFetchIntervalTemp:', notificationsFetchIntervalTemp);
    this.setState({
      notificationsFetchIntervalTemp: notificationsFetchIntervalTemp
    });
  }
  handleApplyNotificationsFetchIntervalClicked() {
    let settings = this.state.settings;
    settings.notificationsFetchInterval = this.state.notificationsFetchIntervalTemp;
    console.log('notificationsFetchInterval:', settings.notificationsFetchInterval);
    this.setState({
      settings: settings
    }, () => {
      NotificationManager.success('Notifications auto refresh interval changed', 'Sucess', 3000);
      this.settingsChanged();
    })
  }
  handleOperationTimetoutChanged(event) {
    let operationTimeoutTemp = event.target.value;
    console.log('operationTimeoutTemp:', operationTimeoutTemp);
    this.setState({
      operationTimeoutTemp: operationTimeoutTemp
    });
  }
  handleApplyOperationTimeoutClicked() {
    let settings = this.state.settings;
    settings.operationTimeOut = this.state.operationTimeoutTemp;
    console.log('operationTimeOut:', settings.operationTimeOut);
    this.setState({
      settings: settings
    }, () => {
      NotificationManager.success('Operation timeout changed', 'Sucess', 3000);
      this.settingsChanged();
    })
  }
  resetSettingsClicked() {
    let settings = {
      theme: defaultSettings.theme,
      notificationsFetchInterval: defaultSettings.notificationsFetchInterval,
      tableAutoRefreshInterval: defaultSettings.tableAutoRefreshInterval,
      tableAutoRefreshEnabled: defaultSettings.tableAutoRefreshEnabled,
      tableDensity: defaultSettings.tableDensity,
      tableColumnFiltersEnabled: defaultSettings.tableColumnFiltersEnabled,
      tableStickyHeaderEnabled: defaultSettings.tableStickyHeaderEnabled,
      tablePaginationEnabled: defaultSettings.tablePaginationEnabled,
      tableStrippedRows: defaultSettings.tableStrippedRows,
      operationTimeOut: defaultSettings.operationTimeOut,
    }
    this.setState({
      settings: settings,
      operationTimeoutTemp: defaultSettings.operationTimeOut,
      autoRefreshIntervalTemp: defaultSettings.tableAutoRefreshInterval,
      notificationsFetchIntervalTemp: defaultSettings.notificationsFetchInterval
    }, () => {
      NotificationManager.success('Settings were successfully reset', 'Sucess', 3000);
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
                  <Option key='compact' value='compact' selected={this.state.settings.tableDensity==='compact'}/>
                  <Option key='standard' value='standard' selected={this.state.settings.tableDensity==='standard'}/>
                  <Option key='comfortable' value='comfortable' selected={this.state.settings.tableDensity==='comfortable'}/>
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
              <S.GeneralSettingWrapper onClick={this.handleAutoRefreshEnabledClicked}>
                <S.GeneralSettingsToggleSwitchLabel>Auto-refresh Enabled</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingToggleSwitchInput  image={Circle} imageDark={CircleDark} checked={this.state.settings.tableAutoRefreshEnabled}/>
              </S.GeneralSettingWrapper>
              <S.GeneralSettingWrapper >
                <S.GeneralSettingsToggleSwitchLabel>Auto Refresh Interval (milliseconds)</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingInput value={this.state.autoRefreshIntervalTemp} placeholder={this.state.settings.tableAutoRefreshInterval} onChange={this.handleAutoRefreshInputChanged}/>
                <S.StyledButtonPrimary onClick={this.handleApplyAutoRefreshClicked}>Apply</S.StyledButtonPrimary>
              </S.GeneralSettingWrapper>
              </S.GeneralSettingsGroup>
              
            </S.CardBody>
          </S.Card>
          <S.Card>
            <S.CardBody>
              <S.CardTitle>Notifications</S.CardTitle>
              <S.GeneralSettingsGroup>
              <S.GeneralSettingWrapper >
                <S.GeneralSettingsToggleSwitchLabel>Notifications Fetch Interval (milliseconds)</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingInput value={this.state.notificationsFetchIntervalTemp} placeholder={this.state.settings.notificationsFetchInterval} onChange={this.handleNotificationsFetchInputChanged}/>
                <S.StyledButtonPrimary onClick={this.handleApplyNotificationsFetchIntervalClicked}>Apply</S.StyledButtonPrimary>
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
                  <Option key='light' value='light' selected={this.state.settings.theme === 'light' ? true : false}/>
                  <Option key='dark' value='dark' selected={this.state.settings.theme === 'dark' ? true : false}/>
                </DropdownHorizontal>
              </S.GeneralSettingWrapper>
              </S.GeneralSettingsGroup>
            </S.CardBody>
          </S.Card>
          <S.Card>
            <S.CardBody>
              <S.CardTitle>General</S.CardTitle>
              <S.GeneralSettingsGroup>
              <S.GeneralSettingWrapper >
                <S.GeneralSettingsToggleSwitchLabel>Operation Timeout (milliseconds)</S.GeneralSettingsToggleSwitchLabel>
                <S.GeneralSettingInput value={this.state.operationTimeoutTemp} placeholder={this.state.settings.operationTimeOut} onChange={this.handleOperationTimetoutChanged}/>
                <S.StyledButtonPrimary onClick={this.handleApplyOperationTimeoutClicked}>Apply</S.StyledButtonPrimary>
              </S.GeneralSettingWrapper>
              </S.GeneralSettingsGroup>
              <S.GeneralSettingsGroup>
              <S.GeneralSettingWrapper >
                <S.StyledButtonPrimary onClick={this.resetSettingsClicked}>Reset Settings</S.StyledButtonPrimary>
              </S.GeneralSettingWrapper>
              </S.GeneralSettingsGroup>
            </S.CardBody>
          </S.Card>
        </S.Col12>
      </S.Row>

    )
  }
  

}