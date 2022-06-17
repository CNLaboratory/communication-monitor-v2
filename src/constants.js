export const COLORS = {
  accepted: "#059669",
  rejected: "#B91C1C",
  pending: "#6366F1",
  interviewing: "#2563EB",
  total: "#D97706",
};

export const defaultSettings = {
  theme: 'dark',    //accepts 'dark' or 'light'
  notificationsFetchInterval: 30000, //for notifications refresh in milliseconds
  tableAutoRefreshInterval: 10000, //for axios operations in milliseconds 
  tableAutoRefreshEnabled: false,
  tableDensity: 'compact', //the default density for tables - compact/standard/comfortable
  tableColumnFiltersEnabled: false, //are column filters enabled by default in tables?
  tableRangeFiltersEnabled: false, //are range filters enabled by default in tables?
  tableStickyHeaderEnabled: true, //sticky header in tables
  tablePaginationEnabled: true, //pagination enabled in tables
  tableStrippedRows: true, //stripped rows in tables
  operationTimeOut: 20000, //timeout value for axios operations
  showExperiments: false //show experiments in sidebar or not
}


export const ENDPOINTS = {
  transactionsdepiction: { 
    url: "https://communicationmonitor.cn.ntua.gr:5000/transactionsdepiction",
  },
  sensorsdepiction: { 
    url: "https://communicationmonitor.cn.ntua.gr:5000/sensorsdepiction",
  },
  visualizedistances: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/visualizedistances",
  },
  visualizetransactions: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/visualizetransactions",
  },
  visualizedrivertampering: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/visualizedrivertampering",
  },
  transactionsgraph: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/transactionsgraph",
  },
  abnormalgraph: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/abnormalgraph",
  },
  abnormaldetection: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/abnormaldetection",
  },
  drivertampering: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/drivertampering",
  },
  drivertamperingdetails: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/drivertamperingdetails",
  },
  reasoning1: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/reasoning1",
  },
  reasoning2: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/reasoning2",
  },
  reasoning3: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/reasoning3",
  },
  reasoning4: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/reasoning4",  
  },
  reasoning4b: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/reasoning4b",
  },
  reasoning5: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/reasoning5",
  },
  reasoning5b: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/reasoning5b",
  },
  reasoning6: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/reasoning6",
  },
  reasoning7: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/reasoning7",
  },
  threatandincident: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/alertlogger",
  },
  alertlogger: {
    url: "https://communicationmonitor.cn.ntua.gr:5000/alertlogger",
  },
  ordertrack: {
    url: 'https://communicationmonitor.cn.ntua.gr:5000/evaluateorders?order=',
  },
  totalorders: {
    url: 'https://communicationmonitor.cn.ntua.gr:5000/allorders',
  }
}