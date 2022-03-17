import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
import { visualizationMenuItemsUser, visualizationMenuItemsAdmin, visualizationMenuItemsModerator, fusionMenuItemsUser, fusionMenuItemsModerator, fusionMenuItemsAdmin, menuUser } from "./menu-items";
//import icons from react icons
import { FaList, FaRegHeart, FaBezierCurve, FaCog, FaQuestion, FaBug, FaExclamationTriangle} from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
  
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import React from "react";

import { Link } from 'react-router-dom';
import { ENDPOINTS } from "../../constants";


export default class UserSidebar extends React.Component {

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
                        {menuUser}
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


