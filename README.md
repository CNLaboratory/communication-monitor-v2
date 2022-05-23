<h3>Find the full documentation here: https://cndevs.cn.ntua.gr/docs/commonitor/ </h3>
<h3>Walkthrough videos</h3>
<ul>
<li>Dashboard Overview: https://youtu.be/6Urr_BgFp1A</li>
<li>Extending Development: https://youtu.be/AzjL5EdV69I</li>
</ul>
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