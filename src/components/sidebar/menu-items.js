import React from 'react';
import { ENDPOINTS } from "../../constants";
import {
    SubMenu,
    MenuItem
  } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import { FaBezierCurve, FaCog, FaQuestion, FaBug, FaExclamationTriangle} from "react-icons/fa";
import { SiDynamics365 } from 'react-icons/si';


export const visualizationMenuItemsUser = [
    <MenuItem >{ENDPOINTS.transactionsdepiction.menuTitle}<Link to={"/transactionsdepiction"} /></MenuItem>,
    <MenuItem >{ENDPOINTS.sensorsdepiction.menuTitle}<Link to={"/sensorsdepiction"} /></MenuItem>,
    <MenuItem onClick={()=> window.open(ENDPOINTS.visualizedistances.url, '_blank')}>{ENDPOINTS.visualizedistances.menuTitle}</MenuItem>,
    <MenuItem onClick={()=> window.open(ENDPOINTS.visualizetransactions.url, '_blank')}>{ENDPOINTS.visualizetransactions.menuTitle}</MenuItem>,
    <MenuItem onClick={()=> window.open(ENDPOINTS.visualizedrivertampering.url, '_blank')}>{ENDPOINTS.visualizedrivertampering.menuTitle}</MenuItem>,
    <MenuItem onClick={()=> window.open(ENDPOINTS.transactionsgraph.url, '_blank')}>{ENDPOINTS.transactionsgraph.menuTitle}</MenuItem>,
    <MenuItem onClick={()=> window.open(ENDPOINTS.abnormalgraph.url, '_blank')}>{ENDPOINTS.abnormalgraph.menuTitle}</MenuItem>,
    
];
export const visualizationMenuItemsModerator = [
    
];
export const visualizationMenuItemsAdmin = [
    
];

export const fusionMenuItemsUser = [
    <MenuItem >{ENDPOINTS.abnormaldetection.menuTitle}<Link to={"/abnormaldetection"} /></MenuItem>,
    <MenuItem >{ENDPOINTS.drivertampering.menuTitle}<Link to={"/drivertampering"} /></MenuItem>,
    <MenuItem >{ENDPOINTS.drivertamperingdetails.menuTitle}<Link to={"/drivertamperingdetails"} /></MenuItem>
];
export const fusionMenuItemsModerator = [
    
];
export const fusionMenuItemsAdmin = [
    
];

export const reasonerMenuItemsUser = [
    <MenuItem >{ENDPOINTS.reasoning1.menuTitle}<Link to={"/reasoning1"} /></MenuItem>,
    <MenuItem >{ENDPOINTS.reasoning2.menuTitle}<Link to={"/reasoning2"} /></MenuItem>,
    <MenuItem >{ENDPOINTS.reasoning3.menuTitle}<Link to={"/reasoning3"} /></MenuItem>,
    <MenuItem >{ENDPOINTS.reasoning4.menuTitle}<Link to={"/reasoning4"} /></MenuItem>,
    <MenuItem >{ENDPOINTS.reasoning5.menuTitle}<Link to={"/reasoning5"} /></MenuItem>,
    <MenuItem >{ENDPOINTS.reasoning6.menuTitle}<Link to={"/reasoning6"} /></MenuItem>,
    <MenuItem >{ENDPOINTS.reasoning7.menuTitle}<Link to={"/reasoning7"} /></MenuItem>
];
export const reasonerMenuItemsModerator = [
    
];
export const reasonerMenuItemsAdmin = [
    
];

export const menuUser = [
    <SubMenu title='Visualization Toolset' icon={<FaBezierCurve />}>
        {visualizationMenuItemsUser}
        
    </SubMenu>,
    <SubMenu title='Fusion Toolset' icon={<FaCog />}>
        {fusionMenuItemsUser}
       
    </SubMenu>,
    <SubMenu title='Advanced Reasoner Toolset' icon={<FaQuestion />}>
        {reasonerMenuItemsUser}
        
    </SubMenu>,
    <MenuItem icon={<FaBug />}>{ENDPOINTS.threatandincident.menuTitle}<Link to={'/alertlogger'} /></MenuItem>,
    <MenuItem icon={<FaExclamationTriangle/>}>{ENDPOINTS.alertlogger.menuTitle}<Link to={'/alertlogger'} /></MenuItem>
];

export const menuModerator = [
    <SubMenu title='Visualization Toolset' icon={<FaBezierCurve />}>
        {visualizationMenuItemsUser}
        {visualizationMenuItemsModerator}
    </SubMenu>,
    <SubMenu title='Fusion Toolset' icon={<FaCog />}>
        {fusionMenuItemsUser}
        {fusionMenuItemsModerator}
    </SubMenu>,
    <SubMenu title='Advanced Reasoner Toolset' icon={<FaQuestion />}>
        {reasonerMenuItemsUser}
        {reasonerMenuItemsModerator}
    </SubMenu>,
    <MenuItem icon={<FaBug />}>{ENDPOINTS.threatandincident.menuTitle}<Link to={'/alertlogger'} /></MenuItem>,
    <MenuItem icon={<FaExclamationTriangle/>}>{ENDPOINTS.alertlogger.menuTitle}<Link to={'/alertlogger'} /></MenuItem>,
    
];


export const menuAdmin = [
    <SubMenu title='Visualization Toolset' icon={<FaBezierCurve />}>
        {visualizationMenuItemsUser}
        {visualizationMenuItemsModerator}
        {visualizationMenuItemsAdmin}
    </SubMenu>,
    <SubMenu title='Fusion Toolset' icon={<FaCog />}>
        {fusionMenuItemsUser}
        {fusionMenuItemsModerator}
        {fusionMenuItemsAdmin}
    </SubMenu>,
    <SubMenu title='Advanced Reasoner Toolset' icon={<FaQuestion />}>
        {reasonerMenuItemsUser}
        {reasonerMenuItemsModerator}
        {reasonerMenuItemsAdmin}
    </SubMenu>,
    <MenuItem icon={<FaBug />}>{ENDPOINTS.threatandincident.menuTitle}<Link to={'/alertlogger'} /></MenuItem>,
    <MenuItem icon={<FaExclamationTriangle/>}>{ENDPOINTS.alertlogger.menuTitle}<Link to={'/alertlogger'} /></MenuItem>,
    <MenuItem icon={<SiDynamics365/>}>Dynamic API<Link to={'/dynamicapi'} /></MenuItem>,
    <MenuItem icon={<SiDynamics365/>}>{ENDPOINTS.ordertrack.menuTitle}<Link to={'/ordertrack'} /></MenuItem>,
    
];

export const menuFooterAdmin = [
    <MenuItem>User Management<Link to={'/usermanagement'} /></MenuItem>
]