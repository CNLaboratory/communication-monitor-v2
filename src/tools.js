import React from 'react';
import { MainContent } from './main-content';
import NewDataDisplay from './new-data-display';
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
import GeneralSettings from './settings-general';
import { Container, Row, Col } from 'react-bootstrap';
import { visualizationToolset, fusionToolset, advancedReasonerToolset, threadAndIncidentToolset, immutableAuditTrailToolset, iFrameIntegration } from './components/NavBar/sidebarData';
import * as S from './styles';

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

export function TransactionsMonitor (settingsObject) { 
  console.log('transactionsmonitor tool - settingsObject.settings:', settingsObject.settings);
  return(
    
  <MainContent key='transactionsmonitor'
    title='Transactions Depiction' 
    breadcrumpToolsetLink='/visualizationtoolset' 
    breadcrumpToolsetTitle='Visualization Toolset'
    breadcrumpToolLink='/transactionsdepiction'
    breadcrumpToolTitle='Transactions Monitor'
    mainComponent= 
    {<NewDataDisplay 
      API_URL={ENDPOINTS.transactionsdepiction.url} 
      settings={settingsObject.settings}
      />}
  />);

};

export function SensorsDepiction (settingsObject) { 
  return (
  <MainContent key='SensorsDepiction'
    title='Sensors Depiction' 
    breadcrumpToolsetLink='/visualizationtoolset' 
    breadcrumpToolsetTitle='Visualization Toolset'
    breadcrumpToolLink='/sensorsdepiction'
    breadcrumpToolTitle='Sensors Depiction'
    mainComponent= {<NewDataDisplay 
      API_URL={ENDPOINTS.sensorsdepiction.url}
      settings={settingsObject.settings}/>}
  />);
};

export function AbnormalDetection (settingsObject) { 
return (

  <MainContent key='AbnormalDetection'
    title='Abnormal Detection' 
    breadcrumpToolsetLink='/fusiontoolset' 
    breadcrumpToolsetTitle='Fusion Toolset'
    breadcrumpToolLink='/abnormaldetection'
    breadcrumpToolTitle='Abnormal Detection'
    mainComponent= {<NewDataDisplay 
      API_URL={ENDPOINTS.abnormaldetection.url} 
      settings={settingsObject.settings}
      />}
  />
);
}

export function DriverTampering (settingsObject) {
  return (
  <MainContent key='DriverTampering'
    title='Driver Tampering' 
    breadcrumpToolsetLink='/fusiontoolset' 
    breadcrumpToolsetTitle='Fusion Toolset'
    breadcrumpToolLink='/drivertampering'
    breadcrumpToolTitle='Driver Tampering'
    mainComponent= {<NewDataDisplay 
      API_URL={ENDPOINTS.drivertampering.url} 
      settings={settingsObject.settings}
      />}
  />);
};

export function DriverTamperingDetails (settingsObject) {
  return(
  <MainContent key='DriverTamperingDetails'
    title='Driver ID Tampering Details' 
    breadcrumpToolsetLink='/fusiontoolset' 
    breadcrumpToolsetTitle='Fusion Toolset'
    breadcrumpToolLink='/drivertamperingdetails'
    breadcrumpToolTitle='Driver Tampering Details'
    mainComponent= {<NewDataDisplay 
      API_URL={ENDPOINTS.drivertamperingdetails.url} 
      settings={settingsObject.settings}
      />}
  />)
};

export function Reasoning1 (settingsObject) { 
  return (
  <MainContent key='Reasoning1'
    title='Suspicious Transactions' 
    breadcrumpToolsetLink='/advancedreasonertoolset' 
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    breadcrumpToolLink='/reasoning1'
    breadcrumpToolTitle='Suspicious Transactions'
    mainComponent= {<NewDataDisplay 
      API_URL={ENDPOINTS.reasoning1.url} 
      settings={settingsObject.settings}
      />}
  />);};

