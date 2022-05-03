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

const MenuItem = (props) => {
  return (
      <>
        <S.ListItem>
          <S.Item href="#">
            <S.ItemIcon src={User} alt="user" />
            {props.title}
          </S.Item>
          <img src={Arrow} alt="arrow" />
        </S.ListItem>
      </>
  )
}
const SubMenuItem = (props) => {
  return(
    <>
      <S.SubListItem>
            <S.SubItem href="#" className="active">
              {props.title}
            </S.SubItem>
          </S.SubListItem>
    </>
  )
}
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
        <S.ListHeader>
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

export default function AdminSidebar(props) {

  return (
    <ThemeProvider theme={defaultTheme}>
    <Sidebar>
      <SidebarHeader img={Logo} alt='communication monitor logo' className=''/>
        <MenuGroup title='Toolsets'>
          {AdminSidebarData.map((item, index) => {
            return <SubMenu item={item} key={index}/>;
          })}
        </MenuGroup>
        <MenuGroup title='Experiments'>
          {ExperimentsSidebarData.map((item, index) => {
            return <SubMenu item={item} key={index}/>;
          })}
          
        </MenuGroup>
    </Sidebar>
    </ThemeProvider>
  );
}
