import React from 'react';
import * as RiIcons from 'react-icons/ri';
import { FaBezierCurve, FaCog, FaQuestion, FaUpload, FaWindowRestore, FaBug, FaExclamationTriangle, FaChromecast} from "react-icons/fa";
import { SiDynamics365 } from 'react-icons/si';

const visualizationToolset = {
  title: 'Visualization Toolset',
  icon: <FaBezierCurve />,
  iconAlt: "visualization toolset",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,

  subNav: [
    {
      title: 'Transactions Depiction',
      pageTitle: 'Transactions Depiction',
      path: '/transactionsdepiction'
    },
    {
      title: 'Sensors Depiction',
      pageTitle: 'Sensors Depiction',
      path: '/sensorsdepiction'
    },
    {
      title: 'Visualize Distances',
      pageTitle: 'Visualize Distances',
      path: '/',
      externalPath: 'https://communicationmonitor.cn.ntua.gr:5000/visualizedistances'
    },
    {
      title: 'Visualize Transactions',
      pageTitle: 'Visualize Transactions',
      externalPath: 'https://communicationmonitor.cn.ntua.gr:5000/visualizetransactions'
    },
    {
      title: 'Visualize Drive Tampering',
      pageTitle: 'Visualize Drive Tampering',
      externalPath: 'https://communicationmonitor.cn.ntua.gr:5000/visualizedrivertampering'
    },
    {
      title: 'Transactions Graph',
      pageTitle: 'Transactions Graph',
      externalPath: 'https://communicationmonitor.cn.ntua.gr:5000/transactionsgraph'
    },
    {
      title: 'Abnormal Graph',
      pageTitle: 'Abnormal Graph',
      externalPath: 'https://communicationmonitor.cn.ntua.gr:5000/abnormalgraph'
    },
  ]
};

const fusionToolset = {
  title: 'Fusion Toolset',
  icon: <FaCog />,
  iconAlt: "fusion toolset",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,

  subNav: [
    {
      title: 'Abnormal Detection',
      pageTitle: 'Abnormal Detection',
      path: '/abnormaldetection'
    },
    {
      title: 'Driver Tampering',
      pageTitle: 'Driver ID Tampering',
      path: '/drivertampering'
    },
    {
      title: 'Driver Tampering Details',
      pageTitle: 'Driver ID Tampering Details',
      path: '/drivertamperingdetails'
    }
  ]
};

const advancedReasonerToolset = {
  title: 'Advanced Reasoner Toolset',
  icon: <FaQuestion />,
  iconAlt: "Advanced Reasoner Toolset",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,

  subNav: [
    {
      title: 'Suspicious Transactions',
      pageTitle: 'Suspicious Transactions',
      path: '/reasoning1'
    },
    {
      title: 'Suspicious Combinations',
      pageTitle: 'Suspicious Transacations in Combinations with Unknown Sources',
      path: '/reasoning2'
    },
    {
      title: 'GSM & Antenna Status',
      pageTitle: 'GSM Jammed & Antenna Removal Status',
      path: '/reasoning3'
    },
    {
      title: 'Driver GPS Deviations',
      pageTitle: 'Driver & Truck GPS Trackers Deviations',
      path: '/reasoning4'
    },
    {
      title: 'GPS Deviations Detection',
      pageTitle: 'Alerts Detection Based on the Driver & Truck GPS Trackers Deviations',
      path: '/reasoning5'
    },
    {
      title: 'Asset GPS Deviations',
      pageTitle: 'Asset & Truck GPS Trackers Deviations',
      path: '/reasoning4b'
    },
    {
      title: 'Packet Theft Detection',
      pageTitle: 'Packet Theft Detection',
      path: '/reasoning5b'
    },
    {
      title: 'Door & Temp Status',
      pageTitle: 'Door & Temperature Status',
      path: '/reasoning6'
    },
    {
      title: 'Broken Door Status',
      pageTitle: 'Broken Door Status',
      path: '/reasoning7'
    }
  ]
};

