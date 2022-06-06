import React, {useRef} from "react";
import NewFilterTable from "./new-filtertable";
import { IoRefreshOutline } from 'react-icons/io5';
import { FiDownload} from 'react-icons/fi';
import * as S from './styles';
import { RiSettings2Line } from "react-icons/ri";
import Circle from "./assets/images/circle.svg"
import CircleDark from "./assets/images/circle-dark.svg"
import { Dropdown, Option } from "./components/ntua/dropdown";
import OutsideClickHandler from 'react-outside-click-handler';

export default class NewDisplayTable extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      settings: props.settings,
      columnFiltersEnabled: props.settings.tableColumnFiltersEnabled,
      rangeFiltersEnabled: props.settings.tableRangeFiltersEnabled,
      columnDensity: props.settings.tableDensity,
      stickyHeaderEnabled: props.settings.tableStickyHeaderEnabled,
      paginationEnabled: props.settings.tablePaginationEnabled,
      strippedRows: props.settings.tableStrippedRows,
      userMenuClicked: false,
      exportMenuClicked: false,
    }

    //this.userMenu = React.createRef();
    this.newFilterTableRef = React.createRef();
    this.refreshData = this.refreshData.bind(this);
    this.handleSettingsMenuClicked = this.handleSettingsMenuClicked.bind(this);
    this.handleColumnFiltersClicked = this.handleColumnFiltersClicked.bind(this);
    this.handleRangeFiltersClicked = this.handleRangeFiltersClicked.bind(this);
    this.handleColumnDensitySelection = this.handleColumnDensitySelection.bind(this);
    this.handleStickyHeaderEnabledClicked = this.handleStickyHeaderEnabledClicked.bind(this);
    this.handlePaginationEnabledClicked = this.handlePaginationEnabledClicked.bind(this);
    this.handleStrippedRowsEnabledClicked = this.handleStrippedRowsEnabledClicked.bind(this);
    this.hanldeOutsideSettingsButtonClicked = this.hanldeOutsideSettingsButtonClicked.bind(this);
    this.hanldeOutsideExportButtonClicked = this.hanldeOutsideExportButtonClicked.bind(this);
    this.makeCsv = this.makeCsv.bind(this);
    this.getTableDataForExport = this.getTableDataForExport.bind(this);
    this.handleExportMenuClicked = this.handleExportMenuClicked.bind(this);
    this.makeJson = this.makeJson.bind(this);
    
  }

  componentDidMount() {
    console.log('this.state.settings:', this.state.settings);
    console.log('this.state.settings.tableStrippedRows:', this.state.settings.tableStrippedRows);
    console.log('this.state.strippedRows:', this.state.strippedRows);
    console.log('props.settings.tableStrippedRows:', this.props.settings.tableStrippedRows);
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
  handleRangeFiltersClicked() {
    const rangeFiltersEnabled = !this.state.rangeFiltersEnabled;
    console.log('rangeFiltersEnabled');
    this.setState({
      rangeFiltersEnabled: rangeFiltersEnabled
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
  hanldeOutsideSettingsButtonClicked() {
    const userMenuClicked = false;
    this.setState({
      userMenuClicked: userMenuClicked
    });
  }
  hanldeOutsideExportButtonClicked() {
    const exportMenuClicked = false;
    this.setState({
      exportMenuClicked: exportMenuClicked
    });
  }
  handleExportMenuClicked() {
    const exportMenuClicked = !this.state.exportMenuClicked;
    this.setState({
      exportMenuClicked: exportMenuClicked
    });
  }
  getTableDataForExport (data, columns) {
    const filteredData = this.newFilterTableRef.current();
    return filteredData?.map((record) => columns.reduce((recordToDownload, column) => (
      { ...recordToDownload, [column.Header]: record[column.accessor] }
    ), {}));

  };

  async makeCsv (rows, filename) {
    const separator = ';';
    const keys = Object.keys(rows[0]);

    const csvContent = `${keys.join(separator)}\n${
      rows.map((row) => keys.map((k) => {
        let cell = row[k] === null || row[k] === undefined ? '' : row[k];
    
        cell = cell instanceof Date
          ? cell.toLocaleString()
          : cell.toString().replace(/"/g, '""');
    
        if (cell.search(/("|,|\n)/g) >= 0) {
          cell = `"${cell}"`;
        }
        return cell;
      }).join(separator)).join('\n')}`;
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // In case of IE 10+
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
  async makeJson (rows, filename) {
    const separator = ';';
    const keys = Object.keys(rows[0]);

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(rows)
    )}`;
    
    
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  }


  render () {
      
    return (
      <S.DisplayTableWrapper>
        <S.MultipleButtonsWrapper>
        <OutsideClickHandler onOutsideClick={this.hanldeOutsideExportButtonClicked}>
          <S.ButtonWrapper onClick={this.handleExportMenuClicked}>
            <S.StyledButtonGrey><FiDownload/></S.StyledButtonGrey>
            <S.TableSettingsPanel style={{display: this.state.exportMenuClicked ? 'flex' : 'none'}}>
              <S.SettingWrapper onClick={() => this.makeCsv(this.getTableDataForExport(this.props.data, this.props.columns), 'export.csv')}>
                Export to CSV
              </S.SettingWrapper>
              <S.SettingWrapper onClick={() => this.makeJson(this.getTableDataForExport(this.props.data, this.props.columns), 'export.json')}>
                Export to JSON
              </S.SettingWrapper>
            </S.TableSettingsPanel>
          </S.ButtonWrapper>
          </OutsideClickHandler>
          <S.ButtonWrapper onClick={this.refreshData}>
            <S.StyledButtonGrey><IoRefreshOutline /></S.StyledButtonGrey>
          </S.ButtonWrapper>
          <OutsideClickHandler onOutsideClick={this.hanldeOutsideSettingsButtonClicked}>
          <S.ButtonWrapper >
            <S.StyledButtonGrey onClick={this.handleSettingsMenuClicked}><RiSettings2Line/></S.StyledButtonGrey>
            <S.TableSettingsPanel style={{display: this.state.userMenuClicked ? 'flex' : 'none'}}>
              <S.SettingWrapper>
                <Dropdown
                  key='column-density'
                  formLabel='Column Density'
                  buttonText='Apply'
                  onChange={this.handleColumnDensitySelection} >
                  <Option key='compact' value='compact' selected={this.state.columnDensity==='compact'}/>
                  <Option key='standard' value='standard' selected={this.state.columnDensity==='standard'}/>
                  <Option key='comfortable' value='comfortable' selected={this.state.columnDensity==='comfortable'}/>
                </Dropdown>
              </S.SettingWrapper>
              <S.SettingWrapper onClick={this.handleColumnFiltersClicked}>
                <S.ToggleSwitchInput image={Circle} imageDark={CircleDark} checked={this.state.columnFiltersEnabled}/>
                <S.ToggleSwitchLabel>Column Filters</S.ToggleSwitchLabel>
              </S.SettingWrapper>
              <S.SettingWrapper onClick={this.handleRangeFiltersClicked}>
                <S.ToggleSwitchInput image={Circle} imageDark={CircleDark} checked={this.state.rangeFiltersEnabled}/>
                <S.ToggleSwitchLabel>Range Filters</S.ToggleSwitchLabel>
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
          </OutsideClickHandler>
        </S.MultipleButtonsWrapper>
        <NewFilterTable 
          getFilteredDataFunc={this.newFilterTableRef}
          columns={this.props.columns} 
          data={this.props.data} 
          columnFiltersEnabled={this.state.columnFiltersEnabled}
          rangeFiltersEnabled={this.state.rangeFiltersEnabled}
          columnDensity={this.state.columnDensity}
          stickyHeaderEnabled={this.state.stickyHeaderEnabled}
          paginationEnabled={this.state.paginationEnabled}
          stripped={this.state.strippedRows}
        />
      </S.DisplayTableWrapper>
    )
  }
}