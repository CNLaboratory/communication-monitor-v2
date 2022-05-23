<h3>Find the full documentation here: https://cndevs.cn.ntua.gr/docs/commonitor/ </h3>
<h3 id="client-app-setup">Client Application (React) Setup</h3>
      <ol>
        <li>Clone the react app repository from github with the following command:</li>
        <ul>
          <li><code>git clone https://github.com/cmpalouk/communication-monitor-v2.git</code></li>
        </ul>
        <li>Move to the root of the repository with:
          <ul>
            <li><code>cd communication-monitor-v2/</code></li>
          </ul>
        </li>
        <li>At the root of the repository install all required packages with npm:
          <ul>
            <li><code>npm install</code></li>
          </ul>
        </li>
        <li>Now, its time to setup the clien app and we will do that using some environmental variables. At the root of the repository create a .env file with:
          <ul>
            <li><code>nano .env</code></li>
          </ul>
        </li>
        <li>Inside the .env file we will configure the client app with a few environmental variables. The necessary variables depend on whether the node will run under https or just http. Therefore, we consider these two cases:
          <h5 class="mt-3">Non-SSL setup (for local host or http)</h5>
          <ul>
            <li><code>PORT</code> - the port that the react app will listen to.</li>
            <li><code>REACT_APP_NODE_SERVER_DOMAIN</code> - the domain the react app will be accessed from.</li>
            <li><code>REACT_APP_NODE_SERVER_PORT</code> - the port that the node server we setup previously listens to.</li>
            <li><code>REACT_APP_USING_HTTPS</code> - if the client app is running under https this should be set
              to 'true'.</li>
          </ul>
          <br>
          Here is an example .env file with referece values:
          <pre><code>
PORT=9090
REACT_APP_NODE_SERVER_DOMAIN='localhost'
REACT_APP_NODE_SERVER_PORT=8080
REACT_APP_USING_HTTPS=false
          </code></pre>
          <h5 class="mt-3">SSL setup (for https)</h5>
          If you setup your client app for https access you need to define some more environmental variables regarding the ssl certificate:
          <ul>
            <li><code>HTTPS</code> - this should be set to true for https access</li>
            <li><code>SSL_CRT_FILE</code> - the path to the ssl certificate file (usually fullchain.pem).</li>
            <li><code>SSL_KEY_FILE</code> - the path to the ssl certificate private key file (usually privkey.pem).</li>
            <li><code>HOST</code> - the domain that the client app will be accessed from.</li>
          </ul>
        </li>
        <br>
        Here is an example .env file with referece values for ssl setup:
          <pre><code>
PORT=9095
REACT_APP_NODE_SERVER_DOMAIN='cndevs.cn.ntua.gr'
REACT_APP_NODE_SERVER_PORT=8445
REACT_APP_USING_HTTPS=true

HTTPS=true
SSL_CRT_FILE='/etc/letsencrypt/live/cndevs.cn.ntua.gr/fullchain.pem'
SSL_KEY_FILE='/etc/letsencrypt/live/cndevs.cn.ntua.gr/privkey.pem'
HOST='cndevs.cn.ntua.gr'              
          </code></pre>
        <li>
          At this point you can start the client app by running:
          <ul>
            <li><code>npm start</code></li>
          </ul>
        </li>
        <li>
          Once the client app is running you can access the app from the domain you defined in the environmental 
          variable HOST and the port you defined in PORT like this:
          <ul>
            <li><code>http://HOST:PORT</code></li>
            <li><code>https://HOST:PORT</code></li>
          </ul>
          <br>
          As an example, for locahost and port 9095 youn access the react app from the following address:
          <ul>
            <li><code>http://localhost:9095</code></li>
          </ul>
          <br>
        <li>After you access the react app in the browser you can login using default admin credentials created
            when setting up the node server previously
          <ul>
            <li><code>username: admin</code></li>
            <li><code>password: test123</code></li>
          </ul>
          <br>
        </li>
          <p class="alert alert-info">Please, remember to change the password when you first login to the Communication Tool
          </p>
        </li>
      </ol>

