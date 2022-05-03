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
  font-size:12px;
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
  color: #696d8c;

  &.active {
    font-family: "Inter", -apple-system, "Segoe UI", "Roboto";
    color: #6837ef;
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
  color: #696d8c;
  padding-left: 18px;

  &.active {
    font-family: "Inter", -apple-system, "Segoe UI", "Roboto";
    color: #060213;
    font-weight: 500;
    position: relative;

    :before {
      content: "";
      position: absolute;
      width: 1px;
      height: 100%;
      left: 0;
      top: 0;
      background: #ecebf5;
    }
  }
`;
export const SidebarItem = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  color: #8590a5;

  &.active {
    font-family: "Inter", -apple-system, "Segoe UI", "Roboto";
    color: #6837ef;
    font-weight: 500;
  }
`;
export const SidebarLink = styled(Link)`
  display: flex;
  
  color: #8590a5;
  position: relative;
  font-size: 14px;
  
  font-family: "Inter",-apple-system, "Segoe UI", "Roboto";
  font-weight: 500;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
  
  padding: 0.625rem 1.5rem;
  
  &:hover {  
    color: #D7E6ED;
    cursor:pointer;
  }
  &:active {
    color: #8590a5;
  }
`;
export const SidebarAnchorLink = styled.a`
  display: flex;
  
  color: #8590a5;
  position: relative;
  font-size: 14px;
  
  font-family: "Inter",-apple-system, "Segoe UI", "Roboto";
  font-weight: 500;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
  
  padding: 0.625rem 1.5rem;
  
  &:hover {  
    color: #D7E6ED;
    cursor:pointer;
  }
  &:active {
    color: #8590a5;
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
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #8590a5;
  
  -webkit-font-smoothing: antialiased;
  
  &:hover {
    color: #D7E6ED;
    cursor: pointer;
  }
  &.active {
    color: #D7E6ED;
  }
`;
export const DropdownAnchorLink = styled.a`
  padding: 0.4rem 1.5rem 0.4rem 2.3rem;
  font-size: 13px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #8590a5;
  
  -webkit-font-smoothing: antialiased;
  
  &:hover {
    color: #D7E6ED;
    cursor: pointer;
  }
  &.active {
    color: #D7E6ED;
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