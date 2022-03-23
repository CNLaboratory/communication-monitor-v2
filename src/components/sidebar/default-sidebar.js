import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
  
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import React from "react";

import { Link } from 'react-router-dom';

export default class DefaultSidebar extends React.Component {

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
                <Menu iconShape="square">
                        <MenuItem >Login <Link to={"/login"} /></MenuItem>
                    </Menu>
                    
                </SidebarContent>
                <SidebarFooter>
                    <Menu>
                        <MenuItem>
                            Home <Link to={"/"} />
                        </MenuItem>
                        
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        );
    }
}

