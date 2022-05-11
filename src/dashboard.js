import React, {useState, useRef, useEffect} from "react";
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
import SubMenu from "./components/NavBar/subMenu";
import { AdminSidebarData, ExperimentsSidebarData } from "./components/NavBar/sidebarData";

import { FullScreen, useFullScreenHandle } from "react-full-screen";
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

const defaultTheme = {
  sidebarWidth: '262px'
}
const defaultCollapsedTheme = {
  sidebarWidth: '0px'
}

export function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState();
  const userMenu = useRef(null);

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showModeraborBoard, setShowModeratorBoard] = useState(false);

  
  
  const logIn = () => {
    const user = AuthService.getCurrentUser();

    if(user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setLoggedIn(true);
    }
  }
  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setLoggedIn(false);
  }

  useEffect(() => {
    if (!loggedIn) {
      logIn();
    }
  }) 

  const handleMenuCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }
  const [isHovered, setIsHovered] = useState(false);
  const changeIsHovered = () => {
    setIsHovered(!isHovered);
  }
  const [userMenuClicked, setUserMenuClicked] = useState(false);
  const handleUserMenuClicked = () => {
    setUserMenuClicked(!userMenuClicked);
  }
  const handleFullScreenEnter = useFullScreenHandle();

  const MenuGroup = (props) => {
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
  const handleMenuItemClick = (item) => {
    console.log('handleMenuClick item:', item);
    (activeItem === item) ? setActiveItem('') : setActiveItem(item);
      
  }
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  const closeUserMenu = (e)=>{
    if(userMenu.current && userMenuClicked && !userMenu.current.contains(e.target)){
      setUserMenuClicked(false)
    }
  }

  document.addEventListener('mousedown',closeUserMenu);


  //Live Notifications
  const [itemData, setItemData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [messagesTable, setMessagesTable] = useState({});
  const [readTable, setReadTable] = useState({});
  const [readKeyTable, setReadKeyTable] = useState({});
  const [isNotificationsDataLoaded, setIsNotificationsDataLoaded] = useState(false);
  const [isNotificationsDataTransfering, setIsNotificationsDataTransfering] = useState(false);
  
  
  

  const markNotificationAsRead = (rowId) => {
    console.log('notifications - markAsRead called');
    let messagesTable = this.state.messagesTable;
    
    let key = this.state.readKeyTable[rowId];
    messagesTable[key] = !messagesTable[key];

    let readTable = this.state.readTable;
    readTable[rowId] = !readTable[rowId];

    this.setState({
      readTable: readTable,
      messagesTable: messagesTable
    })

  }
  const refreshNotificationData = () => {
    NotificationsBackgroundService.getProductData();
  }
  const markAllAsRead = () => {
    NotificationsBackgroundService.markAllAsRead();
  }

  return (
    <>
    { !loggedIn && <S.LogInScreenWrapper>
      <LoginOne logIn={logIn}/>
      </S.LogInScreenWrapper>}
    { loggedIn && <S.DashboardWrapper>
    <FullScreen handle={handleFullScreenEnter}>
    <ThemeProvider theme={isCollapsed ? defaultCollapsedTheme : defaultTheme }>
      <S.PageTopbar>
        <S.NavbarHeader>
          <S.dFlex>
            <S.BrandWrapper>
              <Link to='/'>
              <S.BrandImage src={Logo} alt='logo' className='logo'></S.BrandImage>
              </Link>
            </S.BrandWrapper>
            <S.MenuIconWrap onMouseEnter={changeIsHovered} onMouseLeave={changeIsHovered} onClick={handleMenuCollapse}>
              <S.MenuIconLine style={isHovered ? {width: '22px'} : {width: '18px'}}></S.MenuIconLine>
              <S.MenuIconLine></S.MenuIconLine>
              <S.MenuIconLine style={isHovered ? {width: '22px'} : {width: '18px'}}></S.MenuIconLine>
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
            <S.IconWrap>{isFullScreen 
              ? <RiFullscreenLine onClick={handleFullScreenEnter.exit}/> 
              : <RiFullscreenLine onClick={handleFullScreenEnter.enter}/>
              }</S.IconWrap>
              <Link to='notifications'>
            <S.IconWrap>
              <RiNotification3Line/>
              <S.NotificationBellRedNotice></S.NotificationBellRedNotice>
            </S.IconWrap>
            </Link>
            <S.UserWrap>
              <S.UserProfile onClick={handleUserMenuClicked}>
                <S.UserAvatar src={Avatar} alt='user image'/>
                <S.UserName>Admin</S.UserName>
                <S.ButtonArrow><BiChevronDown/></S.ButtonArrow>
              </S.UserProfile>
              <S.UserDropdown ref={userMenu} style={{display: userMenuClicked ? 'block' : 'none'}}>
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
            <S.IconWrap><RiSettings2Line/></S.IconWrap>
          </S.dFlex>
        </S.NavbarHeader>
      </S.PageTopbar>
      
      <S.VerticalMenuWrapper>
        <SimpleBar style={{ height: '100%', maxHeight: '100%' }}>
          <S.VerticalMenu>
            <MenuGroup title='Toolsets'>
              <SubMenu sidebarData={AdminSidebarData}/>
              {/*AdminSidebarData.map((item, index) => {
                console.log('adminsidebar created');
                return <SubMenu item={item} key={index} active={(activeItem===item) ? true : false} handleClick={handleMenuItemClick}/>
              })*/}
            </MenuGroup>
            <MenuGroup title='Experiments'>
            <SubMenu sidebarData={ExperimentsSidebarData}/>
              {/*ExperimentsSidebarData.map((item, index) => {
                return <SubMenu item={item} key={index}/>;
              })*/}
              
            </MenuGroup>
          
          </S.VerticalMenu>
        
          
        </SimpleBar>
      </S.VerticalMenuWrapper>

      {<NotificationContainer/>}
      {<NotificationsBackgroundService
        API_URL={'https://communicationmonitor.cn.ntua.gr:5000/kafkatorest'} 
        autoRefreshEnabled={true} 
        refreshInterval={10000}
            />}
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
        <Route path='/newnotifications' element = 
        { <Tools.NewNotificationsDisplayTool
          refreshData = {refreshNotificationData}
            
        />} />
      </Routes>
      
    </ThemeProvider>
    </FullScreen>
    <Routes>
          <Route path='/logout' element={<Logout logOut={logOut}/>} />
        </Routes>
    </S.DashboardWrapper>
    
    }
    </>
  );
}

export default function DashboardLayout1() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleMenuCollapse = () => {
    
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
    <ThemeProvider theme={isCollapsed ? defaultCollapsedTheme : defaultTheme }>
    <S.Container>
      <AdminSidebar collapsed={isCollapsed}/>
      <S.Main>
        <header>
          <TopBar handleMenuCollapse={handleMenuCollapse}/>
          <Tab />
        </header>
        
      </S.Main>
    </S.Container>
    </ThemeProvider>
    {/* Routes */}
    
    </>
  );
}