<section id="commmonitor_installation">
      <h2>Installation</h2>
      <p class="lead">The Communication Monititor client depends on a node server that is used for authentication and user management. 
        First we will setup the node server followed by the client react app. The setup and communication between the client and server app
        is configured through some environmental variables that we will create and set step by step. 
        <br><br>
        Let's start with the node server setup.</p>
      <h3 id="node_server_setup">Node Server Setup</h3>
      <ol>
        <li>Clone the node server repository from github with the following command:</li>
        <ul>
          <li><code>git clone https://github.com/cmpalouk/ntua-node-auth.git</code></li>
        </ul>
        <li>Move to the root of the repository with:
          <ul>
            <li><code>cd ntua-node-auth/</code></li>
          </ul>
        </li>
        <li>At the root of the repository install all required packages with npm:
          <ul>
            <li><code>npm install</code></li>
          </ul>
        </li>
        <li>Now, its time to setup the node server and we will do that using some environmental variables. At the root of the repository create a .env file with:
          <ul>
            <li><code>nano .env</code></li>
          </ul>
        </li>
        <li>Inside the .env file we will configure the node server with a few environmental variables. The necessary variables depend on whether the node will run under https or just http. Therefore, we consider these two cases:
          <h5 class="mt-3">Non-SSL setup (for local host or http)</h5>
          <ul>
            <li><code>NODE_SERVER_PORT</code> - the port that the node server will listen to.</li>
            <li><code>SECRET</code> - the secret key that is used for jwt authentication. You can generate a random one <a href='https://codepen.io/corenominal/pen/rxOmMJ'>here</a>.</li>
            <li><code>DB_HOST</code> - the address of the mysql database (usually 127.0.0.1 when at the same server).</li>
            <li><code>DB_PORT</code> - the port of the mysql database (by default 3306 for MYSQL).</li>
            <li><code>DB_USER</code> - the username to connect to the mysql database (usually root or any other user if you have setup the necessary privilages).</li>
            <li><code>DB_USER_PASSWORD</code> - the password for the above user to connect to the mysql database.</li>
            <li><code>DB_NAME</code> - the name of the database that will be created for Communication Monitor. You can use any name here with some <a href='https://dev.mysql.com/doc/refman/8.0/en/identifiers.html'>restrictions</a>.</li>
          </ul>
          <br>
          Here is an example .env file with referece values:
          <pre><code>
NODE_SERVER_PORT=8080
SECRET='Ah7sjHKWBHSitKNH02iwItJ1h173WfL86CbAcawZ0r4dd9lsld9FjlrpCL98UYD'
DB_HOST='127.0.0.1'
DB_PORT=3306
DB_USER='root'
DB_USER_PASSWORD='_VGp983V1JGrLh'
DB_NAME='comnodev2'
          </code></pre>

          <h5 class="mt-3">SSL setup (for https)</h5>
          If you setup your server for https access you need to define some more environmental variables regarding the ssl certificate:
          <ul>
            <li><code>NODE_SERVER_SSL_PORT</code> - the port that the https node server will listen to.</li>
            <li><code>SSL_CRT_FILE</code> - the path to the ssl certificate file (usually fullchain.pem).</li>
            <li><code>SSL_KEY_FILE</code> - the path to the ssl certificate private key file (usually privkey.pem).</li>
          </ul>
        </li>
        <br>
        Here is an example .env file with referece values for ssl setup:
          <pre><code>
