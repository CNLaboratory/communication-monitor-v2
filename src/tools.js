import React from 'react';
import { MainContent } from './main-content';
import NewDataDisplay from './new-data-display';
import DynamicAPI from './components/dynamic-api';
import { ENDPOINTS } from './constants';
import OrderTrack from './components/order-track';
import UploadFile from './components/upload-file-test';
import DataVisualization from './components/data-visualization';
import IFrameTest from './components/iframe-test';
import UserManagement from './components/user-management/user-management';
import HomeComponent from './home-component';
import ComplexDataVisualization from './complex-data';
import LeafletExample from './leaflet-example';
import NewDynamicAPI from './new-dynamic-api';
import NotificationsDisplay from './notifications';
import NewNotificationsDisplay from './new-notifications-display';
import CustomIFrame from './components/custom-iframe';

export function MainHome () {
  return(

    <MainContent key='home'
      title='Communication Monitor' 
      breadcrumpToolsetLink='' 
      breadcrumpToolsetTitle=''
      breadcrumpToolLink=''
      breadcrumpToolTitle=''
      mainComponent= {<HomeComponent/>}
    />);
}
export function TransactionsMonitor () { 
  return(

  <MainContent key='transactionsmonitor'
    title='Transactions Depiction' 
    breadcrumpToolsetLink='/visualizationtoolset' 
    breadcrumpToolsetTitle='Visualization Toolset'
    breadcrumpToolLink='/transactionsmonitor'
    breadcrumpToolTitle='Transactions Monitor'
    mainComponent= {<NewDataDisplay API_URL={ENDPOINTS.transactionsdepiction.url} headerText={ENDPOINTS.transactionsdepiction.pageTitle}/>}
  />);

};

export function SensorsDepiction () { 
  return (
  <MainContent key='SensorsDepiction'
    title='Sensors Depiction' 
    breadcrumpToolsetLink='/visualizationtoolset' 
    breadcrumpToolsetTitle='Visualization Toolset'
    breadcrumpToolLink='/sensorsdepiction'
    breadcrumpToolTitle='Sensors Depiction'
    mainComponent= {<NewDataDisplay API_URL={ENDPOINTS.sensorsdepiction.url} headerText={ENDPOINTS.sensorsdepiction.pageTitle}/>}
  />);
};

export function AbnormalDetection () { 
return (

  <MainContent key='AbnormalDetection'
    title='Abnormal Detection' 
    breadcrumpToolsetLink='/fusiontoolset' 
    breadcrumpToolsetTitle='Fusion Toolset'
    breadcrumpToolLink='/abnormaldetection'
    breadcrumpToolTitle='Abnormal Detection'
    mainComponent= {<NewDataDisplay API_URL={ENDPOINTS.abnormaldetection.url} headerText={ENDPOINTS.abnormaldetection.pageTitle}/>}
  />
);
}

export function DriverTampering () {
  return (
  <MainContent key='DriverTampering'
    title='Driver Tampering' 
    breadcrumpToolsetLink='/fusiontoolset' 
    breadcrumpToolsetTitle='Fusion Toolset'
    breadcrumpToolLink='/drivertampering'
    breadcrumpToolTitle='Driver Tampering'
    mainComponent= {<NewDataDisplay API_URL={ENDPOINTS.drivertampering.url} headerText={ENDPOINTS.drivertampering.pageTitle}/>}
  />);
};

export function DriverTamperingDetails () {
  return(
  <MainContent key='DriverTamperingDetails'
    title='Driver ID Tampering Details' 
    breadcrumpToolsetLink='/fusiontoolset' 
    breadcrumpToolsetTitle='Fusion Toolset'
    breadcrumpToolLink='/drivertamperingdetails'
    breadcrumpToolTitle='Driver Tampering Details'
    mainComponent= {<NewDataDisplay API_URL={ENDPOINTS.drivertamperingdetails.url} headerText={ENDPOINTS.drivertamperingdetails.pageTitle}/>}
  />)
};

export function Reasoning1 () { 
  return (
  <MainContent key='Reasoning1'
    title='Suspicious Transactions' 
    breadcrumpToolsetLink='/advancedreasonertoolset' 
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    breadcrumpToolLink='/reasoning1'
    breadcrumpToolTitle='Suspicious Transactions'
    mainComponent= {<NewDataDisplay API_URL={ENDPOINTS.reasoning1.url} headerText={ENDPOINTS.reasoning1.pageTitle}/>}
  />);};

export function Reasoning2 () {
  return (
  <MainContent key='Reasoning2'
    title='Suspicious Transacations in Combinations with Unknown Sources' 
    breadcrumpToolsetLink='/advancedreasonertoolset' 
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    breadcrumpToolLink='/reasoning2'
    breadcrumpToolTitle='Suspicious Combinations'
    mainComponent= {<NewDataDisplay API_URL={ENDPOINTS.reasoning2.url} headerText={ENDPOINTS.reasoning2.pageTitle}/>}
  />);};

