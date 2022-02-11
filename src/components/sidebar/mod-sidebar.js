import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
  
//import icons from react icons
import { FaList, FaRegHeart, FaBezierCurve, FaCog, FaQuestion, FaBug, FaExclamationTriangle} from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { SiDynamics365 } from 'react-icons/si';
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
  
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import React from "react";

import { Link } from 'react-router-dom';

const API_URL_VISUALIZEDISTANCES = 'https://communicationmonitor.cn.ntua.gr:5000/visualizedistances';
const API_URL_VISUALIZETAMPERING = 'https://communicationmonitor.cn.ntua.gr:5000/visualizedrivertampering';
const API_URL_VISUALIZETRANSACTIONS = 'https://communicationmonitor.cn.ntua.gr:5000/visualizetransactions';

export default class UserSidebar extends React.Component {

    constructor(props) {
        super(props);

        this.handleClickDistances = this.handleClickDistances.bind(this);
    }

    handleClickDistances() {
        window.open(API_URL_VISUALIZEDISTANCES, '_blank');
    }
    handleClickTransactions() {
        window.open(API_URL_VISUALIZETRANSACTIONS, '_blank');
    }
    handleClickDriveTampering() {
        window.open(API_URL_VISUALIZETAMPERING, '_blank');
    }


    render() {
        return (
            <ProSidebar >
                <SidebarHeader>
                    <div className="logotext">
                        {/* small and big change using menucollapse state */}
                        <img
                            src="common1.546da79d.svg"
                            alt="logo-img"
                            className="logo-img"
                        />
                        
                        
                    </div>
            
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        {/*
                        <MenuItem active={true} >
                            Home <Link to={"/"} />
                        </MenuItem>
                        */}
                        <SubMenu title='Visualization Toolset' icon={<FaBezierCurve />}>
                            <MenuItem >Transactions Monitor<Link to={"/transactionsdepiction"} /></MenuItem>
                            <MenuItem >Sensors Depiction<Link to={"/sensorsdepiction"} /></MenuItem>
                            <MenuItem onClick={this.handleClickDistances}>Visualize Distances</MenuItem>
                            <MenuItem onClick={this.handleClickTransactions}>Visualize Transactions</MenuItem>
                            <MenuItem onClick={this.handleClickDriveTampering}>Visualize Drive Tampering</MenuItem>
                        </SubMenu>
                        <SubMenu title='Fusion Toolset' icon={<FaCog />}>
                            <MenuItem >Abnormal Detection<Link to={"/abnormaldetection"} /></MenuItem>
                            <MenuItem >Driver Tampering<Link to={"/drivertampering"} /></MenuItem>
                            <MenuItem >Driver Tampering Details<Link to={"/drivertamperingdetails"} /></MenuItem>
                        </SubMenu>
                        <SubMenu title='Advanced Reasoner Toolset' icon={<FaQuestion />}>
                            <MenuItem >Suspicious Transactions<Link to={"/reasoning1"} /></MenuItem>
                            <MenuItem >Suspicious Combinations<Link to={"/reasoning2"} /></MenuItem>
                            <MenuItem >GSM & Antenna Status<Link to={"/reasoning3"} /></MenuItem>
                            <MenuItem >GPS Deviations<Link to={"/reasoning4"} /></MenuItem>
                            <MenuItem >Higher GPS Deviations<Link to={"/reasoning5"} /></MenuItem>
                            <MenuItem >Door & Temp Status<Link to={"/reasoning6"} /></MenuItem>
                            <MenuItem >Broken Door Status<Link to={"/reasoning6"} /></MenuItem>
                        </SubMenu>
                        <MenuItem icon={<FaBug />}>Threat and Incident Complex Event Toolset<Link to={'/alertlogger'} /></MenuItem>
                        <MenuItem icon={<FaExclamationTriangle/>}>Alert Logger<Link to={'/alertlogger'} /></MenuItem>
                        <MenuItem icon={<SiDynamics365/>}>Dynamic API<Link to={'/dynamicapi'} /></MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="square">
                        <MenuItem onClick={this.props.logOut}>Logout <Link to={"/"} /></MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        );
    }
}

