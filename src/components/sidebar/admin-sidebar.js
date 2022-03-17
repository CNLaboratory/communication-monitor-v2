import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
  
import "react-pro-sidebar/dist/css/styles.css";
import React from "react";

import { Link } from 'react-router-dom';
import { menuAdmin, menuFooterAdmin } from "./menu-items";

export default class AdminSidebar extends React.Component {

    render() {
        return (
            <ProSidebar >
                <SidebarHeader>
                    <div className="logotext">
                        
                        <img
                            src="common1.546da79d.svg"
                            alt="logo-img"
                            className="logo-img"
                        />
                    </div>
            
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        {menuAdmin}
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="square">
                        {menuFooterAdmin}
                        <MenuItem onClick={this.props.logOut}>Logout <Link to={"/"} /></MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        );
    }
}

