import React, {useState, useRef, useEffect} from "react";
import axios from 'axios';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import AdminSidebar from "./components/NavBar/sidebar";
import Tab from "./components/Tab";
import TopBar from "./components/TopBar/topbar";
import * as S from "./styles";

import { Routes, Route, Link } from "react-router-dom";
import NewDataDisplay from "./new-data-display";
import { ENDPOINTS } from "./constants";
import { ThemeProvider } from "styled-components";

import Logo from "./assets/images/comm-monitor-logo-dark.png";
import Avatar from "./assets/images/white-gray-circle-avatar-png-transparent-png.png";
import {RiApps2Line, RiFullscreenLine, RiSearchLine, RiNotification3Line, RiSettings2Line, RiUserLine, RiShutDownLine} from "react-icons/ri"
import {BiChevronDown} from "react-icons/bi";
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BsArrowRightCircleFill} from 'react-icons/bs';
import SubMenu from "./components/NavBar/subMenu";
import { AdminSidebarData, ExperimentsSidebarData } from "./components/NavBar/sidebarData";

import Fullscreen from 'react-fullscreen-crossbrowser';
import { MainContent } from "./main-content";
import * as Tools from "./tools";
import { TransactionsMonitor } from "./transactions-monitor";
import { NotificationContainer } from "react-notifications";
import AuthService from "./services/auth.service";
import NewLogin from "./components/new-login";
import Logout from './logout';
import { LoginOne } from "./login";
import ComplexDataVisualization from "./complex-data";
import NotificationsBackgroundService from "./notifications-background-service";
import NewNotificationsDisplay from "./new-notifications-display";

import { kafkatorest } from "./kafkatorest";
import { kafkaMessageTest } from "./kafkatorest";

import OutsideClickHandler from 'react-outside-click-handler';

const defaultTheme = {
  sidebarWidth: '262px'
}
const defaultCollapsedTheme = {
  sidebarWidth: '0px'
}

