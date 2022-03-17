const user1 = {
  firstName: "Christos1",
  lastName: "Baloukas1",
  username: "chris1",
  password: "pass1",
  email: "email1",
  phonenumber: "1234323451",
  disabled: "NO"
};
const user2 = {
  firstName: "Christos2",
  lastName: "Baloukas2",
  username: "chris2",
  password: "pass2",
  email: "email2",
  phonenumber: "1234323452",
  disabled: "NO"
};
const user3 = {
  firstName: "Christos2",
  lastName: "Baloukas2",
  username: "chris3",
  password: "pass3",
  email: "email3",
  phonenumber: "1234323453",
  disabled: "NO"
};
export const users = [user1, user2, user3];

export const dataExample1 = 
[
    {"web-app": {
        "servlet": [   
          {
            "servlet-name": "cofaxCDS",
            "servlet-class": "org.cofax.cds.CDSServlet",
            "init-param": {
              "configGlossary:installationAt": "Philadelphia, PA",
              "configGlossary:adminEmail": "ksm@pobox.com",
              "configGlossary:poweredBy": "Cofax",
              "configGlossary:poweredByIcon": "/images/cofax.gif",
              "configGlossary:staticPath": "/content/static",
              "templateProcessorClass": "org.cofax.WysiwygTemplate",
              "templateLoaderClass": "org.cofax.FilesTemplateLoader",
              "templatePath": "templates",
              "templateOverridePath": "",
              "defaultListTemplate": "listTemplate.htm",
              "defaultFileTemplate": "articleTemplate.htm",
              "useJSP": false,
              "jspListTemplate": "listTemplate.jsp",
              "jspFileTemplate": "articleTemplate.jsp",
              "cachePackageTagsTrack": 200,
              "cachePackageTagsStore": 200,
              "cachePackageTagsRefresh": 60,
              "cacheTemplatesTrack": 100,
              "cacheTemplatesStore": 50,
              "cacheTemplatesRefresh": 15,
              "cachePagesTrack": 200,
              "cachePagesStore": 100,
              "cachePagesRefresh": 10,
              "cachePagesDirtyRead": 10,
              "searchEngineListTemplate": "forSearchEnginesList.htm",
              "searchEngineFileTemplate": "forSearchEngines.htm",
              "searchEngineRobotsDb": "WEB-INF/robots.db",
              "useDataStore": true,
              "dataStoreClass": "org.cofax.SqlDataStore",
              "redirectionClass": "org.cofax.SqlRedirection",
              "dataStoreName": "cofax",
              "dataStoreDriver": "com.microsoft.jdbc.sqlserver.SQLServerDriver",
              "dataStoreUrl": "jdbc:microsoft:sqlserver://LOCALHOST:1433;DatabaseName=goon",
              "dataStoreUser": "sa",
              "dataStorePassword": "dataStoreTestQuery",
              "dataStoreTestQuery": "SET NOCOUNT ON;select test='test';",
              "dataStoreLogFile": "/usr/local/tomcat/logs/datastore.log",
              "dataStoreInitConns": 10,
              "dataStoreMaxConns": 100,
              "dataStoreConnUsageLimit": 100,
              "dataStoreLogLevel": "debug",
              "maxUrlLength": 500}},
          {
            "servlet-name": "cofaxEmail",
            "servlet-class": "org.cofax.cds.EmailServlet",
            "init-param": {
            "mailHost": "mail1",
            "mailHostOverride": "mail2"}},
          {
            "servlet-name": "cofaxAdmin",
            "servlet-class": "org.cofax.cds.AdminServlet"},
       
          {
            "servlet-name": "fileServlet",
            "servlet-class": "org.cofax.cds.FileServlet"},
          {
            "servlet-name": "cofaxTools",
            "servlet-class": "org.cofax.cms.CofaxToolsServlet",
            "init-param": {
              "templatePath": "toolstemplates/",
              "log": 1,
              "logLocation": "/usr/local/tomcat/logs/CofaxTools.log",
              "logMaxSize": "",
              "dataLog": 1,
              "dataLogLocation": "/usr/local/tomcat/logs/dataLog.log",
              "dataLogMaxSize": "",
              "removePageCache": "/content/admin/remove?cache=pages&id=",
              "removeTemplateCache": "/content/admin/remove?cache=templates&id=",
              "fileTransferFolder": "/usr/local/tomcat/webapps/content/fileTransferFolder",
              "lookInContext": 1,
              "adminGroupID": 4,
              "betaServer": true}
            }
        ],
        "servlet-mapping": {
          "cofaxCDS": "/",
          "cofaxEmail": "/cofaxutil/aemail/*",
          "cofaxAdmin": "/admin/*",
          "fileServlet": "/static/*",
          "cofaxTools": "/tools/*"},
       
        "taglib": {
          "taglib-uri": "cofax.tld",
          "taglib-location": "/WEB-INF/tlds/cofax.tld"
          }
        }
    },
    {"react-app": {
        "servlet": [   
          {
            "servlet-name": "cofaxCDS",
            "servlet-class": "org.cofax.cds.CDSServlet",
            "init-param": {
              "configGlossary:installationAt": "Philadelphia, PA",
              "configGlossary:adminEmail": "ksm@pobox.com",
              "configGlossary:poweredBy": "Cofax",
              "configGlossary:poweredByIcon": "/images/cofax.gif",
              "configGlossary:staticPath": "/content/static",
              "templateProcessorClass": "org.cofax.WysiwygTemplate",
              "templateLoaderClass": "org.cofax.FilesTemplateLoader",
              "templatePath": "templates",
              "templateOverridePath": "",
              "defaultListTemplate": "listTemplate.htm",
              "defaultFileTemplate": "articleTemplate.htm",
              "useJSP": false,
              "jspListTemplate": "listTemplate.jsp",
              "jspFileTemplate": "articleTemplate.jsp",
              "cachePackageTagsTrack": 200,
              "cachePackageTagsStore": 200,
              "cachePackageTagsRefresh": 60,
              "cacheTemplatesTrack": 100,
              "cacheTemplatesStore": 50,
              "cacheTemplatesRefresh": 15,
              "cachePagesTrack": 200,
              "cachePagesStore": 100,
              "cachePagesRefresh": 10,
              "cachePagesDirtyRead": 10,
              "searchEngineListTemplate": "forSearchEnginesList.htm",
              "searchEngineFileTemplate": "forSearchEngines.htm",
              "searchEngineRobotsDb": "WEB-INF/robots.db",
              "useDataStore": true,
              "dataStoreClass": "org.cofax.SqlDataStore",
              "redirectionClass": "org.cofax.SqlRedirection",
              "dataStoreName": "cofax",
              "dataStoreDriver": "com.microsoft.jdbc.sqlserver.SQLServerDriver",
              "dataStoreUrl": "jdbc:microsoft:sqlserver://LOCALHOST:1433;DatabaseName=goon",
              "dataStoreUser": "sa",
              "dataStorePassword": "dataStoreTestQuery",
              "dataStoreTestQuery": "SET NOCOUNT ON;select test='test';",
              "dataStoreLogFile": "/usr/local/tomcat/logs/datastore.log",
              "dataStoreInitConns": 10,
              "dataStoreMaxConns": 100,
              "dataStoreConnUsageLimit": 100,
              "dataStoreLogLevel": "debug",
              "maxUrlLength": 500}},
          {
            "servlet-name": "cofaxEmail",
            "servlet-class": "org.cofax.cds.EmailServlet",
            "init-param": {
            "mailHost": "mail1",
            "mailHostOverride": "mail2"}},
          {
            "servlet-name": "cofaxAdmin",
            "servlet-class": "org.cofax.cds.AdminServlet"},
       
          {
            "servlet-name": "fileServlet",
            "servlet-class": "org.cofax.cds.FileServlet"},
          {
            "servlet-name": "cofaxTools",
            "servlet-class": "org.cofax.cms.CofaxToolsServlet",
            "init-param": {
              "templatePath": "toolstemplates/",
              "log": 1,
              "logLocation": "/usr/local/tomcat/logs/CofaxTools.log",
              "logMaxSize": "",
              "dataLog": 1,
              "dataLogLocation": "/usr/local/tomcat/logs/dataLog.log",
              "dataLogMaxSize": "",
              "removePageCache": "/content/admin/remove?cache=pages&id=",
              "removeTemplateCache": "/content/admin/remove?cache=templates&id=",
              "fileTransferFolder": "/usr/local/tomcat/webapps/content/fileTransferFolder",
              "lookInContext": 1,
              "adminGroupID": 4,
              "betaServer": true}
            }
        ],
        "servlet-mapping": {
          "cofaxCDS": "/",
          "cofaxEmail": "/cofaxutil/aemail/*",
          "cofaxAdmin": "/admin/*",
          "fileServlet": "/static/*",
          "cofaxTools": "/tools/*"},
       
        "taglib": {
          "taglib-uri": "cofax.tld",
          "taglib-location": "/WEB-INF/tlds/cofax.tld"
          }
        }
    },
    {"linux-app": {
        "servlet": [   
          {
            "servlet-name": "cofaxCDS",
            "servlet-class": "org.cofax.cds.CDSServlet",
            "init-param": {
              "configGlossary:installationAt": "Philadelphia, PA",
              "configGlossary:adminEmail": "ksm@pobox.com",
              "configGlossary:poweredBy": "Cofax",
              "configGlossary:poweredByIcon": "/images/cofax.gif",
              "configGlossary:staticPath": "/content/static",
              "templateProcessorClass": "org.cofax.WysiwygTemplate",
              "templateLoaderClass": "org.cofax.FilesTemplateLoader",
              "templatePath": "templates",
              "templateOverridePath": "",
              "defaultListTemplate": "listTemplate.htm",
              "defaultFileTemplate": "articleTemplate.htm",
              "useJSP": false,
              "jspListTemplate": "listTemplate.jsp",
              "jspFileTemplate": "articleTemplate.jsp",
              "cachePackageTagsTrack": 200,
              "cachePackageTagsStore": 200,
              "cachePackageTagsRefresh": 60,
              "cacheTemplatesTrack": 100,
              "cacheTemplatesStore": 50,
              "cacheTemplatesRefresh": 15,
              "cachePagesTrack": 200,
              "cachePagesStore": 100,
              "cachePagesRefresh": 10,
              "cachePagesDirtyRead": 10,
              "searchEngineListTemplate": "forSearchEnginesList.htm",
              "searchEngineFileTemplate": "forSearchEngines.htm",
              "searchEngineRobotsDb": "WEB-INF/robots.db",
              "useDataStore": true,
              "dataStoreClass": "org.cofax.SqlDataStore",
              "redirectionClass": "org.cofax.SqlRedirection",
              "dataStoreName": "cofax",
              "dataStoreDriver": "com.microsoft.jdbc.sqlserver.SQLServerDriver",
              "dataStoreUrl": "jdbc:microsoft:sqlserver://LOCALHOST:1433;DatabaseName=goon",
              "dataStoreUser": "sa",
              "dataStorePassword": "dataStoreTestQuery",
              "dataStoreTestQuery": "SET NOCOUNT ON;select test='test';",
              "dataStoreLogFile": "/usr/local/tomcat/logs/datastore.log",
              "dataStoreInitConns": 10,
              "dataStoreMaxConns": 100,
              "dataStoreConnUsageLimit": 100,
              "dataStoreLogLevel": "debug",
              "maxUrlLength": 500}},
          {
            "servlet-name": "cofaxEmail",
            "servlet-class": "org.cofax.cds.EmailServlet",
            "init-param": {
            "mailHost": "mail1",
            "mailHostOverride": "mail2"}},
          {
            "servlet-name": "cofaxAdmin",
            "servlet-class": "org.cofax.cds.AdminServlet"},
       
          {
            "servlet-name": "fileServlet",
            "servlet-class": "org.cofax.cds.FileServlet"},
          {
            "servlet-name": "cofaxTools",
            "servlet-class": "org.cofax.cms.CofaxToolsServlet",
            "init-param": {
              "templatePath": "toolstemplates/",
              "log": 1,
              "logLocation": "/usr/local/tomcat/logs/CofaxTools.log",
              "logMaxSize": "",
              "dataLog": 1,
              "dataLogLocation": "/usr/local/tomcat/logs/dataLog.log",
              "dataLogMaxSize": "",
              "removePageCache": "/content/admin/remove?cache=pages&id=",
              "removeTemplateCache": "/content/admin/remove?cache=templates&id=",
              "fileTransferFolder": "/usr/local/tomcat/webapps/content/fileTransferFolder",
              "lookInContext": 1,
              "adminGroupID": 4,
              "betaServer": true}
            }
        ],
        "servlet-mapping": {
          "cofaxCDS": "/",
          "cofaxEmail": "/cofaxutil/aemail/*",
          "cofaxAdmin": "/admin/*",
          "fileServlet": "/static/*",
          "cofaxTools": "/tools/*"},
       
        "taglib": {
          "taglib-uri": "cofax.tld",
          "taglib-location": "/WEB-INF/tlds/cofax.tld"
          }
        }
    }
]