export function Reasoning2 (settingsObject) {
  return (
  <MainContent key='Reasoning2'
    title='Suspicious Transacations in Combinations with Unknown Sources' 
    breadcrumpToolsetLink='/advancedreasonertoolset' 
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    breadcrumpToolLink='/reasoning2'
    breadcrumpToolTitle='Suspicious Combinations'
    mainComponent= {<NewDataDisplay 
      API_URL={ENDPOINTS.reasoning2.url} 
      settings={settingsObject.settings}
      />}
  />);};

export function Reasoning3 (settingsObject) {
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
        settings={settingsObject.settings}
        />}
  />
)};

export function Reasoning4 (settingsObject) {
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
        settings={settingsObject.settings}
        />}
  />
)};
export function Reasoning4b (settingsObject) {
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
        settings={settingsObject.settings}
        />}
  />
)};


export function Reasoning5 (settingsObject) {
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
        settings={settingsObject.settings}
        />}
  />
)};

export function Reasoning5b (settingsObject) {
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
        settings={settingsObject.settings}
        />}
  />
)};

export function Reasoning6 (settingsObject) {
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
        settings={settingsObject.settings}
        />}
  />
)};

export function Reasoning7(settingsObject) {
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
        settings={settingsObject.settings}
        />}
  />
)};

export function ThreatAndIncidentToolset(settingsObject) {
  return (

  <MainContent key='ThreatAndIncidentToolset'
    title='Threat and Incident Complex Event Toolset' 
    breadcrumpToolsetLink='/threatandincident' 
    breadcrumpToolsetTitle='Threat and Incident Complex Event Toolset'
    mainComponent= 
    {<NewDataDisplay 
        API_URL={ENDPOINTS.threatandincident.url} 
        settings={settingsObject.settings}
        />}
  />
)};

export function AlertLoggerToolset(settingsObject) {
  return (

  <MainContent key='AlertLoggerToolset'
    title='Alert Logger' 
    breadcrumpToolsetLink='/alertlogger' 
    breadcrumpToolsetTitle='Alert Logger'
    mainComponent= 
    {<NewDataDisplay 
        API_URL={ENDPOINTS.alertlogger.url} 
        settings={settingsObject.settings}
        />}
  />
)};

export function DynamicApiExperiment(settingsObject) {
  return (

  <MainContent key='DynamicApiExperiment'
    title='Dynamic API' 
    breadcrumpToolsetLink='/dynamicapi' 
    breadcrumpToolsetTitle='Dynamic API'
    mainComponent= 
    {<NewDynamicAPI settings={settingsObject.settings}/>}
  />
)};

export function OrderTrackExperiment(settingsObject) {
  return (

  <MainContent key='OrderTrackExperiment'
    title='Order Track' 
    breadcrumpToolsetLink='/ordertrack' 
    breadcrumpToolsetTitle='Order Track'
    mainComponent= 
    {<OrderTrack settings={settingsObject.settings}/>}
  />
)};

export function UploadFileTestExperiment(settingsObject) {
  return (

  <MainContent key='UploadFileTestExperiment'
    title='Dynamic API' 
    breadcrumpToolsetLink='/dynamicapi' 
    breadcrumpToolsetTitle='Dynamic API'
    mainComponent= 
    {<UploadFile settings={settingsObject.settings}/>}
  />
)};


export function DataVisualizationExperiment (settingsObject) {
  return (

  <MainContent key='DataVisualizationExperiment'
    title='Data Visualization' 
    breadcrumpToolsetLink='/datavisualization' 
    breadcrumpToolsetTitle='Data Visualization'
    mainComponent= 
    {<DataVisualization settings={settingsObject.settings}/>}
  />
)};


export function IFrameTestExperiment (settingsObject) {
  return (

  <MainContent key='IFrameTestExperiment'
    title='iFrame Test' 
    breadcrumpToolsetLink='/iframetest' 
    breadcrumpToolsetTitle='iFrame Test'
    mainComponent= 
    {<IFrameTest settings={settingsObject.settings}/>}
  />
)};

export function UserManagementTool (settingsObject) {
  return (

  <MainContent key='UserManagementTool'
    title='User Management' 
    breadcrumpToolsetLink='/usermanagement' 
    breadcrumpToolsetTitle='User Management'
    mainComponent= 
    {<UserManagement settings={settingsObject.settings}/>}
  />
)};