NODE_SERVER_PORT=8085
NODE_SERVER_SSL_PORT=8445
SSL_CRT_FILE='/etc/letsencrypt/live/cndevs.cn.ntua.gr/fullchain.pem'
SSL_KEY_FILE='/etc/letsencrypt/live/cndevs.cn.ntua.gr/privkey.pem'
SECRET='Ah7sjHKWBHSitKNH02iwItJ1h173WfL86CbAcawZ0r4dd9lsld9FjlrpCL98UYD'
DB_HOST='127.0.0.1'
DB_PORT=3306
DB_USER='root'
DB_USER_PASSWORD='_VGp983V1JGrLh'
DB_NAME='comnodev2'
            </code></pre>
        <li>
          Now we can actually run the node server. The first time the node server is run it must be initialized to create the database and corresponding data models,
          otherwise it will not be able to find the database. The executable is different for http and https:
          <ul>
            <li><code>INIT=true node server.js</code> for http</li>
            <li><code>INIT=true node server-ssl.js</code> for https</li>
          </ul>
          <br>
          For subsequent runs the node server can be started with just the following command:
          <ul>
            <li><code>node server.js</code> for http</li>
            <li><code>node server-ssl.js</code> for https</li>
          </ul>
          <br>
          <p class="alert alert-info">Please note that the INIT command should be used only once, as it will 
            reset the database, which will delete any users created previously. However, you can use it whenever you deliberately 
            want to reset the database for development purposes. 
          </p>
        </li>
        <li>
          At this stage, the node server should be running properly. The INIT command initialized the database 
          and created a single user with the following credentials:
          <ul>
            <li><code>username: admin</code></li>
            <li><code>password: test123</code></li>
          </ul>
          <br>
          <p class="alert alert-info">Please, remember to change the password when you first login to the Communication Tool</p>
        </li>
      </ol>  

      <p class="lead">Now that the node server is setup we can proceed to the setup of the client application</p>
      <h3 id="client-app-setup">Client Application (React) Setup</h3>
      <ol>
        <li>Clone the react app repository from github with the following command:</li>
        <ul>
          <li><code>git clone https://github.com/cmpalouk/communication-monitor-v2.git</code></li>
        </ul>
        <li>Move to the root of the repository with:
          <ul>
            <li><code>cd communication-monitor-v2/</code></li>
          </ul>
        </li>
        <li>At the root of the repository install all required packages with npm:
          <ul>
            <li><code>npm install</code></li>
          </ul>
        </li>
        <li>Now, its time to setup the client app and we will do that using some environmental variables. 
          At the root of the repository create a .env file with:
          <ul>
            <li><code>nano .env</code></li>
          </ul>
        </li>
        <li>Inside the .env file we will configure the client app with a few environmental variables. 
          The necessary variables depend on whether the react app will run under https or just http. 
          <p class="alert alert-info">Please note that the client app needs the node server in order to authenticate and login.
            Therefore, it is important to setup the REACT_APP_NODE_SERVER_DOMAIN and REACT_APP_NODE_SERVER_PORT variables correctly, depending 
            on the node server details.
          </p>
          We consider the following two cases:
          <h5 class="mt-3">Non-SSL setup (for local host or http)</h5>
          <ul>
            <li><code>PORT</code> - the port that the react app will listen to.</li>
            <li><code>REACT_APP_NODE_SERVER_DOMAIN</code> - the domain of the node server.</li>
            <li><code>REACT_APP_NODE_SERVER_PORT</code> - the port that the node server we setup previously listens to.</li>
            <li><code>REACT_APP_USING_HTTPS</code> - if the client app is running under https this should be set
              to 'true'.</li>
          </ul>
          <br>
          Here is an example .env file with referece values:
          <pre><code>
PORT=9090
REACT_APP_NODE_SERVER_DOMAIN='localhost'
REACT_APP_NODE_SERVER_PORT=8080
REACT_APP_USING_HTTPS=false
          </code></pre>
          <p class="alert alert-info">In this example, the react app listens to port 9090, so we can access it by visiting the address
            http://localhost:9090. Also, the node server listens to port 8080 and its address is http://localhost:8080
          </p>
          <h5 class="mt-3">SSL setup (for https)</h5>
          If you setup your client app for https access you need to define some more environmental variables regarding the ssl certificate:
          <ul>
            <li><code>HTTPS</code> - this should be set to true for https access</li>
            <li><code>SSL_CRT_FILE</code> - the path to the ssl certificate file (usually fullchain.pem).</li>
            <li><code>SSL_KEY_FILE</code> - the path to the ssl certificate private key file (usually privkey.pem).</li>
            <li><code>HOST</code> - the domain that the client app will be accessed from.</li>
          </ul>
        </li>
        <br>
        Here is an example .env file with referece values for ssl setup:
          <pre><code>
PORT=9095
REACT_APP_NODE_SERVER_DOMAIN='cndevs.cn.ntua.gr'
REACT_APP_NODE_SERVER_PORT=8445
REACT_APP_USING_HTTPS=true

