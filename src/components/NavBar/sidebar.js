import React from "react";
import * as S from "./styles";
import Calendar from "../../assets/icons/calendar-nav.png";

import Time from "../../assets/icons/time.png";
import User from "../../assets/icons/user.png";
import Shape from "../../assets/icons/shape.png";
import Arrow from "../../assets/icons/arrow-right.png";
import Logo from "../../assets/images/commonitor-logo.svg"
import SubMenu from "./subMenu";
import { AdminSidebarData, ExperimentsSidebarData } from "./sidebarData";
import { ENDPOINTS } from "../../constants";
import { ThemeProvider } from "styled-components";


const SidebarHeader = (props) => {
  return(
    <>
      <S.Profile>
        <S.LogoImg src={props.img} alt={props.alt} className={props.className}></S.LogoImg>
      </S.Profile>
    </>
  )
}
const MenuGroup = (props) => {
  return(
    <>
      <S.List>
        <S.ListHeader key={props.key}>
          {props.title}
        </S.ListHeader>
        
        {props.children}
      </S.List>
    </>
  )
}
const Sidebar = (props) => {
  return(
    <>
      <S.Wrapper>
        <S.Container>
          {props.children}
        </S.Container>
      </S.Wrapper>
    </>

  )
}
const defaultTheme = {
  sidebarWidth: '262px'
}
const defaultCollapsedTheme = {
  sidebarWidth: 0
}

export default function AdminSidebar(props) {

  return (
    <>
    
    <ThemeProvider theme={props.collapsed ? defaultCollapsedTheme : defaultTheme}>
    <Sidebar>
      <SidebarHeader img={Logo} alt='communication monitor logo' className=''/>
        <MenuGroup title='Toolsets' key='toolsets'>
          {AdminSidebarData.map((item, index) => {
            return <SubMenu item={item} key={index}/>;
          })}
        </MenuGroup>
        <MenuGroup title='Experiments' key='experiments'>
          {ExperimentsSidebarData.map((item, index) => {
            return <SubMenu item={item} key={index}/>;
          })}  
        </MenuGroup>
    </Sidebar>
    </ThemeProvider>
    </>
  );
}