export const nestedDataExample2 = [
    {
        "Alert_Issue": "It is observed a temperature difference in the asset tracker whilst the door is still closed and the truck is immobilized", 
        "asset_imei": "354018112257906", 
        "driveid": " XFGRJYHN1234MM", 
        "fleet_device_temp": 25.1, 
        "fridge_temp": 25.1, 
        "temp_diff": 0.0, 
        "timestamp": "2021-02-17T11:19:58",
        "truck_imei": "354018112257906", 
        "truck_plate": "XXX-809", 
        "truck_speed": 0,
        "servlet": [   
            {
              "servlet-name": "cofaxCDS",
              "servlet-class": "org.cofax.cds.CDSServlet"
            },
            {
              "servlet-name": "cofaxEmail",
              "servlet-class": "org.cofax.cds.EmailServlet"
            },
            {
              "servlet-name": "cofaxAdmin",
              "servlet-class": "org.cofax.cds.AdminServlet"
            },
            {
              "servlet-name": "fileServlet",
              "servlet-class": "org.cofax.cds.FileServlet"
            },
            {
              "servlet-name": "cofaxTools",
              "servlet-class": "org.cofax.cms.CofaxToolsServlet"  
            }
        ]
    },
    {
        "Alert_Issue": "It is observed a temperature difference in the asset tracker whilst the door is still closed and the truck is immobilized", 
        "asset_imei": "354018112257906", 
        "driveid": " XFGRJYHN1234MM", 
        "fleet_device_temp": 25.1, 
        "fridge_temp": 25.1, 
        "temp_diff": 0.0, 
        "timestamp": "2021-02-17T11:19:58",
        "truck_imei": "354018112257906", 
        "truck_plate": "XXX-809", 
        "truck_speed": 0
    }
];