HTTPS=true
SSL_CRT_FILE='/etc/letsencrypt/live/cndevs.cn.ntua.gr/fullchain.pem'
SSL_KEY_FILE='/etc/letsencrypt/live/cndevs.cn.ntua.gr/privkey.pem'
HOST='cndevs.cn.ntua.gr'              
          </code></pre>
          <p class="alert alert-info">In this example, the react app listens to port 9095 under the domain cndevs.cn.ntua.gr, so we can access it by visiting the address
            https://cndevs.cn.ntua.gr:9095. Also, the corresponding node server listens to port 8445 and its address is https://cndevs.cn.ntua.gr:8445
          </p>
        <li>
          At this point you can start the client app by running:
          <ul>
            <li><code>npm start</code></li>
          </ul>
        </li>
        <li>
          Once the client app is running you can access the app from the domain you defined in the environmental 
          variable HOST and the port you defined in PORT like this:
          <ul>
            <li><code>http://HOST:PORT</code></li>
            <li><code>https://HOST:PORT</code></li>
          </ul>
          <br>
          As an example, for locahost and port 9095 youn access the react app from the following address:
          <ul>
            <li><code>http://localhost:9095</code></li>
          </ul>
          <br>
        <li>After you access the react app in the browser you can login using default admin credentials created
            when setting up the node server previously
          <ul>
            <li><code>username: admin</code></li>
            <li><code>password: test123</code></li>
          </ul>
          <br>
        </li>
          <p class="alert alert-info">Please, remember to change the password when you first login to the Communication Tool
          </p>
        </li>
      </ol>
    </section>
    <section id="user_manual">
      <h2>User Manual</h2>
      <p class="lead">This section describes the various functions that are accessible by the UI</p>
      <h3>Video Version</h3>
      <p>You can watch the overview in video format below:</p>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/6Urr_BgFp1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br><br>
      <h3>Written Version</h3>
      <p>Here is a screenshot of the client app</p>
      <p><a class="popup-img" href="assets/images/commonitor-overview-1.jpg"><img class="img-fluid border" src="assets/images/commonitor-overview-1.jpg" alt=""></a></p>
      <ol>
        <li>The sidebar contains the available tools</li>
        <li>The menu icon can be used to collapse the sidebar</li>
        <li>The search bar can be used to search for the available tools by typing the name of the tool</li>
        <li>The right side of the navigation bar contains a list of icons:
          <ul>
            <li>Documentation</li>
            <li>Full Screen access</li>
            <li>Notifications</li>
            <li>User Profile and Settings</li>
            <li>General Settings</li>
          </ul>
        </li>
      </ol>
      <p>Moving on we describe the table component</p>
      <p><a class="popup-img" href="assets/images/commonitor-overview-tables.jpg"><img class="img-fluid border" src="assets/images/commonitor-overview-tables.jpg" alt=""></a></p>
      <ol>
        <li>These tabs can be used to navigate between the table and chart view</li>
        <li>The global search field can be used to search for text in the whole table</li>
        <li>This list of buttons contains the following functions:</li>
          <ul>
            <li>Export to CSV or JSON formats. This button gives the option to export the filtered data
              to CSV or JSON formats.
            </li>
            <li>Reload data</li>
            <li>View Options. The button opens a panel with a few view options for the table, namely:
              <ul>
                <li>Table Density: Changes the density of tha table's rows</li>
                <li>Column Filters: Enables the ability to filter each table column </li>
                <li>Sticky Header: Makes the table header sticky when scrolling</li>
                <li>Pagination: Enables table pagination</li>
                <li>Stripped: Makes the table's rows appear stripped</li>
              </ul>
            </li>
          </ul>
        <li>The table footer contains the pagination functions (when pagination is enabled in view options)</li>
      </ol>
      <p>Next, let's examing the charts tab</p>
      <p><a class="popup-img" href="assets/images/commonitor-overview-charts.jpg"><img class="img-fluid border" src="assets/images/commonitor-overview-charts.jpg" alt=""></a></p>
      <ol>
        <li>The label field determines the name of each data point in the chart</li>
        <li>Here we can choose the chart type</li>
        <li>Here we can choose the data that appear on the chart. Multiple data can be selected</li>
        <li>This button creates or updates the chart</li>
      </ol>
    </section>
    <section id="developer_manual">
      <h2>Developer Manual</h2>
      <p class="lead">This section describes some important components, their configuration and how to user them</p>
      <h3 id="settings_configuration">Global Settings Configuration</h3>
      <p>Most of the global settings can be configured from inside the app. However, if you need 
        to change the default settings in the code, these can be found in the file <code>constants.js</code>
      </p>
      <pre>
      <code>
export const defaultSettings = {
  theme: 'dark',    //accepts 'dark' or 'light'
  notificationsFetchInterval: 30000, //for notifications refresh in milliseconds
  tableAutoRefreshInterval: 10000, //for axios operations in milliseconds 
  tableAutoRefreshEnabled: false,
  tableDensity: 'compact', //the default density for tables
  tableColumnFiltersEnabled: false, //are column filters enabled by default in tables?
  tableStickyHeaderEnabled: true, //sticky header in tables
  tablePaginationEnabled: true, //pagination enabled in tables
  tableStrippedRows: true, //stripped rows in tables
  operationTimeOut: 20000, //timeout value for axios operations
}
      </code>
    </pre>
    <p>All properties must be present as they are expected from the various components and in 
    case some settings are not present the app will crash. </p>

    <h3 id="endpoint_url_configuration">Endpoint URL Configuration</h3>
    <p>All endpoint URLs can be customized from the following structure in the file<code>constants.js</code></p>
    <pre>
      <code>
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
  ...
}
      </code>
    </pre>
    <p>Changing the URLs in the previous structure will change the URL that the various
      api's inside the tool draw their data from.
    </p>

    <h3 id="sidebar_configuration">Sidebar Configuration</h3>
    <p>The tools that appear on the sidebar can be changed by making the following
       changes in the file<code>sidebarData.js</code></p>
    <pre>
      <code>