export function Reasoning3 () {
  return (

  <MainContent key='Reasoning3'
    title='GSM Jammed & Antenna Removal Status' 
    breadcrumpToolsetLink='/advancedreasonertoolset' 
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    breadcrumpToolLink='/reasoning3'
    breadcrumpToolTitle='GSM & Antenna Status'
    mainComponent= 
    {<NewDataDisplay 
        API_URL={ENDPOINTS.reasoning3.url} 
        headerText={ENDPOINTS.reasoning3.pageTitle}/>}
  />
)};

export function Reasoning4 () {
  return (

  <MainContent key='Reasoning4'
    title='Driver & Truck GPS Trackers Deviations' 
    breadcrumpToolsetLink='/advancedreasonertoolset' 
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    breadcrumpToolLink='/reasoning4'
    breadcrumpToolTitle='GPS Deviations'
    mainComponent= 
    {<NewDataDisplay 
        API_URL={ENDPOINTS.reasoning4.url} 
        headerText={ENDPOINTS.reasoning4.pageTitle}/>}
  />
)};
export function Reasoning4b () {
  return (

  <MainContent key='Reasoning4b'
    title='Asset & Truck GPS Trackers Deviations' 
    breadcrumpToolsetLink='/advancedreasonertoolset' 
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    breadcrumpToolLink='/reasoning4b'
    breadcrumpToolTitle='Asset GPS Deviations'
    mainComponent= 
    {<NewDataDisplay 
        API_URL={ENDPOINTS.reasoning4b.url} 
        headerText={ENDPOINTS.reasoning4b.pageTitle}/>}
  />
)};


export function Reasoning5 () {
  return (

  <MainContent key='Reasoning5'
    title='Alerts Detection Based on the Driver & Truck GPS Trackers Deviations' 
    breadcrumpToolsetLink='/advancedreasonertoolset' 
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    breadcrumpToolLink='/reasoning5'
    breadcrumpToolTitle='GPS Deviations Detection'
    mainComponent= 
    {<NewDataDisplay 
        API_URL={ENDPOINTS.reasoning5.url} 
        headerText={ENDPOINTS.reasoning5.pageTitle}/>}
  />
)};

export function Reasoning5b () {
  return (

  <MainContent key='Reasoning5b'
    title='Packet Theft Detection' 
    breadcrumpToolsetLink='/advancedreasonertoolset' 
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    breadcrumpToolLink='/reasoning5b'
    breadcrumpToolTitle='Packet Theft Detection'
    mainComponent= 
    {<NewDataDisplay 
        API_URL={ENDPOINTS.reasoning5b.url} 
        headerText={ENDPOINTS.reasoning5b.pageTitle}/>}
  />
)};

export function Reasoning6 () {
  return (

  <MainContent key='Reasoning6'
    title='Door & Temperature Status' 
    breadcrumpToolsetLink='/advancedreasonertoolset' 
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    breadcrumpToolLink='/reasoning6'
    breadcrumpToolTitle='Door & Temp Status'
    mainComponent= 
    {<NewDataDisplay 
        API_URL={ENDPOINTS.reasoning6.url} 
        headerText={ENDPOINTS.reasoning6.pageTitle}/>}
  />
)};

export function Reasoning7() {
  return (

  <MainContent key='Reasoning7'
    title='Broken Door Status' 
    breadcrumpToolsetLink='/advancedreasonertoolset' 
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    breadcrumpToolLink='/reasoning7'
    breadcrumpToolTitle='Broken Door Status'
    mainComponent= 
    {<NewDataDisplay 
        API_URL={ENDPOINTS.reasoning7.url} 
        headerText={ENDPOINTS.reasoning7.pageTitle}/>}
  />
)};

export function ThreatAndIncidentToolset() {
  return (

  <MainContent key='ThreatAndIncidentToolset'
    title='Threat and Incident Complex Event Toolset' 
    breadcrumpToolsetLink='/threatandincident' 
    breadcrumpToolsetTitle='Threat and Incident Complex Event Toolset'
    mainComponent= 
    {<NewDataDisplay 
        API_URL={ENDPOINTS.threatandincident.url} 
        headerText={ENDPOINTS.threatandincident.pageTitle}/>}
  />
)};

export function AlertLoggerToolset() {
  return (

  <MainContent key='AlertLoggerToolset'
    title='Alert Logger' 
    breadcrumpToolsetLink='/alertlogger' 
    breadcrumpToolsetTitle='Alert Logger'
    mainComponent= 
    {<NewDataDisplay 
        API_URL={ENDPOINTS.alertlogger.url} 
        headerText={ENDPOINTS.alertlogger.pageTitle}/>}
  />
)};

