import {
    ProSidebar,
    Menu,
    MenuItem,
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

export default class DefaultSidebar extends React.Component {

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
                        
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="square">
                        <MenuItem >Login <Link to={"/login"} /></MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        );
    }
}

