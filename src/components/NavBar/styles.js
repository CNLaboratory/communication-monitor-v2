import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: ${props => props.theme.sidebarWidth};
  height: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  transition: all 0.3s ease-in-out 0s;
`;
export const Container = styled.div`
  border-right: 1px solid #e1e1eb;
  height: 100vh;
  padding: 0.625rem 0.2rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 221px;
  height: 60px;
  
  border-radius: 8px;
  margin: 10px;
  
`;
export const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;
export const LogoImg = styled.img`
  width: 100%;
`;
export const ProfileInfo = styled.div`
  margin-left: 11px;
`;
export const Email = styled.div`
  color: #696d8c;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  
  padding: 10px;
`;
export const ListHeader = styled.span`
  display: block;
  text-transform: uppercase;
  font-family: "Inter", -apple-system, "Segoe UI", "Roboto";
  font-size:12px;
  font-weight: 600;
  letter-spacing: 0.55px;
  color: ${props => props.theme.sidebarLinkHeaderColor};
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0;
  width: 200px;
  &.dropdown {
    position: relative;
  }
`;
export const Item = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.sidebarLinkColor};
  font-weight: 500;
  &.active {
    font-family: "Inter", -apple-system, "Segoe UI", "Roboto";
    color: ${props => props.theme.sidebarLinkColorActive};
    font-weight: 500;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
export const ItemIcon = styled.img`
  padding-right: 19px;
`;

export const SubList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 12px 12px 20px;
  position: absolute;
  left: 0;
  top: 30px;
  
`;
export const SubListItem = styled.li`
  width: 100%;
  padding: 5px 0;
`;
export const SubItem = styled.a`
  display: block;
  color: ${props => props.theme.sidebarLinkColor};
  padding-left: 18px;
  font-weight: 500;
  letter-spacing: -0.02rem;
  &.active {
    font-family: "Inter", -apple-system, "Segoe UI", "Roboto";
    color: ${props => props.theme.sidebarLinkColorActive};
    font-weight: 500;
    position: relative;

  }
`;
export const SidebarItem = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.sidebarLinkColor};
  font-weight: 500;
  letter-spacing: -0.02rem;
  &.active {
    font-family: "Inter", -apple-system, "Segoe UI", "Roboto";
    color: ${props => props.theme.sidebarLinkColorActive};
    font-weight: 500;
  }
`;
export const SidebarLink = styled(Link)`
  display: flex;
  
  color: ${props => props.theme.sidebarLinkColor};
  position: relative;
  font-size: 14px;
  
  font-family: "Inter",-apple-system, "Segoe UI", "Roboto";
  font-weight: 500;
  letter-spacing: -0.02rem;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
  
  padding: 0.625rem 1.5rem;
  
  &:hover {  
    color: ${props => props.theme.sidebarLinkColorHover};
    cursor:pointer;
  }
  &:active {
    color: ${props => props.theme.sidebarLinkColorActive};
  }
`;
export const SidebarAnchorLink = styled.a`
  display: flex;
  
  color: ${props => props.theme.sidebarLinkColor};
  position: relative;
  font-size: 14px;
  
  font-family: "Inter",-apple-system, "Segoe UI", "Roboto";
  font-weight: 500;
  letter-spacing: -0.02rem;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
  
  padding: 0.625rem 1.5rem;
  
  &:hover {  
    color: ${props => props.theme.sidebarLinkColorHover};
    cursor:pointer;
  }
  &:active {
    color: ${props => props.theme.sidebarLinkColorActive};
  }
`;
export const SidebarLabel = styled.span`
  margin-left: 10px;
  font-smooth: auto;
  -webkit-font-smoothing: antialiased;
  
`;
export const DropdownLink = styled(Link)`
  padding: 0.4rem 1.5rem 0.4rem 2.3rem;
  font-size: 13px;
  font-family: 'Inter',-apple-system, 'Segoe UI', 'Roboto';
  font-weight: 500;
  display: flex;

  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.sidebarLinkColor};
  letter-spacing: -0.02rem;
  -webkit-font-smoothing: antialiased;
  
  &:hover {
    color: ${props => props.theme.sidebarLinkColorHover};
    cursor: pointer;
  }
  &.active {
    color: ${props => props.theme.sidebarLinkColorActive};
  }
`;
export const DropdownAnchorLink = styled.a`
  padding: 0.4rem 1.5rem 0.4rem 2.3rem;
  font-size: 13px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.sidebarLinkColor};
  font-family: 'Inter',-apple-system, 'Segoe UI', 'Roboto';
  font-weight: 500;
  letter-spacing: -0.02rem;
  -webkit-font-smoothing: antialiased;
  
  &:hover {
    color: ${props => props.theme.sidebarLinkColorHover};
    cursor: pointer;
  }
  &.active {
    color: ${props => props.theme.sidebarLinkColorActive};
  }
`;
export const SidebarLinkArrow = styled.img`

  -webkit-transform: rotate(${props => props.rotate ? props.rotate : 0});
  transform: rotate(${props => props.rotate ? props.rotate : 0});
  transition: all .4s;
`;
export const DropdownWrapper = styled.div`
  max-height: ${props => props.maxHeight};
  overflow: hidden;
  transition: max-height .4s;

`;