export function DynamicApiExperiment() {
  return (

  <MainContent key='DynamicApiExperiment'
    title='Dynamic API' 
    breadcrumpToolsetLink='/dynamicapi' 
    breadcrumpToolsetTitle='Dynamic API'
    mainComponent= 
    {<NewDynamicAPI />}
  />
)};

export function OrderTrackExperiment() {
  return (

  <MainContent key='OrderTrackExperiment'
    title='Order Track' 
    breadcrumpToolsetLink='/ordertrack' 
    breadcrumpToolsetTitle='Order Track'
    mainComponent= 
    {<OrderTrack />}
  />
)};

export function UploadFileTestExperiment() {
  return (

  <MainContent key='UploadFileTestExperiment'
    title='Dynamic API' 
    breadcrumpToolsetLink='/dynamicapi' 
    breadcrumpToolsetTitle='Dynamic API'
    mainComponent= 
    {<UploadFile />}
  />
)};


export function DataVisualizationExperiment () {
  return (

  <MainContent key='DataVisualizationExperiment'
    title='Data Visualization' 
    breadcrumpToolsetLink='/datavisualization' 
    breadcrumpToolsetTitle='Data Visualization'
    mainComponent= 
    {<DataVisualization />}
  />
)};


export function IFrameTestExperiment () {
  return (

  <MainContent key='IFrameTestExperiment'
    title='iFrame Test' 
    breadcrumpToolsetLink='/iframetest' 
    breadcrumpToolsetTitle='iFrame Test'
    mainComponent= 
    {<IFrameTest />}
  />
)};

export function UserManagementTool () {
  return (

  <MainContent key='UserManagementTool'
    title='User Management' 
    breadcrumpToolsetLink='/usermanagement' 
    breadcrumpToolsetTitle='User Management'
    mainComponent= 
    {<UserManagement />}
  />
)};

export function ComplexDataVisualizationTool () {
  return (

  <MainContent key='ComplexDataVisualizationTool'
    title='Complex Data Visualization' 
    breadcrumpToolsetLink='/complexdatavisualization' 
    breadcrumpToolsetTitle='Complex Data Visualization'
    mainComponent= 
    {<ComplexDataVisualization />}
  />
)};

export function LeafleftExampleTool () {
  return (

  <MainContent key='LeafleftExampleTool'
    title='Leaflet Example Tool' 
    breadcrumpToolsetLink='/leafletexample' 
    breadcrumpToolsetTitle='Leaflet Example Tool'
    mainComponent= 
    {<LeafletExample />}
  />
)};
export function NotificationsDisplayTool () {
  return (

  <MainContent key='NotificationsDisplayTool'
    title='Notifications Display Tool' 
    breadcrumpToolsetLink='/notifications' 
    breadcrumpToolsetTitle='Notifications Display Tool'
    mainComponent= 
    {<NotificationsDisplay 
      API_URL={'https://communicationmonitor.cn.ntua.gr:5000/kafkatorest'} 
      autoRefreshEnabled={false} 
      refreshInterval={10000}/>}
  />
)};

export function NewNotificationsDisplayTool (autoRefreshEnabled) {
  return (

  <MainContent key='NewNotificationsDisplayTool'
    title='New Notifications Display Tool' 
    breadcrumpToolsetLink='/newnotifications' 
    breadcrumpToolsetTitle='New Notifications Display Tool'
    mainComponent= 
    {<NewNotificationsDisplay 
      API_URL={'https://communicationmonitor.cn.ntua.gr:5000/kafkatorest'} 
      autoRefreshEnabled={autoRefreshEnabled} 
    />}
  />
)};

export function TotalOrdersTool () {
  return (

  <MainContent key='TotalOrdersTool'
    title='Total Orders Tool' 
    breadcrumpToolsetLink='/immutableaudittrail' 
    breadcrumpToolsetTitle='Immutable Audit Trail'
    breadcrumpToolLink='/totalorders'
    breadcrumpToolTitle='Total Orders Tool'
    mainComponent= 
    {<NewDataDisplay API_URL={ENDPOINTS.totalorders.url} headerText={ENDPOINTS.totalorders.pageTitle}/>}
  />
)};

export function ETLComponentTool () {
  return (
    <MainContent key='ETLComponentTool'
    title='ETL Component Tool' 
    breadcrumpToolsetLink='/iframeintegration' 
    breadcrumpToolsetTitle='iFrame Integration'
    breadcrumpToolLink='/etlcomponent'
    breadcrumpToolTitle='ETL Component Tool'
    mainComponent= {<CustomIFrame API_URL='https://cndevs.cn.ntua.gr:9000'/>}
  />
)};

export function CustomIFrameTool () {
  return (
    <MainContent key='CustomIFrameTool'
    title='Custom IFrame' 
    breadcrumpToolsetLink='/iframeintegration' 
    breadcrumpToolsetTitle='iFrame Integration'
    breadcrumpToolLink='/customiframe'
    breadcrumpToolTitle='Custom iFrame'
    mainComponent= {<IFrameTest/>}
  />
)};