export class NewDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: false,
      loggedIn: false,
      currentUser: {},
      showAdminBoard: false,
      showModeraborBoard: false,
      isHovered: false,
      userMenuClicked: false,
      notificationsBellClicked: false,
      isFullScreen: false,
      
      currentData: [],
      //messagesTable: JSON.parse(localStorage.getItem('messagesTable')) ? JSON.parse(localStorage.getItem('messagesTable')) : {}, //this map logs all messages and read/unread status. The format is {item: true/false} where true is unread and false is read
      messagesTable: {},
      readTable: {}, //this object holds key value pairs of [rowid:true/false] for read/unread status
      readKeyTable: {}, //[rowId: key]
      notifications_API_URL: 'https://communicationmonitor.cn.ntua.gr:5000/kafkatorestTEST',

      newNotifications: false,
      newNotificationsTable: [],
      newNotificationsDisplayMax: 20,
      getDataLocally: false,

      columns: [],
      data: [],
      itemData: [],
      keys: [],
      labels: [],
      autoRefreshEnabled: true,
      refreshInterval: 10000,
      
      messageCounter: 0
    }

    this.userMenuRef = React.createRef();
    this.notificationsMenuRef = React.createRef();
    this.handleClickOutsideUserMenu = this.handleClickOutsideUserMenu.bind(this);
    this.handleClickOutsideNotificationsMenu = this.handleClickOutsideNotificationsMenu.bind(this);


    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleMenuCollapse = this.handleMenuCollapse.bind(this);
    this.changeIsHovered = this.changeIsHovered.bind(this);
    this.handleUserMenuClicked = this.handleUserMenuClicked.bind(this);
    this.handleNotificationsBellClicked = this.handleNotificationsBellClicked.bind(this);
    this.handleFullScreenEnter = this.handleFullScreenEnter.bind(this);
    this.handleFullScreenExit = this.handleFullScreenExit.bind(this);

    this.processData = this.processData.bind(this);
    this.analyzeData = this.analyzeData.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.handleAutoRefreshChanged = this.handleAutoRefreshChanged.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
    this.markAllAsRead = this.markAllAsRead.bind(this);
    this.getNotificationData = this.getNotificationData.bind(this);
    this.getNotificationDataFromFile = this.getNotificationDataFromFile.bind(this);
    this.updateAutoRefresh = this.updateAutoRefresh.bind(this);
    this.handleNewNotificationsBell = this.handleNewNotificationsBell.bind(this);

    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    
  }

  componentDidMount() {
    
    

    if (!this.state.loggedIn) {
      console.log('not logged in');
      this.logIn();
    } else {
      console.log('logged in');
      this.updateAutoRefresh();
    }
  }
  componentDidUnMount() {
    
  }

  logIn() {
    console.log('logIn()');
    const user = AuthService.getCurrentUser();
    console.log('user:', user);
    if(user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        loggedIn:true
      }, () => {
        this.updateAutoRefresh();
      })
    }
    //document.addEventListener("mousedown", this.handleClickOutsideNotificationsMenu);
    //document.addEventListener("mousedown", this.handleClickOutsideUserMenu);
  }

  logOut() {
    AuthService.logout();
    clearInterval(this.state.timer);
    //document.removeEventListener("mousedown", this.handleClickOutsideNotificationsMenu);
    //document.removeEventListener("mousedown", this.handleClickOutsideUserMenu);
    this.setState({
      currentUser: undefined,
      showModeratorBoard: false,
      showAdminBoard: false,
      loggedIn: false
    })
  }

  handleClickOutsideUserMenu(event) {
    if (this.userMenuRef && !this.userMenuRef.current.contains(event.target)) {
      this.setState({
        userMenuClicked: false
      })  
    }
    
  }
  handleClickOutsideNotificationsMenu(event) {
    if (this.notificationsMenuRef && !this.notificationsMenuRef.current.contains(event.target)) {
      this.setState({
        notificationsBellClicked: false
      })  
    }
    
  }
  
  handleMenuCollapse() {
    let isCollapsed = this.state.isCollapsed;
    this.setState({
      isCollapsed: !isCollapsed
    })
  }
  changeIsHovered() {
    let isHovered = this.state.isHovered;
    this.setState({
      isHovered: !isHovered
    })
  }
  handleUserMenuClicked() {
    let userMenuClicked = this.state.userMenuClicked;
    this.setState({
      userMenuClicked: !userMenuClicked
    })
  }
  handleNotificationsBellClicked() {
    let notificationsBellClicked = this.state.notificationsBellClicked;
    this.setState({
      notificationsBellClicked: !notificationsBellClicked
    })
  }
  
  handleFullScreenEnter() {
    console.log('handleFullScreenEnter')
    this.setState({ isFullScreen: true });
  }
  handleFullScreenExit() {
    this.setState({ isFullScreen: false });
  }

  MenuGroup = (props) => {
    return(
      <>
        <S.List>
          <S.ListHeader>
            {props.title}
          </S.ListHeader>
          
          {props.children}
        </S.List>
      </>
    )
  }
  
  closeUserMenu = (e)=>{
    if(this.state.userMenu.current && this.state.userMenuClicked && !this.state.userMenu.current.contains(e.target)){
      this.setState({
        userMenuClicked: false
      })
    }
  }

  updateAutoRefresh() {
    
    if (this.state.autoRefreshEnabled && this.state.refreshInterval) {
      this.state.getDataLocally ?
        this.setState({
          timer: setInterval(this.getNotificationDataFromFile, this.state.refreshInterval)
        })
        :
        this.setState({
          timer: setInterval(this.getNotificationData, this.state.refreshInterval)
        })
    }
  }
  handleAutoRefreshChanged(autoRefreshEnabled) {
    if (autoRefreshEnabled) {
      this.state.getDataLocally ?
        this.setState({
          timer: setInterval(this.getNotificationDataFromFile, this.state.refreshInterval)
        })
      :
        this.setState({
          timer: setInterval(this.getNotificationData, this.state.refreshInterval)
        })
      
    } else {
      clearInterval(this.state.timer);
    }
  }
  checkIfDataIsLoaded = (dataLoadedStatus) => {
    this.setState( { isDataLoaded: dataLoadedStatus });
  }

  //process data for the react-table
  processData() {
    let localKeys=[];
    let localColumns=[];
    let itemData=[];
    let localLabels=[];
    
    const firstItem = this.state.data[0]['message'];
    for (let key in firstItem) {
        if (firstItem.hasOwnProperty(key)) {
            localKeys.push(key);
        }
    }
    for (let key in localKeys) {
        localColumns.push(
            {
                Header: localKeys[key],
                accessor: localKeys[key]
            }
        )
    }
    
    for (let item in this.state.data) {
        //console.log('item.message:', this.state.data[item]['message'])
        let newItem = this.state.data[item]['message'];
        itemData.push(newItem);
    }
    //we reverse the items so that more recent events are first
    itemData.reverse();
    
    this.setState({ 
        itemData: itemData,
        isTransfering: false,
        columns:localColumns,
        keys:localKeys,
        labels:localLabels,
        isDataLoaded: true
    }, () => this.analyzeData());
  }

  analyzeData() {
    const currentData = this.state.currentData;
    const newData = this.state.itemData;
    let messagesTable = this.state.messagesTable;

    for (let i = 0; i < newData.length; i++) {
      let key = newData[i]['uuid'] + newData[i]['asset'] + newData[i]['service_name'] + newData[i]['alert_timestamp'];
      if (!(key in messagesTable)) {
        console.log('new data found');
        messagesTable[key] = true;
        currentData.unshift(newData[i]);

        //new data found so set notification bell to true
        this.setState({newNotifications: true});
      }
    }
    
    //create readTable with [rowId: read/unread status]
    let readTable = {};
    let readKeyTable = {};
    let newNotificationsTable = [];
    let newNotificationsCounter = 0;
    for (let i = 0; i < currentData.length; i++) {
      let key = currentData[i]['uuid'] + currentData[i]['asset'] + currentData[i]['service_name'] + currentData[i]['alert_timestamp'];
      readTable[i] = messagesTable[key];
      readKeyTable[i] = key;

      // if this row is unread store it in newNotificationsTable so we can have a table
      // with the latest five unread notifications available
      if (messagesTable[key] === true) {
        if (newNotificationsCounter++ < this.state.newNotificationsDisplayMax)
          newNotificationsTable.push(currentData[i]);
      }

    }

    
    this.setState({
      currentData: currentData,
      newNotificationsTable: newNotificationsTable,
      messagesTable: messagesTable,
      readTable: readTable,
      readKeyTable: readKeyTable
    }, () => {
      localStorage.setItem('messagesTable', JSON.stringify(this.state.messagesTable));
    })
  }

  getNotificationDataFromFile() {
    let kafkaToRest = kafkatorest;
    let messageCounter = this.state.messageCounter;
    messageCounter++;
    let newMessage = {
      "message": {
        "Alert_message": "Test Alert message 1", 
        "alert_timestamp": "06-May-2022 (13:08:19)", 
        "asset": "TEST-DRIVER-1", 
        "detection_timestamp": "2022-05-04T06:15", 
        "partner_id": "ICCS", 
        "service_name": "Fusion Toolset", 
        "service_type": "Driver Tampering", 
        "set_of_data": "text files", 
        "severity_level": "high"
      }
    };
    
    newMessage.message.asset = 'test-driver-' + messageCounter;
    newMessage.message.Alert_message = 'Test Alert ' + messageCounter;
    kafkaToRest.push(newMessage);

    this.setState({data: kafkaToRest, messageCounter: messageCounter}, () => {
        this.processData();
      });
    };

  getNotificationData() {
    axios.get(this.state.notifications_API_URL,  {headers: {"Access-Control-Allow-Origin":"*"}})
    .then((response) => {
      
      this.setState({data:response.data}, () => {
        this.processData();
      });
    });
  }
  refreshData() {
    console.log('refreshData()');
    this.setState({isDataLoaded: false, itemData:[]})
    this.state.getDataLocally ?
      this.getNotificationDataFromFile()
    :
      this.getNotificationData()
  }

  markAsRead(rowId) {
    console.log('notifications - markAsRead called');
    let messagesTable = this.state.messagesTable;
    
    let key = this.state.readKeyTable[rowId];
    messagesTable[key] = !messagesTable[key];

    let readTable = this.state.readTable;
    readTable[rowId] = !readTable[rowId];

    let newNotifications = false;
    for (let row in readTable) {
      if (readTable[row] === true) {
        newNotifications = true;
      }
    }

    this.setState({
      newNotifications: newNotifications,
      readTable: readTable,
      messagesTable: messagesTable
    })

  }
  markAllAsRead() {
    let messagesTable = this.state.messagesTable;
    for (let key in messagesTable) {
      messagesTable[key] = false;
    }
    let readTable = this.state.readTable;
    for (let key in readTable) {
      readTable[key] = false;
    }


    this.setState({
      newNotifications: false,
      readTable: readTable,
      messagesTable: messagesTable
    })
  }
  handleNewNotificationsBell(newNotifications) {
    console.log('newNotifications:', newNotifications);
    this.setState({newNotifications: newNotifications});
  }

  toggleFullscreen() {
    if (
        !document.fullscreenElement &&
  /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
    ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(
                Element.ALLOW_KEYBOARD_INPUT
            );
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}


  render() {

  return (
    <>
    { !this.state.loggedIn && <S.LogInScreenWrapper>
      <LoginOne logIn={this.logIn}/>
      </S.LogInScreenWrapper>}
    { this.state.loggedIn && 
      <Fullscreen
            enabled={this.state.isFullScreen}
            onChange={(isFullScreen) => this.setState({ isFullScreen })}
          >
            <S.DashboardWrapper>
    <ThemeProvider theme={this.isCollapsed ? defaultCollapsedTheme : defaultTheme }>
      <S.PageTopbar>
        <S.NavbarHeader>
          <S.dFlex>
            <S.BrandWrapper>
              <Link to='/'>
              <S.BrandImage src={Logo} alt='logo' className='logo'></S.BrandImage>
              </Link>
            </S.BrandWrapper>
            <S.MenuIconWrap onMouseEnter={this.changeIsHovered} onMouseLeave={this.changeIsHovered} onClick={this.handleMenuCollapse}>
              <S.MenuIconLine style={this.isHovered ? {width: '22px'} : {width: '18px'}}></S.MenuIconLine>
              <S.MenuIconLine></S.MenuIconLine>
              <S.MenuIconLine style={this.isHovered ? {width: '22px'} : {width: '18px'}}></S.MenuIconLine>
            </S.MenuIconWrap>
            <S.SearchFieldFormWrap>
              <S.SearchFieldInputWrap>
                <S.SearchFieldFormInput placeholder='Search' type='text'/>
                  <S.SearchFieldInputSearchIcon>
                    <RiSearchLine/>
                  </S.SearchFieldInputSearchIcon>
              </S.SearchFieldInputWrap>
            </S.SearchFieldFormWrap>
          </S.dFlex>
          <S.dFlex>
            <S.IconWrap><RiApps2Line/></S.IconWrap>
            <S.IconWrap><RiFullscreenLine onClick={this.toggleFullscreen}/>

              {/*this.state.isFullScreen 
              ? <RiFullscreenLine onClick={() => {this.setState({isFullScreen: false})}}/> 
              : <RiFullscreenLine onClick={() => {this.setState({isFullScreen: true})}}/>
              */}
            </S.IconWrap>
            {/*<Link to='newnotifications'>*/}
            <OutsideClickHandler onOutsideClick={this.handleClickOutsideNotificationsMenu}>
            <S.IconWrap ref={this.notificationsMenuRef}>
              <RiNotification3Line onClick={this.handleNotificationsBellClicked}/>
              {this.state.newNotifications && <S.NotificationBellRedNotice></S.NotificationBellRedNotice>}
              <S.NotificationsDropDownWrapper  style={{display: this.state.notificationsBellClicked ? 'block' : 'none'}}>
              
                <S.NotificationsDropDownHeaderWrapper>
                  <S.NotificatioinsDropDownHeader>Notifications</S.NotificatioinsDropDownHeader>
                </S.NotificationsDropDownHeaderWrapper>
                <SimpleBar style={{ maxHeight: '300px' }}>
                {this.state.newNotificationsTable.map((item, index) => {
                   
                   return  <div key={index}>
                    <S.NotificationDropDownSingleWrapper to='/newnotifications'>
                      <S.NotificationDropDownSingle>
                        <S.NotificationDropDownSingleIconWrapper><RiNotification3Line/></S.NotificationDropDownSingleIconWrapper>
                        <S.NotificationDropDownSingleContentWrapper>
                          <S.NotificationDropDownSingleContentHeader>{item.service_type}</S.NotificationDropDownSingleContentHeader>
                          <S.NotificationDropDownSingleContentMain>
                            <S.NotificationDropDownSingleContentMainMessage>{item.Alert_message}</S.NotificationDropDownSingleContentMainMessage>
                            <S.NotificationDropDownSingleContentMainTimeWrapper>
                              <S.NotificationDropDownSingleContentMainTimeIconWrapper><AiOutlineClockCircle/></S.NotificationDropDownSingleContentMainTimeIconWrapper>
                              <S.NotificationDropDownSingleContentMainTimeText>{item.alert_timestamp}</S.NotificationDropDownSingleContentMainTimeText>
                            </S.NotificationDropDownSingleContentMainTimeWrapper>
                          </S.NotificationDropDownSingleContentMain>
                        
                        </S.NotificationDropDownSingleContentWrapper>
                        
                      </S.NotificationDropDownSingle>
                      
                    </S.NotificationDropDownSingleWrapper>
                    </div>
                })}
                </SimpleBar>
                <S.NotificationsDropDownFooterWrapper>
                  <S.NotificationsDropDownFooterLink to='/newnotifications' >
                    <BsArrowRightCircleFill style={{marginRight: '10px'}}/>
                    See All Notifications
                  </S.NotificationsDropDownFooterLink>
                </S.NotificationsDropDownFooterWrapper>
                
              
              </S.NotificationsDropDownWrapper>
            </S.IconWrap>
            </OutsideClickHandler>
            {/*</Link>*/}
            <OutsideClickHandler onOutsideClick={this.handleClickOutsideUserMenu}>
            <S.UserWrap ref={this.userMenuRef}>
              <S.UserProfile onClick={this.handleUserMenuClicked}>
                <S.UserAvatar src={Avatar} alt='user image'/>
                <S.UserName>Admin</S.UserName>
                <S.ButtonArrow><BiChevronDown/></S.ButtonArrow>
              </S.UserProfile>
              <S.UserDropdown style={{display: this.state.userMenuClicked ? 'block' : 'none'}}>
                <S.DropdownItemLink to='/profile' >
                  <S.DropdownIcon><RiUserLine/></S.DropdownIcon>
                  Profile
                </S.DropdownItemLink>
                <S.DropdownItemLink to='/settings' >
                  <S.DropdownIcon><RiSettings2Line/></S.DropdownIcon>
                  Settings
                </S.DropdownItemLink>
                <S.DropdownItemLink to='/usermanagement' >
                  <S.DropdownIcon><RiSettings2Line/></S.DropdownIcon>
                  User Management
                </S.DropdownItemLink>
                <S.DropdownDivider></S.DropdownDivider>
                <S.DropdownItemLink style={{color: '#ff3d60'}} to='/logout' >
                  <S.DropdownIcon ><RiShutDownLine/></S.DropdownIcon>
                  Logout
                </S.DropdownItemLink>
              </S.UserDropdown>
            </S.UserWrap>
            </OutsideClickHandler>
            <S.IconWrap><RiSettings2Line/></S.IconWrap>
          </S.dFlex>
        </S.NavbarHeader>
      </S.PageTopbar>
      
      <S.VerticalMenuWrapper>
        <SimpleBar style={{ height: '100%', maxHeight: '100%' }}>
          <S.VerticalMenu>
            <this.MenuGroup title='Toolsets'>
              <SubMenu sidebarData={AdminSidebarData}/>
              {/*AdminSidebarData.map((item, index) => {
                console.log('adminsidebar created');
                return <SubMenu item={item} key={index} active={(activeItem===item) ? true : false} handleClick={handleMenuItemClick}/>
              })*/}
            </this.MenuGroup>
            <this.MenuGroup title='Experiments'>
            <SubMenu sidebarData={ExperimentsSidebarData}/>
              {/*ExperimentsSidebarData.map((item, index) => {
                return <SubMenu item={item} key={index}/>;
              })*/}
              
            </this.MenuGroup>
          
          </S.VerticalMenu>
        
          
        </SimpleBar>
      </S.VerticalMenuWrapper>

      {<NotificationContainer/>}
      {/*<NotificationsBackgroundService
        API_URL={'https://communicationmonitor.cn.ntua.gr:5000/kafkatorest'} 
        autoRefreshEnabled={true} 
        refreshInterval={10000}
            />
            */}
      <Routes>
        <Route path='/' element={<Tools.MainHome/>}/>
        <Route path="/transactionsdepiction" element={<Tools.TransactionsMonitor/>}/>
        <Route path="/sensorsdepiction" element={<Tools.SensorsDepiction/>}/>
        <Route path="/abnormaldetection" element={<Tools.AbnormalDetection/>}/>
        <Route path="/drivertampering" element={<Tools.DriverTampering/>}/>
        <Route path="/drivertamperingdetails" element={<Tools.DriverTamperingDetails/>}/>
        <Route path="/reasoning1" element={<Tools.Reasoning1/>}/>
        <Route path="/reasoning2" element={<Tools.Reasoning2/>}/>
        <Route path="/reasoning3" element={<Tools.Reasoning3/>}/>
        <Route path="/reasoning4" element={<Tools.Reasoning4/>}/>
        <Route path="/reasoning5" element={<Tools.Reasoning5/>}/>
        <Route path="/reasoning6" element={<Tools.Reasoning6/>}/>
        <Route path="/reasoning7" element={<Tools.Reasoning7/>}/>
        <Route path="/threatandincident" element={<Tools.ThreatAndIncidentToolset/>}/>
        <Route path="/alertlogger" element={<Tools.AlertLoggerToolset/>}/>
        <Route path="/dynamicapi" element={<Tools.DynamicApiExperiment/>}/>
        <Route path='/ordertrack' element = {<Tools.OrderTrackExperiment />}/>
        <Route path='/uploadfiletest' element={<Tools.UploadFileTestExperiment />}/>
        <Route path='/datavisualization' element={<Tools.DataVisualizationExperiment/>}/>
        <Route path='/iframetest' element={<Tools.IFrameTestExperiment/>}/>
        <Route path='/usermanagement' element = {<Tools.UserManagementTool />}/>
        <Route path='/complexdatavisualization' element = {<Tools.ComplexDataVisualizationTool/>} />
        <Route path='/leafletexample' element = {<Tools.LeafleftExampleTool/>} />
        <Route path='/notifications' element = {<Tools.NotificationsDisplayTool/>} />
        <Route path='/totalorders' element = {<Tools.TotalOrdersTool/>} />
        <Route path='/etlcomponent' element = {<Tools.ETLComponentTool/>} />
        <Route path='/customiframe' element = {<Tools.CustomIFrameTool/>} />

        <Route path='/newnotifications' element = 
          {<MainContent key='NewNotificationsDisplayTool'
          title='New Notifications Display Tool' 
          breadcrumpToolsetLink='/newnotifications' 
          breadcrumpToolsetTitle='New Notifications Display Tool'
          mainComponent= 
            {<NewNotificationsDisplay
              columns={this.state.columns}
              itemData={this.state.itemData}
              readTable={this.state.readTable}
              handleAutoRefreshChanged={this.handleAutoRefreshChanged}
              autoRefreshEnabled={this.state.autoRefreshEnabled}
              markAsRead={this.markAsRead}
              markAllAsRead={this.markAllAsRead}
              refreshData={this.refreshData}
            />}
          />}
        />
      </Routes>
      
    </ThemeProvider>
    
    <Routes>
          <Route path='/logout' element={<Logout logOut={this.logOut}/>} />
        </Routes>
    </S.DashboardWrapper>
    </Fullscreen>
    
    }
    </>
  )};
}