export function ComplexDataVisualizationTool (settingsObject) {
  return (

  <MainContent key='ComplexDataVisualizationTool'
    title='Complex Data Visualization' 
    breadcrumpToolsetLink='/complexdatavisualization' 
    breadcrumpToolsetTitle='Complex Data Visualization'
    mainComponent= 
    {<ComplexDataVisualization settings={settingsObject.settings}/>}
  />
)};

export function LeafleftExampleTool (settingsObject) {
  return (

  <MainContent key='LeafleftExampleTool'
    title='Leaflet Example Tool' 
    breadcrumpToolsetLink='/leafletexample' 
    breadcrumpToolsetTitle='Leaflet Example Tool'
    mainComponent= 
    {<LeafletExample settings={settingsObject.settings}/>}
  />
)};
export function NotificationsDisplayTool (settingsObject) {
  return (

  <MainContent key='NotificationsDisplayTool'
    title='Notifications Display Tool' 
    breadcrumpToolsetLink='/notifications' 
    breadcrumpToolsetTitle='Notifications Display Tool'
    mainComponent= 
    {<NotificationsDisplay 
      API_URL={'https://communicationmonitor.cn.ntua.gr:5000/kafkatorest'} 
      autoRefreshEnabled={false} 
      refreshInterval={10000}
      settings={settingsObject.settings}
      />}
  />
)};

export function NewNotificationsDisplayTool (autoRefreshEnabled, settingsObject) {
  return (

  <MainContent key='NewNotificationsDisplayTool'
    title='New Notifications Display Tool' 
    breadcrumpToolsetLink='/newnotifications' 
    breadcrumpToolsetTitle='New Notifications Display Tool'
    mainComponent= 
    {<NewNotificationsDisplay 
      API_URL={'https://communicationmonitor.cn.ntua.gr:5000/kafkatorest'} 
      autoRefreshEnabled={autoRefreshEnabled} 
      settings={settingsObject.settings}
    />}
  />
)};

export function TotalOrdersTool (settingsObject) {
  return (

  <MainContent key='TotalOrdersTool'
    title='Total Orders Tool' 
    breadcrumpToolsetLink='/immutableaudittrail' 
    breadcrumpToolsetTitle='Immutable Audit Trail'
    breadcrumpToolLink='/totalorders'
    breadcrumpToolTitle='Total Orders Tool'
    mainComponent= 
    {<NewDataDisplay 
      API_URL={ENDPOINTS.totalorders.url} 
      settings={settingsObject.settings}
      />}
  />
)};

export function ETLComponentTool (settingsObject) {
  return (
    <MainContent key='ETLComponentTool'
    title='ETL Component Tool' 
    breadcrumpToolsetLink='/iframeintegration' 
    breadcrumpToolsetTitle='iFrame Integration'
    breadcrumpToolLink='/etlcomponent'
    breadcrumpToolTitle='ETL Component Tool'
    mainComponent= {<CustomIFrame 
      API_URL='https://cndevs.cn.ntua.gr:9000'
      settings={settingsObject.settings}
      />}
  />
)};

export function CustomIFrameTool (settingsObject) {
  return (
    <MainContent key='CustomIFrameTool'
    title='Custom IFrame' 
    breadcrumpToolsetLink='/iframeintegration' 
    breadcrumpToolsetTitle='iFrame Integration'
    breadcrumpToolLink='/customiframe'
    breadcrumpToolTitle='Custom iFrame'
    mainComponent= {<IFrameTest settings={settingsObject.settings}/>}
  />
)};