export const AdminSidebarData = [
  visualizationToolset,
  fusionToolset,
  advancedReasonerToolset,
  threatAndIncidentToolset,
  alertLoggerToolset,
  immutableAuditTrailToolset,
  iFrameIntegration
];
      </code>
    </pre>
    <p>Each user type (admin, moderator, user) has its own SidebarData structure. The
      above structure is for admins. </p>
    <p>Removing one toolset from the list will remove it from the sidebar</p>
    <p>Each of the toolsets can also be configured by looking at the respective object.
      For example, the visualization toolset is defined as follows:
    </p>
    <pre>
      <code>
export const visualizationToolset = {
  title: 'Visualization Toolset',
  icon: &lt;FaBezierCurve /&gt;,
  iconAlt: "visualization toolset",
  iconClosed: &lt;RiIcons.RiArrowDownSFill /&gt;,
  iconOpened: &lt;RiIcons.RiArrowUpSFill /&gt;,
  path: '/visualizationtoolset',

  subNav: [
    {
      title: 'Transactions Monitor',
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
      path: '/',
      externalPath: 'https://communicationmonitor.cn.ntua.gr:5000/visualizetransactions'
    },
    {
      title: 'Visualize Drive Tampering',
      pageTitle: 'Visualize Drive Tampering',
      path: '/',
      externalPath: 'https://communicationmonitor.cn.ntua.gr:5000/visualizedrivertampering'
    },
    {
      title: 'Transactions Graph',
      pageTitle: 'Transactions Graph',
      path: '/',
      externalPath: 'https://communicationmonitor.cn.ntua.gr:5000/transactionsgraph'
    },
    {
      title: 'Abnormal Graph',
      pageTitle: 'Abnormal Graph',
      path: '/',
      externalPath: 'https://communicationmonitor.cn.ntua.gr:5000/abnormalgraph'
    },
  ]
}; 
      </code>
    </pre>
    <p>In order to change the visualization toolset, make a change to one of its 
      properties:
    </p>
    <ul>
      <li><code>title</code>: the title of the visualization toolset in the sidebar menu</li>
      <li><code>icon</code>: the icon used for this toolset in the sidebar</li>
      <li><code>iconAlt</code>: the alt description for this icon</li>
      <li><code>iconClosed</code>: the icon when the menu is closed</li>
      <li><code>iconOpened</code>: the icon when the menu is clicked and opened</li>
      <li><code>path</code> or <code>externalPath</code>: the React Route path that this toolset will be accessed from. 
        In the case that this menu links to an external url instead of <code>path</code> you 
        should use <code>externalPath</code> instead</li>
      <li><code>subNav</code>: the array of sub menu entries </li>
    </ul>
    <h3 id="table_component">Using the Table Component</h3>
    <p>The table component is called <code>NewDataDisplay</code> and accepts a URL to draw data from and a settings object with the default table settings.
      The component can be used as follows:
    </p>
    <pre>
      <code>
&ltNewDataDisplay 
  API_URL={ENDPOINTS.transactionsdepiction.url} 
  settings={this.state.settings}
>
</code>
    </pre>
    <p>That's all that is needed for the <code>NewDataDisplay</code> component to work. </p>
    <p>The table component can also be used to load local data that are already downloaded. In that case,
      the component must be passed the local data as prop like this:
    </p>
    <pre>
      <code>
&ltNewDataDisplay 
  data={this.state.data}
  settings={this.state.settings}
>
      </code>
    </pre>
    <p>In that case the <code>API_URL</code> can be omitted.</p>
    <h3 id="styling_components">Styling the Components</h3>
    <p>All styling is done using the styled components react library. In the files <code>src/globalStyles.js</code> and 
    <code>src/styles.js</code> you can find all styling for every component and element used in the tool. Let's take a 
    look at an example:</p>
    <pre>
      <code>
