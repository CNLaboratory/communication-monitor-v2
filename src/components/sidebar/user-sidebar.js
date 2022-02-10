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
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
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
                        <p>NTUA - Communications Monitor</p>
                    </div>
            
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem active={true} >
                            Home <Link to={"/"} />
                        </MenuItem>
                        
                        <SubMenu title='Visualization Toolset'>
                            <MenuItem >Transactions Monitor<Link to={"/transactionsdepiction"} /></MenuItem>
                            <MenuItem >Sensors Depiction<Link to={"/sensorsdepiction"} /></MenuItem>
                            <MenuItem onClick={this.handleClickDistances}>Visualize Distances</MenuItem>
                            <MenuItem onClick={this.handleClickTransactions}>Visualize Transactions</MenuItem>
                            <MenuItem onClick={this.handleClickDriveTampering}>Visualize Drive Tampering</MenuItem>
                        </SubMenu>
                        <SubMenu title='Fusion Toolset'>

                        </SubMenu>
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