export function GeneralSettingsTool (settingsObject) {
  return (
    <MainContent key='Settings'
    title='Settings' 
    breadcrumpToolsetLink='/settings' 
    breadcrumpToolsetTitle='Settings'
    mainComponent= {<GeneralSettings settings={settingsObject.settings}/>}
  />
)};
export function VisualizationToolset () {
  return(
    <MainContent key='visualizationtoolset'
    title='Visualization Toolset'
    breadcrumpToolsetLink='/visualizationtoolset'
    breadcrumpToolsetTitle='Visualization Toolset'
    mainComponent= {
      <S.Card>
        <S.CardBody>
          <S.MediumWidthDiv>
            <h4 style={{textAlign:'center'}}>Tools from the {visualizationToolset.title}</h4>
            <S.FlexCenterDirColumnDiv>  
              {visualizationToolset.subNav.map((tool, index) => (
                <S.MainComponentRouteLink to={tool.path}>{tool.pageTitle}</S.MainComponentRouteLink>
              ))}
            </S.FlexCenterDirColumnDiv>
          </S.MediumWidthDiv>
        </S.CardBody>
      </S.Card>
    }
  />        
  )
}
export function FusionToolset () {
  return(
    <MainContent key='fusiontoolset'
    title='Fusion Toolset'
    breadcrumpToolsetLink='/fusiontoolset'
    breadcrumpToolsetTitle='Fusion Toolset'
    mainComponent= {
      <S.Card>
        <S.CardBody>
          <S.MediumWidthDiv>
            <h4 style={{textAlign:'center'}}>Tools from the {fusionToolset.title}</h4>
            <S.FlexCenterDirColumnDiv>  
              {fusionToolset.subNav.map((tool, index) => (
                <S.MainComponentRouteLink to={tool.path}>{tool.pageTitle}</S.MainComponentRouteLink>
              ))}
            </S.FlexCenterDirColumnDiv>
          </S.MediumWidthDiv>
        </S.CardBody>
      </S.Card>
    }
  />        
  )
}
export function AdvancedReasonerToolset () {
  return(
    <MainContent key='advancedreasonertoolset'
    title='Advanced Reasoner Toolset'
    breadcrumpToolsetLink='/advancedreasonertoolset'
    breadcrumpToolsetTitle='Advanced Reasoner Toolset'
    mainComponent= {
      <S.Card>
        <S.CardBody>
          <S.MediumWidthDiv>
            <h4 style={{textAlign:'center'}}>Tools from the {advancedReasonerToolset.title}</h4>
            <S.FlexCenterDirColumnDiv>  
              {advancedReasonerToolset.subNav.map((tool, index) => (
                <S.MainComponentRouteLink to={tool.path}>{tool.pageTitle}</S.MainComponentRouteLink>
              ))}
            </S.FlexCenterDirColumnDiv>
          </S.MediumWidthDiv>
        </S.CardBody>
      </S.Card>
    }
  />        
  )
}
export function ImmutableAuditTrailToolset () {
  return(
    <MainContent key='immutableaudittrail'
    title='Immutable Audit Trail Toolset'
    breadcrumpToolsetLink='/immutableaudittrail'
    breadcrumpToolsetTitle='Immutable Audit Trail Toolset'
    mainComponent= {
      <S.Card>
        <S.CardBody>
          <S.MediumWidthDiv>
            <h4 style={{textAlign:'center'}}>Tools from the {immutableAuditTrailToolset.title}</h4>
            <S.FlexCenterDirColumnDiv>  
              {immutableAuditTrailToolset.subNav.map((tool, index) => (
                <S.MainComponentRouteLink to={tool.path}>{tool.pageTitle}</S.MainComponentRouteLink>
              ))}
            </S.FlexCenterDirColumnDiv>
          </S.MediumWidthDiv>
        </S.CardBody>
      </S.Card>
    }
  />        
  )
}
export function IFrameIntegrationToolset () {
  return(
    <MainContent key='iframeintegration'
    title='iFrame Integration Toolset'
    breadcrumpToolsetLink='/iframeintegration'
    breadcrumpToolsetTitle='iFrame Integration Toolset'
    mainComponent= {
      <S.Card>
        <S.CardBody>
          <S.MediumWidthDiv>
            <h4 style={{textAlign:'center'}}>Tools from the {iFrameIntegration.title}</h4>
            <S.FlexCenterDirColumnDiv>  
              {iFrameIntegration.subNav.map((tool, index) => (
                <S.MainComponentRouteLink to={tool.path}>{tool.pageTitle}</S.MainComponentRouteLink>
              ))}
            </S.FlexCenterDirColumnDiv>
          </S.MediumWidthDiv>
        </S.CardBody>
      </S.Card>
    }
  />        
  )
}