export const Card = styled.div`
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${props => props.theme.cardBackgroundColor};
  background-clip: border-box;
  border: 0 solid #f1f5f7;
  border-radius: 0.25rem;
`;
export const CardBody = styled.div`
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
`;
export const CardTitle = styled.div`
  font-size: 15px;
  margin: 0 0 7px;
  font-weight: 500;
  margin-bottom: 1.5rem!important;
`;
      </code>
    </pre>
    <p>In the above example you can see a definition for a <code>Card</code> styled div. This card is the background of every table in 
    the tool. You can change the border-radius for example by changing the <code>border-radius: 0.25rem</code> line and all cards 
    in the tool will have the new border radius you set.</p>
    <p>Also, <code>CardBody</code> defines the wrapper around the content in a card (like a table for instance) and <code>CardTitle</code>
    defines the styling for the optional header title inside the card</p>
    <h3 id="add_new_endpoint">Adding a new endpoint</h3>
    <p>Now, let's see the process of adding a new tool to the dashboard from scratch.</p>
    <h4>Video Version</h4>
    <p>You can watch this section in video format below:</p>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/AzjL5EdV69I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <br><br>
    <h4>Written Version</h4>
    <p>Let's suppose that we have the following url that we need to draw data from in a table</p>
    <code>https://communicationmonitor.cn.ntua.gr:5000/transactionsdepiction</code>
    <p>First of all we need to add a new entry to the <code>src/components/NavBar/sidebarData.js</code> file. In this file, let's create
    a new object as follows:</p><pre><code>
export const myEndpoint = {
  title: 'My Endpoint',
  icon: <FaExclamationTriangle />,
  iconAlt: "My Endpoint",
  iconClosed: <RiIcons.RiArrowDownSFill />,
  iconOpened: <RiIcons.RiArrowUpSFill />,
  path: '/myendpoint',
  pageTitle: 'My Endpoint'
}
</code></pre><p>This object defines a new endpoint that will appear at the sidebar as 'My Endpoint'. Before this is true however, we need to add it
      to one of <code>AdminSidebarData</code>, <code>ModeratorSidebarData</code>, <code>UserSidebarData</code> objects. For now, let's
      add it to the <code>AdminSidebarData</code> object as follows:
    </p>
    <pre>
      <code>
export const AdminSidebarData = [
  visualizationToolset,
  fusionToolset,
  advancedReasonerToolset,
  threatAndIncidentToolset,
  alertLoggerToolset,
  immutableAuditTrailToolset,
  iFrameIntegration,
  myEndpoint
];
      </code>
    </pre>
    <p>At this point the sidebar will contain a new entry 'My Endpoint'. Clicking on it will not load anything as we have not yet create
      the necessary component. Let's do this now:
    </p>
    <p>In the <code>/src/tools.js</code> file create a new component as follows:</p>
    <pre><code>
export function MyEndpoint (settingsObject) {
  return (
  &ltMainContent key='MyEndpoint'
    title='My New Endpoint' 
    breadcrumpToolsetLink='/myendpoint' 
    breadcrumpToolsetTitle='My New Endpoint'
    mainComponent= 
    {&ltNewDataDisplay 
      API_URL={'https://communicationmonitor.cn.ntua.gr:5000/transactionsdepiction'} 
      settings={settingsObject.settings}
      />}
  />
)};
    </code></pre>
    <p>This new function component uses <code>NewDataDisplay</code> which is the table component and <code>MainContent</code> component
    which is just a helper component for displaying other components inside the dashboard already styled in cards. Here is an 
    explanation of the various props:</p>
<pre>
  <code>
title: The header text for this component
breadcrumpToolsetLink: This is the react router path for the new component. This link appears in the breadcrumps.
breadcrumpToolsetTitle: This is the text for the above link.
API_URL: this is the url to the api we want to draw data from.
settings: this is a settings object that defines the various table settings. You can just leave this as it is. 
  </code>
</pre>
  <p>Now the only thing that remains is calling this new MyEnpoint component when someone clicks on the corresponding sidebar link.
    This is achieved with a react router path. Let's go to the <code>src/new-dashboard.js</code> file and add a new link between the 
    <code>&ltRoutes>&lt/Routes></code> tags (around line 875) along with the other route definitions. 
  </p>
  <pre><code>
&ltRoute path="/myendpoint" element={&ltTools.MyEndpoint settings={this.state.settings}/>}/>
  </code></pre>
  <p>After we add this line we are able to click the link 'My Endpoint' on the sidebar and we can see that our new 'MyEndpoint' component
    is loaded properly.
  </p>
    </section>
