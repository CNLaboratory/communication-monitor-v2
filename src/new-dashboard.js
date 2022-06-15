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

import GeneralSettings from "./settings-general";

import Logo from "./assets/images/comm-monitor-logo-dark.png";
import LogoLight from "./assets/images/comm-monitor-logo-light.png";
import Avatar from "./assets/images/white-gray-circle-avatar-png-transparent-png.png";
import {RiApps2Line, RiFullscreenLine, RiSearchLine, RiNotification3Line, RiSettings2Line, RiUserLine, RiShutDownLine} from "react-icons/ri"
import {BiChevronDown} from "react-icons/bi";
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BsArrowRightCircleFill} from 'react-icons/bs';
import {IoBookOutline} from 'react-icons/io5';
import SubMenu from "./components/NavBar/subMenu";
import { AdminSidebarData, ModeratorSidebarData, UserSidebarData, ExperimentsSidebarData } from "./components/NavBar/sidebarData";

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
import BackgroundMain10 from './assets/images/324-23-blue-tech-geom-HUD-gear.jpg'

import { kafkatorest } from "./kafkatorest";
import { kafkaMessageTest } from "./kafkatorest";

import OutsideClickHandler from 'react-outside-click-handler';
import { defaultTheme, lightTheme } from "./theme";
import { defaultSettings } from "./constants";
import * as toolset from './toolset';

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
      menuCollapse: false,
      
      currentData: [],
      //messagesTable: JSON.parse(localStorage.getItem('messagesTable')) ? JSON.parse(localStorage.getItem('messagesTable')) : {}, //this map logs all messages and read/unread status. The format is {item: true/false} where true is unread and false is read
      messagesTable: {},
      readTable: {}, //this object holds key value pairs of [rowid:true/false] for read/unread status
      readKeyTable: {}, //[rowId: key]
      notifications_API_URL: 'https://communicationmonitor.cn.ntua.gr:5000/kafkatorestTEST',

      newNotifications: false,
      newNotificationsTable: [],
      newNotificationsDisplayMax: 20,
      getDataLocally: true,

      columns: [],
      data: [],
      itemData: [],
      keys: [],
      labels: [],
      autoRefreshEnabled: true,
      refreshInterval: 10000,
      
      messageCounter: 0,
      searchBarQuery: '',
      availableTools: [],
      availableExperiments: [],
      showAvailableTools: false,
      showLinksMenu: false,

      settings: JSON.parse(localStorage.getItem('settings')) ? JSON.parse(localStorage.getItem('settings')) : defaultSettings
      
    }

    this.userMenuRef = React.createRef();
    this.notificationsMenuRef = React.createRef();
    this.searchBarRef = React.createRef();
    this.linksMenuRef = React.createRef();
    this.handleClickOutsideUserMenu = this.handleClickOutsideUserMenu.bind(this);
    this.handleClickOutsideNotificationsMenu = this.handleClickOutsideNotificationsMenu.bind(this);
    this.handleClickOutsideSearchBarDropDown = this.handleClickOutsideSearchBarDropDown.bind(this);
    this.handleClickOutsideLinksMenuDropDown = this.handleClickOutsideLinksMenuDropDown.bind(this);

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleMenuCollapse = this.handleMenuCollapse.bind(this);
    this.changeIsHovered = this.changeIsHovered.bind(this);
    this.handleUserMenuClicked = this.handleUserMenuClicked.bind(this);
    this.handleLinksMenuClicked = this.handleLinksMenuClicked.bind(this);
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

    this.generateAvailableTools = this.generateAvailableTools.bind(this);

    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.onSearchBarBlur = this.onSearchBarBlur.bind(this);
    this.onSearchBarFocus = this.onSearchBarFocus.bind(this);
    
    this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);
    
  }

  generateAvailableTools(sidebarData) {
    let availableTools = [];
    let toolCounter = 0;
    for (let i = 0; i < sidebarData.length; i++) {
      let tool = {};
      sidebarData[i].externalPath ?
      
      tool = {
        id: toolCounter,
        title: sidebarData[i].title,
        externalPath: sidebarData[i].externalPath
      }
      :
      tool = {
        id: toolCounter,
        title: sidebarData[i].title,
        path: sidebarData[i].path
      }

      availableTools.push(tool);
      toolCounter++;

      if (sidebarData[i].subNav) {
        for (let j = 0; j < sidebarData[i].subNav.length; j++) {

          let subTool = {};

          sidebarData[i].subNav[j].externalPath ?

          subTool = {
            id: toolCounter,
            title: sidebarData[i].subNav[j].title,
            externalPath: sidebarData[i].subNav[j].externalPath,
          }
          :
          subTool = {
            id: toolCounter,
            title: sidebarData[i].subNav[j].title,
            path: sidebarData[i].subNav[j].path,
          };

          availableTools.push(subTool);
        }
      }
    }

    return availableTools;
    

  }

  componentDidMount() {
    
    console.log('dashboard - this.state.settings:', this.state.settings);

    if (!this.state.loggedIn) {
      console.log('not logged in');
      this.logIn();
    } else {
      console.log('logged in');
      this.updateAutoRefresh();
    }

    localStorage.setItem('settings', JSON.stringify(this.state.settings));
    
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
        let availableTools = this.state.showAdminBoard 
      ? this.generateAvailableTools(AdminSidebarData) 
      : this.state.showModeraborBoard ? this.generateAvailableTools(ModeratorSidebarData) 
      : this.generateAvailableTools(UserSidebarData);
    console.log('availableTools:', availableTools);
    this.setState({
      availableTools: availableTools
    })
    let availableExperiments = this.state.showAdminBoard 
      ? this.generateAvailableTools(ExperimentsSidebarData)
      : []
    
    console.log('availableExperiments:', availableExperiments);
    this.setState({
      availableExperiments: availableExperiments
    })
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
  handleClickOutsideSearchBarDropDown(event) {
    if (this.searchBarRef && !this.searchBarRef.current.contains(event.target)) {
      this.setState({
        showAvailableTools: false
      })  
    } 
  }
  handleClickOutsideLinksMenuDropDown(event) {
    if (this.linksMenuRef && !this.linksMenuRef.current.contains(event.target)) {
      this.setState({
        showLinksMenu: false
      })  
    } 
  }
  
  handleMenuCollapse() {
    let menuCollapse = this.state.menuCollapse;
    this.setState({
      menuCollapse: !menuCollapse
    })
  }
  handleSettingsUpdate(settings) {
    this.setState({
      settings: settings
    }, () => {
      localStorage.setItem('settings', JSON.stringify(this.state.settings));
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
  handleLinksMenuClicked() {
    let showLinksMenu = this.state.showLinksMenu;
    this.setState({
      showLinksMenu: !showLinksMenu
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
  onSearchBarBlur() {
    this.setState({
      showAvailableTools: false
    })
  }
  onSearchBarFocus() {
    this.setState({
      showAvailableTools: true
    })
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
    
    if (this.state.data.length > 0) {
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
          newNotificationsTable.unshift(currentData[i]);
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
    const axiosInstance = axios.create();
    axiosInstance.defaults.timeout = this.state.settings.operationTimeOut;

    axiosInstance.get(this.state.notifications_API_URL,  {headers: {"Access-Control-Allow-Origin":"*"}})
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
    <ThemeProvider theme={this.state.settings.theme === 'light' ? lightTheme : defaultTheme}>
    { !this.state.loggedIn && <S.LogInScreenWrapper>
      <LoginOne logIn={this.logIn}/>
      </S.LogInScreenWrapper>}
    { this.state.loggedIn && 
      <Fullscreen
            enabled={this.state.isFullScreen}
            onChange={(isFullScreen) => this.setState({ isFullScreen })}
          >
      <S.DashboardWrapper>
    
      <S.PageTopbar collapsed={this.state.menuCollapse}>
        <S.NavbarHeader>
          <S.dFlex>
            <S.BrandWrapper>
              <Link to='/'>
                <S.BrandImage src={this.state.settings.theme === 'light' ? LogoLight : Logo} alt='logo' className='logo'></S.BrandImage>
              </Link>
            </S.BrandWrapper>
            <S.MenuIconWrap onClick={this.handleMenuCollapse} style={{cursor: 'pointer'}}>
              <HiOutlineMenuAlt1/>
            </S.MenuIconWrap>
            <OutsideClickHandler onOutsideClick={this.handleClickOutsideSearchBarDropDown}>
            <S.SearchFieldFormWrap ref={this.searchBarRef}>
              <S.SearchFieldInputWrap>
                <S.SearchFieldFormInput placeholder='Search' type='text' onFocus={this.onSearchBarFocus} onChange={event => this.setState({searchBarQuery: event.target.value})}/>
                  <S.SearchFieldInputSearchIcon>
                    <RiSearchLine/>
                  </S.SearchFieldInputSearchIcon>
              </S.SearchFieldInputWrap>
              
              <S.SearchBarDropDownWrapper  style={{display: this.state.showAvailableTools ? 'block' : 'none'}}>
                <S.SearchBarDropDownHeaderWrapper>
                  <S.SearchBarDropDownHeader>Tools</S.SearchBarDropDownHeader>
                </S.SearchBarDropDownHeaderWrapper>
                <SimpleBar style={{ maxHeight: '300px' }}>
                {this.state.availableTools.filter(post => {
                  if (this.state.searchBarQuery === '') {
                    return post;
                  } else if (post.title.toLowerCase().includes(this.state.searchBarQuery.toLowerCase())) {
                    return post;
                  }
                  }).map((item, index) => {
                    return item.externalPath ?
                
                    <div key={index}>
                    <S.SearchBarDropDownSingleWrapperExternalLink href={item.externalPath} target='_blank' onClick={this.onSearchBarBlur}>
                      <S.SearchBarDropDownSingle>
                        <S.SearchBarDropDownSingleContentWrapper>
                          <S.SearchBarSinlgeContentHeader>{item.title}</S.SearchBarSinlgeContentHeader>
                        </S.SearchBarDropDownSingleContentWrapper>
                      </S.SearchBarDropDownSingle>
                    </S.SearchBarDropDownSingleWrapperExternalLink>
                    </div>
                    :
                    
                    <div key={index}>
                    <S.SearchBarDropDownSingleWrapper to={item.path} onClick={this.onSearchBarBlur}>
                      <S.SearchBarDropDownSingle>
                        <S.SearchBarDropDownSingleContentWrapper>
                          <S.SearchBarSinlgeContentHeader>{item.title}</S.SearchBarSinlgeContentHeader>
                        </S.SearchBarDropDownSingleContentWrapper>
                      </S.SearchBarDropDownSingle>
                    </S.SearchBarDropDownSingleWrapper>
                    </div>


                })}
                </SimpleBar>
                {this.state.showAdminBoard && 
                <S.SearchBarDropDownHeaderWrapper>
                  <S.SearchBarDropDownHeader>Experiments</S.SearchBarDropDownHeader>
                </S.SearchBarDropDownHeaderWrapper>
                }
                <SimpleBar style={{ maxHeight: '300px' }}>
                {this.state.availableExperiments.filter(post => {
                  if (this.state.searchBarQuery === '') {
                    return post;
                  } else if (post.title.toLowerCase().includes(this.state.searchBarQuery.toLowerCase())) {
                    return post;
                  }
                  }).map((item, index) => {
                    return item.externalPath ?
                
                    <div key={index}>
                    <S.SearchBarDropDownSingleWrapperExternalLink href={item.externalPath} target='_blank' onClick={this.onSearchBarBlur}>
                      <S.SearchBarDropDownSingle>
                        <S.SearchBarDropDownSingleContentWrapper>
                          <S.SearchBarSinlgeContentHeader>{item.title}</S.SearchBarSinlgeContentHeader>
                        </S.SearchBarDropDownSingleContentWrapper>
                      </S.SearchBarDropDownSingle>
                    </S.SearchBarDropDownSingleWrapperExternalLink>
                    </div>
                    :
                    
                    <div key={index}>
                    <S.SearchBarDropDownSingleWrapper to={item.path} onClick={this.onSearchBarBlur}>
                      <S.SearchBarDropDownSingle>
                        <S.SearchBarDropDownSingleContentWrapper>
                          <S.SearchBarSinlgeContentHeader>{item.title}</S.SearchBarSinlgeContentHeader>
                        </S.SearchBarDropDownSingleContentWrapper>
                      </S.SearchBarDropDownSingle>
                    </S.SearchBarDropDownSingleWrapper>
                    </div>


                })}
                </SimpleBar>
              
              </S.SearchBarDropDownWrapper>
              
            </S.SearchFieldFormWrap>
            </OutsideClickHandler>
          </S.dFlex>
          <S.dFlex>
            <OutsideClickHandler onOutsideClick={this.handleClickOutsideLinksMenuDropDown}>
            <S.IconWrap ref={this.linksMenuRef} style={{cursor: 'pointer'}}>
              <RiApps2Line onClick={this.handleLinksMenuClicked}/>
            <S.LinksMenuDropDownWrapper  style={{display: this.state.showLinksMenu ? 'block' : 'none'}}>
              <S.LinksMenuContentRow>
                <S.LinksMenuIconWrapper>
                  <a href='https://cndevs.cn.ntua.gr/docs/commonitor/' target='_blank' rel="noreferrer">
                  <S.LinksMenuIcon><IoBookOutline/></S.LinksMenuIcon>
                  <S.LinksMenuIconDescription>Documentation</S.LinksMenuIconDescription>
                  </a>
                </S.LinksMenuIconWrapper>
              </S.LinksMenuContentRow>
            </S.LinksMenuDropDownWrapper>
            </S.IconWrap>
            </OutsideClickHandler>
            <S.IconWrap style={{cursor: 'pointer'}}><RiFullscreenLine onClick={this.toggleFullscreen}/>

              {/*this.state.isFullScreen 
              ? <RiFullscreenLine onClick={() => {this.setState({isFullScreen: false})}}/> 
              : <RiFullscreenLine onClick={() => {this.setState({isFullScreen: true})}}/>
              */}
            </S.IconWrap>
            {/*<Link to='newnotifications'>*/}
            <OutsideClickHandler onOutsideClick={this.handleClickOutsideNotificationsMenu}>
            <S.IconWrap ref={this.notificationsMenuRef} style={{cursor: 'pointer'}}>
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
                <S.UserName>{this.state.currentUser 
                  ? this.state.currentUser.firstName 
                  ? this.state.currentUser.firstName 
                  : "user" 
                  : 'user'
                }</S.UserName>
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
                {this.state.showAdminBoard &&
                <S.DropdownItemLink to='/usermanagement' >
                  <S.DropdownIcon><RiSettings2Line/></S.DropdownIcon>
                  User Management
                </S.DropdownItemLink>
                }
                <S.DropdownDivider></S.DropdownDivider>
                <S.DropdownItemLink style={{color: '#ff3d60'}} to='/logout' >
                  <S.DropdownIcon ><RiShutDownLine/></S.DropdownIcon>
                  Logout
                </S.DropdownItemLink>
              </S.UserDropdown>
            </S.UserWrap>
            </OutsideClickHandler>
            <Link to='/settings'>
              <S.IconWrap style={{cursor: 'pointer'}}><RiSettings2Line/></S.IconWrap>
            </Link>
          </S.dFlex>
        </S.NavbarHeader>
      </S.PageTopbar>
      
      <S.VerticalMenuWrapper collapsed={this.state.menuCollapse}>
        <SimpleBar style={{ height: '100%', maxHeight: '100%' }}>
          <S.VerticalMenu>
            <this.MenuGroup title='Communication Monitor Toolsets'>
              {this.state.showAdminBoard && <SubMenu sidebarData={AdminSidebarData}/> }
              {this.state.showModeraborBoard && <SubMenu sidebarData={ModeratorSidebarData}/> }
              {!this.state.showAdminBoard && !this.state.showModeraborBoard && <SubMenu sidebarData={UserSidebarData}/> }
              
              {/*AdminSidebarData.map((item, index) => {
                console.log('adminsidebar created');
                return <SubMenu item={item} key={index} active={(activeItem===item) ? true : false} handleClick={handleMenuItemClick}/>
              })*/}
            </this.MenuGroup>
            {this.state.showAdminBoard &&
            <this.MenuGroup title='Experiments'>
            <SubMenu sidebarData={ExperimentsSidebarData}/>
              {/*ExperimentsSidebarData.map((item, index) => {
                return <SubMenu item={item} key={index}/>;
              })*/}
              
            </this.MenuGroup>
            }
          
          </S.VerticalMenu>
        
          
        </SimpleBar>
      </S.VerticalMenuWrapper>

      {<NotificationContainer/>}
      
      <S.MainContent collapsed={this.state.menuCollapse}>

      <Routes>
        <Route path="/chartsdisplayform" element={<Tools.ChartsDisplayFormTool settings={this.state.settings}/>}/>
        <Route path="/chartsdisplay" element={<Tools.ChartsDisplayTool settings={this.state.settings}/>}/>
        <Route path="/visualizationtoolset" element={<Tools.VisualizationToolset settings={this.state.settings}/>}/>
        <Route path="/fusiontoolset" element={<Tools.FusionToolset settings={this.state.settings}/>}/>
        <Route path="/advancedreasonertoolset" element={<Tools.AdvancedReasonerToolset settings={this.state.settings}/>}/>
        <Route path="/immutableaudittrail" element={<Tools.ImmutableAuditTrailToolset settings={this.state.settings}/>}/>
        <Route path="/iframeintegration" element={<Tools.IFrameIntegrationToolset settings={this.state.settings}/>}/>
        <Route path="/transactionsdepiction" element={<Tools.TransactionsMonitor settings={this.state.settings}/>}/>
        <Route path="/sensorsdepiction" element={<Tools.SensorsDepiction settings={this.state.settings}/> }/>
        <Route path="/abnormaldetection" element={<Tools.AbnormalDetection settings={this.state.settings}/>}/>
        <Route path="/drivertampering" element={<Tools.DriverTampering settings={this.state.settings}/>}/>
        <Route path="/drivertamperingdetails" element={<Tools.DriverTamperingDetails settings={this.state.settings}/>}/>
        <Route path="/reasoning1" element={<Tools.Reasoning1 settings={this.state.settings}/>}/>
        <Route path="/reasoning2" element={<Tools.Reasoning2 settings={this.state.settings}/>}/>
        <Route path="/reasoning3" element={<Tools.Reasoning3 settings={this.state.settings}/>}/>
        <Route path="/reasoning4" element={<Tools.Reasoning4 settings={this.state.settings}/>}/>
        <Route path="/reasoning4b" element={<Tools.Reasoning4b settings={this.state.settings}/>}/>
        <Route path="/reasoning5" element={<Tools.Reasoning5 settings={this.state.settings}/>}/>
        <Route path="/reasoning5b" element={<Tools.Reasoning5b settings={this.state.settings}/>}/>
        <Route path="/reasoning6" element={<Tools.Reasoning6 settings={this.state.settings}/>}/>
        <Route path="/reasoning7" element={<Tools.Reasoning7 settings={this.state.settings}/>}/>
        <Route path="/threatandincident" element={<Tools.ThreatAndIncidentToolset settings={this.state.settings}/>}/>
        <Route path="/alertlogger" element={<Tools.AlertLoggerToolset settings={this.state.settings}/>}/>
        <Route path="/dynamicapi" element={<Tools.DynamicApiExperiment settings={this.state.settings}/>}/>
        <Route path='/ordertrack' element = {<Tools.OrderTrackExperiment settings={this.state.settings}/>}/>
        <Route path='/uploadfiletest' element={<Tools.UploadFileTestExperiment settings={this.state.settings}/>}/>
        <Route path='/datavisualization' element={<Tools.DataVisualizationExperiment settings={this.state.settings}/>}/>
        <Route path='/iframetest' element={<Tools.IFrameTestExperiment settings={this.state.settings}/>}/>
        
        <Route path='/complexdatavisualization' element = {<Tools.ComplexDataVisualizationTool settings={this.state.settings}/>} />
        <Route path='/leafletexample' element = {<Tools.LeafleftExampleTool settings={this.state.settings}/>} />
        <Route path='/notifications' element = {<Tools.NotificationsDisplayTool settings={this.state.settings}/>} />
        <Route path='/totalorders' element = {<Tools.TotalOrdersTool settings={this.state.settings}/>} />
        <Route path='/etlcomponent' element = {<Tools.ETLComponentTool settings={this.state.settings}/>} />
        <Route path='/customiframe' element = {<Tools.CustomIFrameTool settings={this.state.settings}/>} />

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
              settings={this.state.settings}
            />}
          />}
        />
        {this.state.showAdminBoard && <Route path='/usermanagement' element = {<Tools.UserManagementTool />}/>}
        {this.state.showAdminBoard && 
        <Route path='/settings' element = 
            {<MainContent 
              key='Settings'
              title='Settings' 
              breadcrumpToolsetLink='/settings' 
              breadcrumpToolsetTitle='Settings'
              mainComponent= 
                {<GeneralSettings 
                  handleSettingsUpdate={this.handleSettingsUpdate}
                  settings={this.state.settings}
                />}
            />} 
          />}
        <Route path='/' element={<Tools.MainHome settings={this.state.settings}/>}/>
        <Route path='/logout' element={<Logout logOut={this.logOut} settings={this.state.settings}/>} />
      </Routes>
      
      </S.MainContent>
      <S.Footer collapsed={this.state.menuCollapse}>
          <S.ContainerFluid>
            <S.Row>
              Communication Monitor - Developed by NTUA
            </S.Row>
          </S.ContainerFluid>
        </S.Footer>
    
    
    
    </S.DashboardWrapper>
    </Fullscreen>
    
    
    
    }
    </ThemeProvider>
    </>
  )};
}