const threadAndIncidentToolset = {
  title: 'Threat and Incident Complex Event Toolset',
  icon: <FaBug />,
  iconAlt: "Threat and Incident Complex Event Toolset",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/threatandincident',
  pageTitle: 'Threat and Incident Complex Event Toolset'
};

const alertLoggerToolset = {
  title: 'Alert Logger',
  icon: <FaExclamationTriangle />,
  iconAlt: "Alert Logger",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/alertlogger',
  pageTitle: 'Alert Logger'
};

const immutableAuditTrailToolset = {
  title: 'Immutable Audit Trail',
  icon: <SiDynamics365/>,
  iconAlt: 'Immutable Audio Trail',
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/immutableaudittrail',
  pageTitle: 'Immutable Audit Trail',

  subNav: [
    {
      title: 'Total Orders',
      pageTitle: 'Total Orders',
      path: '/totalorders'
    },
    {
      title: 'Order Track',
      pageTitle: 'Order Track',
      path: '/ordertrack'
    }
  ]
};

const iFrameIntegration = {
  title: 'iFrame Integration',
  icon: <FaChromecast/>,
  iconAlt: 'iFrame Integration',
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/iframeintegration',
  pageTitle: 'iFrame Integration',

  subNav: [
    {
      title: 'ETL Component',
      pageTitle: 'ETL Component',
      path: '/etlcomponent',
      icon: <FaUpload/>
    },
    {
      title: 'Custom iFrame',
      pageTitle: 'Custom iFrame',
      path: '/customiframe',
      icon: <FaWindowRestore/>
    }
  ]
}

const dynamicApiExperiment = {
  title: 'Dynamic API',
  icon: <SiDynamics365 />,
  iconAlt: "Dynamic API",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/dynamicapi',
  pageTitle: 'Dynamic API'
};

const orderTrackExperiment = {
  title: 'Order Track',
  icon: <SiDynamics365 />,
  iconAlt: "Order Track",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/ordertrack',
  pageTitle: 'Order Track'
};



const uploadFileTestExperiment = {
  title: 'Upload File Test',
  icon: <SiDynamics365 />,
  iconAlt: "Upload File Test",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/uploadfiletest',
  pageTitle: 'Upload File Test'
};
const dataVisualizationExperiment = {
  title: 'Data Visualization',
  icon: <SiDynamics365 />,
  iconAlt: "Data Visualization",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/datavisualization',
  pageTitle: 'Data Visualization'
};
const iFrameTestExperiment = {
  title: 'iFrame Test',
  icon: <SiDynamics365 />,
  iconAlt: "iFrame Test",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/iframetest',
  pageTitle: 'iFrame Test'
};
const complexDataVisualizationExperiment = {
  title: 'Complex Data Visualization',
  icon: <SiDynamics365 />,
  iconAlt: "Complex Data Visualization",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/complexdatavisualization',
  pageTitle: 'Complex Data Visualization'
};
const LeafletExampleExperiment = {
  title: 'Leaflet Example',
  icon: <SiDynamics365 />,
  iconAlt: "Leaflet Example",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/leafletexample',
  pageTitle: 'Leaflet Example'
}
const NotificationsDisplay = {
  title: 'Notifications Display',
  icon: <SiDynamics365 />,
  iconAlt: "Notifications Display",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/notifications',
  pageTitle: 'Notifications Display'
}
const NewNotificationsDisplay = {
  title: 'New Notifications Display',
  icon: <SiDynamics365 />,
  iconAlt: "New Notifications Display",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/newnotifications',
  pageTitle: 'New Notifications Display'
}
export const AdminSidebarData = [
  visualizationToolset,
  fusionToolset,
  advancedReasonerToolset,
  threadAndIncidentToolset,
  alertLoggerToolset,
  immutableAuditTrailToolset,
  iFrameIntegration
];
export const ExperimentsSidebarData = [
  dynamicApiExperiment,
  orderTrackExperiment,
  uploadFileTestExperiment,
  dataVisualizationExperiment,
  iFrameTestExperiment,
  complexDataVisualizationExperiment,
  LeafletExampleExperiment,
  NotificationsDisplay,
  NewNotificationsDisplay
];
