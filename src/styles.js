import styled, {css} from "styled-components";
import {Link} from 'react-router-dom';
import {
  Button, 
  Form
} from 'react-bootstrap'

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const Main = styled.div`
  width: calc(100% - ${props => props.theme.sidebarWidth});
  padding-bottom: 50px;
`;
/*
export const Main = styled.div`
  width: calc(100% - '${props => props.theme.sidebarWidth}');
  padding-bottom: 50px;
`;
*/
export const PageTopbar = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1002;
  background-color: #252b3b;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  

  ${props => props.collapsed && css`
    left: -240px;
  `}
  transition: left .15s ease-in-out;

`;
export const NavbarHeader = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
  margin: 0 auto;
  height: 70px;
  padding: 0 12px 0 0;
`;
export const dFlex = styled.div`
  display: -webkit-flex!important;
  display: flex!important;
  align-items: center;
`;
export const BrandWrapper = styled.div`
  padding: 0 1.5rem;
  width: 240px;

  ${props => props.collapsed && css`
    
    width: 0px;
    padding:0;
    
  `}
  transition: width .15s ease-in-out;
`;
export const BrandImage = styled.img`
  width: 100%;
`;
export const MenuIconWrap = styled.div`
  display: inline-block;
  left: 0px;
  position: relative;
  
  color: #EAECEF;
  font-size: 28px;
  padding-right: 2rem;
  padding-left: 1rem;
  
  width: 22px;
  z-index: 999;
  
`;
export const MenuIconLine = styled.span`
  width: 22px;
  background: #e9ecef;
  display: block;
  height: 2px;
  border-radius: 3px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: auto;
  transition: all 0.3s ease-in-out;
`;
export const IconWrap = styled.div`
  position:relative;
  margin-left: 0.25rem!important;
  font-size: 22px;
  color: #e9ecef;
  font-weight: 400;
  line-height: 1.5;
  padding: 0.47rem 0.75rem;
`;
export const SearchFieldFormWrap = styled.form`
  padding: 16px 10px;
  display: block;
`;
export const SearchFieldInputWrap = styled.div`
  position: relative ;
`;
export const SearchFieldFormInput = styled.input`
  border: none;
  height: 38px;
  padding-left: 40px;
  padding-right: 20px;
  background-color: rgba(241,245,247,.07);
  color: #fff;
  
  box-shadow: none;
  border-radius: 30px;
  display: block;
  padding: 0.47rem 2.75rem;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &::placeholder {
    
    color: #9A9CA4;
  }
`;
export const SearchFieldInputSearchIcon = styled.span`
  position: absolute;
  color: #9A9CA4;
  z-index: 10;
  font-size: 16px;
  line-height: 38px;
  left: 13px;
  top: 2px;
  
`;
export const UserWrap = styled.div`
  display: flex;
  align-items:center;
  position: relative;
`;
export const UserProfile = styled.button`
  display: flex!important;
  align-items:center;
  
  font-weight: 400;
  font-size: .9rem;

  color: #505d69;
  background-color: transparent;

  text-align: center;
  
  cursor: pointer;
  
  border: 1px solid transparent;
  border-radius: 0.25rem;
  padding: 0.47rem 0.75rem;
  
  position: relative;
  
  display: inline-block;
  overflow: hidden;

  height: 70px;
  box-shadow: none!important;
  
  
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
export const UserAvatar = styled.img`
  
  height: 36px;
  width: 36px;
  background-color: #f1f5f7;
  padding: 3px;
  
  border-radius: 50%;
  margin-right: 0.25rem;
`;
export const UserName = styled.span`
  text-transform: none;
  margin-left: 0.25rem;
  line-height: 16px;
  
  color: #e9ecef;
`;
export const ButtonArrow = styled.span`
  
  color: #e9ecef;
`;
export const UserDropdown = styled.div`
    display:none;
    min-width: 10rem;
    padding: 0.5rem 0;
    font-size: .9rem;
    color: #505d69;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 0 solid rgba(0,0,0,.15);
    border-radius: 0.25rem;
    box-shadow: 0 5px 12px rgb(0 0 0 / 10%);
    -webkit-animation-name: DropDownSlide;
    animation-name: DropDownSlide;
    -webkit-animation-duration: .3s;
    animation-duration: .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    margin: 0;
    right: 0;
    left: auto;
    z-index: 1000;
    
    position: absolute;
    will-change: transform;
    transform: translate3d(0px, 70px, 0px);
    top: 100%;

    @keyframes DropDownSlide {
      100% {
          -webkit-transform: translateY(0);
          transform: translateY(0);
      }
      0% {
          -webkit-transform: translateY(10px);
          transform: translateY(10px);
          } 
    }
`;

export const DropdownItem = styled.a`
  top: 100%!important;
  width: 100%;
  padding: 0.35rem 1.5rem;
  clear: both;
  display: block;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
`;
export const DropdownItemLink = styled(Link)`
  top: 100%!important;
  width: 100%;
  padding: 0.35rem 1.5rem;
  clear: both;
  display: block;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
`;
export const DropdownDivider = styled.div`
  border-top-color: #eff2f7;
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #eff2f7;
`;
export const DropdownIcon = styled.span`
  display: inline-block;
  padding-top: 2px;
  margin-right: 0.25rem!important;
  vertical-align: middle!important;
`;

export const TableSettingsPanel = styled.div`
  display: none;
  flex-direction: column;
  min-width: 10rem;
  
  
  font-size: .9rem;
  color: #505d69;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid rgba(0,0,0,.15);
  border-radius: 0.25rem;
  box-shadow: 0 5px 12px rgb(0 0 0 / 10%);
  -webkit-animation-name: DropDownSlide;
  animation-name: DropDownSlide;
  -webkit-animation-duration: .3s;
  animation-duration: .3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  margin: 0;
  top:100px;
  right: 50px;
  z-index: 10002;
  position: absolute;
  will-change: transform;
  transform: translate3d(0px, 70px, 0px);
    
  @keyframes DropDownSlide {
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    0% {
        -webkit-transform: translateY(10px);
        transform: translateY(10px);
        } 
  }
`;
export const SettingWrapper = styled.div`
  position: relative;
  text-align: left;
  padding: 1rem;
  border-bottom: solid 1px #eff2f7;
  display: block;
  min-height: 1.35rem;  
  cursor: pointer;
`
export const ToggleSwitchInput = styled.input.attrs({type: 'checkbox'})`
  background-position: 0%;
  background-image: url(${props => props.imageDark});
  width: 2em;
  margin-right: 1em;  
  border-radius: 2em;
  float: left;
  transition: background-position .15s ease-in-out;
  cursor: pointer;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid rgba(0,0,0,.25);
  -webkit-appearance: none;
  appearance: none;

  :checked {
    background-image: url(${props => props.image});
    background-position: 100%;
    background-color: #5664d2;
    border-color: #5664d2;
  }
`
export const ToggleSwitchLabel = styled.label`
  cursor: pointer;
  
  font-weight: 600;
`


export const VerticalMenuWrapper = styled.div`
  width: 240px;
  z-index: 1001;
  background: #252b3b;
  bottom: 0;
  margin-top: 0;
  position: fixed;
  top: 70px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);  
  left:0;
  ${props => props.collapsed && css`
    left: -240px;
    
  `}
  transition: left .15s ease-in-out;
`;
export const VerticalMenu = styled.div`
  direction: inherit;
    
  position: relative;
  display: block;
  height: 100%;
  width: auto;
  overflow: auto;
  max-width: 100%;
  max-height: 100%;
  
  padding: 10px 0 30px;

    
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  
  padding-left: 0;
  list-style: none;
`;
export const ListHeader = styled.li`
  display: block;
  width: 100%;
  padding: 12px 20px!important;
  letter-spacing: .05em;
  pointer-events: none;
  cursor: default;
  font-size: 11px;
  text-transform: uppercase;
  color: #8590a5;
  font-weight: 600;
  font-family: "Inter",sans-serif;
  opacity: .5;
  
`;

export const MainContent = styled.div`
  margin-left: 240px;
  overflow: hidden;

  ${props => props.collapsed && css`
    margin-left: 0px;
    
  `}
  transition: margin-left 0.15s ease-in-out;
`;
export const PageContent = styled.div`
  padding: 94px 12px 60px;
`;
export const Footer = styled.footer`
display: block;
  bottom: 0;
  padding: 20px 12px;
  font-size: 13px;
  position: fixed;
  right: 0;
  color: #74788d;
  left: 240px;
  height: 60px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  background-color: #fff;
`;
export const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 12px;
  padding-right: var(--bs-gutter-x,12px);
  padding-left: 12px;
  padding-left: var(--bs-gutter-x,12px);
  margin-right: auto;
  margin-left: auto;
`;
export const Row = styled.div`
  --bs-gutter-x: 24px;
  --bs-gutter-y: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y)*-1);
  margin-right: calc(var(--bs-gutter-x)/-2);
  margin-left: calc(var(--bs-gutter-x)/-2);

  & >* {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x)/2);
  padding-left: calc(var(--bs-gutter-x)/2);
  margin-top: var(--bs-gutter-y);
  }
`;
export const Col12 = styled.div`
  width: 100%;
  flex: 0 0 auto;
  max-width: 100%;
    padding-right: calc(var(--bs-gutter-x)/2);
    padding-left: calc(var(--bs-gutter-x)/2);
    margin-top: var(--bs-gutter-y);
`;
export const PageContentHeader = styled.div`
  padding-bottom: 24px;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;
export const PageContentHeaderTitle = styled.h4`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0;
`;
export const BreadCrumpsWrapper = styled.div`

`;
export const BreadCrumpsNav = styled.nav`
  display: block;
`;
export const BreadCrumpList = styled.ol`
  display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    
    list-style: none;
    vertical-align: middle;
`;
export const BreadCrumpItem = styled.li`
  display: list-item;
  line-height: 11px;
  padding: 0px 2px;
  vertical-align: middle;
`;
export const BreadCrumpLink = styled(Link)`
  font-size: 13px;
  color: #505d69;
`;
export const BreadCrumpIcon = styled.span`
  font-size: 13px;
  color: #505d69;
`;
export const Card = styled.div`
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  position: relative;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid #f1f5f7;
    border-radius: 0.25rem;
`;
export const CardBody = styled.div`
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
`;
export const CardTitle = styled.div`
  font-size: 15px;
  margin: 0 0 7px;
  font-weight: 500;
  margin-bottom: 1.5rem!important;
`;
export const MainContentTabsWrapper = styled.div`
  display: flex;
  
  margin-bottom: 20px;
`;
export const MainContentTab = styled.div`
  
  padding: 15px;
  
`;
export const MainContentTabLink = styled.div`
  font-size: 18px;
  color: #696D8C;
  font-weight: 500;
  padding-bottom: 10px;
  cursor: pointer;
  
  &.active {
    color: #252B3B;
    border-bottom: 2px solid #252B3B;
  }
  
`;

export const UserManagementWrapper = styled.div`

`;

export const StyledOutlineButton = styled.button`
  margin-bottom: 12px;
  margin-left: 8px;
  color: #5664d2;
  border-color: #5664d2;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #505d69;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid;
  padding: 0.47rem 0.75rem;
  font-size: .9rem;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

export const StyledButtonPrimary = styled.button`
  color: #fff;
  background-color: #5664d2;
  border-color: #5664d2;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  padding: 0.47rem 0.75rem;
  
  font-size: 0.9rem;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
export const StyledButtonLight = styled.button`
  
  color: #000;
  background-color: #eff2f7;
  border-color: #eff2f7;
  border: 1px solid #e8ecf4;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  padding: 0.3rem 0.4rem;
  padding-bottom: 0;
  font-size: 1.2rem;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
export const StyledButtonGrey = styled.button`
  
  color: #fff;
  background-color: #74788d;
  border-color: #74788d;
  border: 1px solid #74788d;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  padding: 0.3rem 0.4rem;
  padding-bottom: 0;
  font-size: 1.2rem;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
export const MultipleButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: -40px;
  margin-right: 20px;
`;
export const ButtonWrapper = styled.div`
  margin:5px;
`;
export const GlobalFilterWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  
  margin-bottom: 1rem;
`
export const GlobalFilterLabel = styled.label`
  padding-top: calc(0.47rem + 1px);
  padding-bottom: calc(0.47rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
  flex: 0 0 auto;
  width: 16.66667%;
`
export const GlobalFilterInput = styled.input`
  display: block;
    
  padding: 0.47rem 0.75rem;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #505d69;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 30px;

  padding-left: 40px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  
  &:focus {
    color: #505d69;
    background-color: #fff;
    border-color: #b1bbc4;
    outline: 0;
    box-shadow: none;
  }
`

export const ResponsiveTableWrapper = styled.div `
  overflow-x: auto;
`;
export const TableResponsive = styled.table `
  border: 1px solid #eff2f7;
  width: 100%;
  color: #505d69;
  border-color: #eff2f7;
  font-size: 14.4px;
  text-align: left;
  border-collapse: collapse;
`;
export const TableResponsiveTHead = styled.thead `
  border: 0 solid;
  border-color: inherit;
  padding: 0.75rem;
`;
export const TableResponsiveTRow = styled.tr`
  border-width: 1px 0;
`;
export const TableResponsiveTRowStripped = styled.tr`
  border-width: 1px 0;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
export const TableResponsiveTHeaderColumn = styled.th`
  
  font-weight: 600;
  padding: 0.75rem;
  border: 1px solid #eff2f7;
  
  
`
export const TableResponsiveTColumn = styled.th`
  border: 1px solid #eff2f7;
  font-weight: 400;
  padding: 0.75rem;
  white-space: nowrap;
`
export const TableResponsiveTBody = styled.tbody`
  
`

export const DisplayTableWrapper = styled.div`
  margin-top: 20px;
`

// React Table
export const ReactTableWrapper = styled.div `
  overflow-x: auto;
  ${({ maxHeight }) => maxHeight && `
    max-height: ${maxHeight};
  `}
`;
export const ReactTable = styled.table `
  --bs-table-bg: transparent;
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: #505d69;
    --bs-table-striped-bg: #f8f9fa;
    --bs-table-active-color: #505d69;
    --bs-table-active-bg: #f8f9fa;
    --bs-table-hover-color: #505d69;
    --bs-table-hover-bg: #f8f9fa;
    width: 100%;
    margin-bottom: 1rem;
    color: #505d69;
    vertical-align: top;
    border-color: #eff2f7;
    border-collapse: collapse;
`;
export const ReactTableTHead = styled.thead `
  border: 0 solid;
  border-color: inherit;
  padding: 0.75rem 0.15rem;
`;
export const ReactTableTHeaderRow = styled.tr`
  border-width: 1px 0;
  ${props => props.sticky && css`
    position: sticky;
    top: 0;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
    background-color: #fff;
  `}
`;
export const ReactTableTHeaderRowSticky = styled.tr`
  border-width: 1px 0;
  ${props => props.sticky && css`
    position: sticky;
    top: 0;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
    background-color: #fff;
  `}
`
export const ReactTableTHeaderColumn = styled.th`
  white-space: nowrap;
  font-weight: 600;
  padding: 0.75rem 2rem 0.75rem 0.2rem;
  ${props => props.density==='compact' && css`
    padding: 0.15rem 2rem 0.15rem 0.2rem;
  `}
  ${props => props.density==='standard' && css`
    padding: 0.75rem 2rem 0.75rem 0.2rem;
  `}
  ${props => props.density==='comfortable' && css`
    padding: 1.75rem 2rem 1.75rem 0.2rem;
  `}
  border: 0 solid;
  border-color: inherit;
  text-align: left;
  border-bottom-color: #eff2f7;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg); 
`;
export const ReactTableTHeaderColumnCompact = styled.th`
  white-space: nowrap;
  font-weight: 600;
  padding: 0.15rem 2rem 0.15rem 0.2rem;
  border: 0 solid;
  border-color: inherit;
  text-align: left;
  border-bottom-color: #eff2f7;
  
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg); 
`;
export const ReactTableTHeaderColumnComfortable = styled.th`
  white-space: nowrap;
  font-weight: 600;
  padding: 1.75rem 2rem 1.75rem 0.2rem;
  border: 0 solid;
  border-color: inherit;
  text-align: left;
  border-bottom-color: #eff2f7;
  
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg); 
`;
export const ReactTableTRow = styled.tr`
  border-width: 1px 0;

  ${ props => props.stripped 
  && css`
    &:nth-child(even) {
      background-color: #f2f2f2;
    }`
  }
  ${ props => props.unread
  && css`
    background-color: #8590A5;
    color: white;
  `}
`;
export const ReactTableTColumn = styled.th`
  border: 0 solid;
  border-color: inherit;
  font-weight: ${props => props.bold ? '700' : '400'};
  font-size: 14.4px;
  padding: 0.75rem 2rem 0.75rem 0.2rem;
  ${props => props.density==='compact' && css`
    padding: 0.15rem 2rem 0.15rem 0.2rem;
  `}
  ${props => props.density==='standard' && css`
  padding: 0.75rem 2rem 0.75rem 0.2rem;
  `}
  ${props => props.density==='comfortable' && css`
  padding: 1.75rem 2rem 1.75rem 0.2rem;
  `}
  white-space: nowrap;
  text-align: left;
  border-bottom-color: #eff2f7;

  
  overflow-x: auto;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
`
export const ReactTableTColumnCompact = styled.th`
  border: 0 solid;
  border-color: inherit;
  font-weight: ${props => props.bold ? '700' : '400'};
  font-size: 14.4px;
  padding: 0.15rem 2rem 0.15rem 0.2rem;
  white-space: nowrap;
  text-align: left;
  border-bottom-color: #eff2f7;
  overflow-x: auto;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
`
export const ReactTableTColumnComfortable = styled.th`
  border: 0 solid;
  border-color: inherit;
  font-weight: 400;
  font-size: 14.4px;
  padding: 1.75rem 2rem 1.75rem 0.2rem;
  white-space: nowrap;
  text-align: left;
  border-bottom-color: #eff2f7;
  overflow-x: auto;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
`
export const ReactTableTBody = styled.tbody`
  
`

export const ColumnFilterWrapper = styled.div`

`
export const ColumnFilterInput = styled.input`
  display: block;
  margin-top: 5px;
  margin-right: 20px;
  padding: 0.27rem 0.25rem;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #505d69;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #D5DBE2;
  

  padding-left: 10px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  
  &:focus {
    color: #505d69;
    background-color: #fff;
    border-color: #b1bbc4;
    outline: 0;
    box-shadow: none;
  }
`
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  
`
export const PaginationButtonsWrapper = styled.div`
  
`
export const PaginationPageIndicationWrapper = styled.div`
  
`
export const PaginationGoToPageWrapper = styled.div`
  
`
export const PaginationGoToPageInput = styled.input`

  margin-top: 5px;
  margin-right: 20px;
  padding: 0.27rem 0.25rem;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #505d69;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #D5DBE2;
  

  padding-left: 10px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  
  &:focus {
    color: #505d69;
    background-color: #fff;
    border-color: #b1bbc4;
    outline: 0;
    box-shadow: none;
  }
`
export const PaginationPageEntriesWrapper = styled.div`
  
`
export const UserManagementHeaderToolsWrapper = styled.div`
  margin-bottom: 20px;
`

export const FormWrapper = styled.div`

`
export const CustomForm = styled.form`
  display: block;
  margin-top: 0em;
`
export const FlexRow = styled.div`
  --bs-gutter-x: 24px;
  --bs-gutter-y: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y)*-1);
  margin-right: calc(var(--bs-gutter-x)/-2);
  margin-left: calc(var(--bs-gutter-x)/-2);

  & >* {
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x)/2);
    padding-left: calc(var(--bs-gutter-x)/2);
    margin-top: var(--bs-gutter-y);
    position: relative;
  }
`
export const ColumnMd6 = styled.div`

  @media (min-width: 768px)
  {
      -webkit-flex: 0 0 auto;
      flex: 0 0 auto;
  }
  @media (min-width: 768px)
  {
      width: 50%;
  }
`
export const DivMarginBottom3 = styled.div`
  margin-bottom: 1rem;
`
export const FormLabel = styled(Form.Label)`
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 14.4px;
  display: inline-block;
`

export const DashboardWrapper = styled.div`
`
export const LogInScreenWrapper = styled.div`
`
export const LogInOneLoginColumnWrapper = styled.div`
  display: flex;
  
  height: 100vh;
  padding: 1.5rem;
  align-items: center;
  min-height: 100vh;
  background-color: white;
  justify-content: center;

  @media (min-width: 992px) {
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
  }
  @media (min-width: 992px) {
    width: 33.33333%;
  }
`
export const LoginOneBannerWrapper = styled.div`
  background-color: white;
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  
  
  @media (min-width: 992px) {
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 66.66667%;
  }
`
export const LoginOneLoginContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
`
export const LoginOneHeaderWrapper = styled.div`
  text-align: center;
`
export const LoginOneHeaderLogo = styled.img`
  margin-right: auto;
  margin-left: auto;
`
export const LoginOneHeaderTitle = styled.h4`
  font-size: 18px;
  margin-top: 1.5rem;
`
export const LoginOneHeaderSubTitle = styled.p`
  color: #74788d;
  margin-top: 0;
  margin-bottom: 1rem;
`
export const LoginOneFormWrapper = styled.div`
  margin-top: 3rem;
  padding: .5rem;
`
export const LoginOneForm = styled(Form)`
  display: block;
  margin-top: 0em;
`
export const LogInOneFormField = styled.div`
  position: relative;
  
  margin-bottom: 1.5rem;
`
export const LoginOneFormFieldIconWrap = styled.div`
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 19px;
  font-size: 24px;
  color: #5664d2;
`
export const LoginOneFormFieldLabel = styled.label`
  position: absolute;
  top: 7px;
  left: 60px;
  font-weight: 600;
  margin-bottom: .5rem;
  display: inline-block;
`
export const LoginOneFormFieldInput = styled.input`
  height: 60px;
  padding-top: 28px;
  padding-left: 60px;
  padding-bottom: 5px;
  display: block;
  width: 100%;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #505d69;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  appearance: none;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`
export const LoginOneFormSubmitButtonWrapper = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`
export const LoginOneFormSubmitButton = styled.button`
  min-width: 110px;
  color: #fff;
  background-color: #5664d2;
  border-color: #5664d2;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: .47rem .75rem;
  font-size: .9rem;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`
export const LoginOneFooterWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;

`
export const PrimaryLink = styled.a`
  color: #5664d2;
`
export const FlexContainer = styled.div`
  display: flex;

  ${props => props.column && css`
    flex-direction: column;
  `}
  ${props => props.md && css`
    width: 720px;
  `}
`
export const MainComponentHeaderLogo = styled.img`
  margin: 20px auto;
  margin-bottom: 40px;
`
export const MediumWidthDiv = styled.div`
  width: 50%;
  margin: 0 auto;
  justify-content: center;
`
export const MarginTop20 = styled.div`
  margin-top: 20px;
  
`
export const FlexCenterDirColumnDiv = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
export const MainComponentLinksWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;
`
export const MainComponentLink = styled.a`
  color: #5664d2;
`
export const RoundCheckBoxInput = styled.input`
  width: 1.3em;
  height: 1.3em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    padding: 2px;
    background-color: #8590A5;
  }
`
export const ConcentricCircle = styled.div`
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid grey;
  box-shadow: inset 0 0 0 4px #fff;
  cursor: pointer;
  
  ${props => props.isChecked && css`
    background-color: grey;
  `}
`
export const NotificationBellRedNotice = styled.span`
  position: relative;
  display: inline-block;
  height: 6px;
  width: 6px;
  background-color: #ff3d60;
  border-radius: 50%;
  top: -15px;
  right: 4px;

  font-size: 8px;
`
export const NotificationsDropDownWrapper = styled.div `
  display:block;
  font-size: .9rem;
  color: #505d69;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid rgba(0,0,0,.15);
  border-radius: 0.25rem;
  box-shadow: 0 5px 12px rgb(0 0 0 / 10%);
  -webkit-animation-name: DropDownSlide;
  animation-name: DropDownSlide;
  -webkit-animation-duration: .3s;
  animation-duration: .3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  margin: 0;
  right: 0;
  top: 60px;
  left: auto;
  z-index: 1000;

  position: absolute;
  will-change: transform;

  @media (min-width: 600px){
   width: 320px;
  }

  @keyframes DropDownSlide {
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    0% {
        -webkit-transform: translateY(10px);
        transform: translateY(10px);
        } 
  }
`
export const NotificationsDropDownHeaderWrapper = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eff2f7;
`
export const NotificatioinsDropDownHeader = styled.h6`
  font-size: .9rem;
  font-weight: 500;
  line-height: 1.2;
`
export const NotificationDropDownSingleWrapper = styled(Link)`
  cursor: pointer;
`
export const NotificationDropDownSingle = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
`
export const NotificationDropDownSingleIconWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  text-align: center;
  padding-top: 0.3rem;
  border-radius: 50%;
  margin-right: 1rem!important;
  background-color: #8590A5;
  color: white;
`
export const NotificationDropDownSingleContentWrapper = styled.div`
  flex: 1 1;
`
export const NotificationDropDownSingleContentHeader = styled.div`
  margin-bottom: 0.25rem;
  margin-top: 0;
  color: #343a40;
  font-family: "Inter",sans-serif;
  font-weight: 500;
  line-height: 1.2;
`
export const NotificationDropDownSingleContentMain = styled.div`
  font-size: 12px;
  color: #74788d;
`
export const NotificationDropDownSingleContentMainMessage = styled.p`
  margin-bottom: 0.25rem;
  margin-top: 0;
`
export const NotificationDropDownSingleContentMainTimeWrapper = styled.div`
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
`
export const NotificationDropDownSingleContentMainTimeIconWrapper = styled.div`
  margin-right: 5px;
`
export const NotificationDropDownSingleContentMainTimeText = styled.p`
  line-height: 1.7;
`
export const NotificationsDropDownFooterWrapper = styled.div`
  padding: 0.5rem;
  border-top: 1px solid #eff2f7;
`
export const NotificationsDropDownFooterLink = styled(Link)`
  color: #5664d2;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 0.25rem 0.5rem;
`
export const NotificationsDropDownFooterLinkIconWrapper = styled.div`

`
export const SearchBarDropDownWrapper = styled.div `
  display:block;
  font-size: .9rem;
  color: #505d69;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid rgba(0,0,0,.15);
  border-radius: 0.25rem;
  box-shadow: 0 5px 12px rgb(0 0 0 / 10%);
  -webkit-animation-name: DropDownSlide;
  animation-name: DropDownSlide;
  -webkit-animation-duration: .3s;
  animation-duration: .3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  margin: 0;
  right: auto;
  top:70px;
  left: auto;
  z-index: 1000;

  position: absolute;
  will-change: transform;

  @media (min-width: 600px){
   width: 320px;
  }

  @keyframes DropDownSlide {
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    0% {
        -webkit-transform: translateY(10px);
        transform: translateY(10px);
        } 
  }
`
export const SearchBarDropDownHeaderWrapper = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eff2f7;
`
export const SearchBarDropDownHeader = styled.h6`
  font-size: .9rem;
  font-weight: 500;
  line-height: 1.2;
`
export const SearchBarSinlgeContentHeader = styled.div`
  margin-bottom: 0.25rem;
  margin-top: 0;
  color: #343a40;
  font-family: "Inter",sans-serif;
  font-weight: 400;
  line-height: 1;
`
export const SearchBarDropDownSingleWrapper = styled(Link)`
  cursor: pointer;
`
export const SearchBarDropDownSingleWrapperExternalLink = styled.a`
  cursor: pointer;
`
export const SearchBarDropDownSingle = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
`
export const SearchBarDropDownSingleContentWrapper = styled.div`
  flex: 1 1;
`
export const LinksMenuDropDownWrapper = styled.div`
  display: block;
  position: absolute;
  will-change: transform;
  transform: translate3d(0px, 70px, 0px);
  left: auto;
  right: 0;
  top: 60px;
  width: 320px;
  box-shadow: 0 5px 12px rgb(0 0 0 / 10%);
  -webkit-animation-name: DropDownSlide;
  animation-name: DropDownSlide;
  -webkit-animation-duration: .3s;
  animation-duration: .3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  margin: 0;
  position: absolute;
  z-index: 1000;
  
  min-width: 10rem;
  padding: 0.5rem 0;
  font-size: .9rem;
  color: #505d69;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid rgba(0,0,0,.15);
  border-radius: 0.25rem;
`
export const LinksMenuContentWrapper = styled.div`
  padding-right: 0.5rem!important;
  padding-left: 0.5rem!important;
`
export const LinksMenuContentRow = styled.div`
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y)*-1);
  margin-right: calc(var(--bs-gutter-x)/-2);
  margin-left: calc(var(--bs-gutter-x)/-2);

  &>* {
    position: relative;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x)/2);
    padding-left: calc(var(--bs-gutter-x)/2);
    margin-top: var(--bs-gutter-y);
  }
`
export const LinksMenuIconWrapper = styled.div`
  flex: 1 0;
  
`
export const LinksMenuIcon = styled.div`
  font-size: 28px;
  border-radius: 3px;
  line-height: 34px;
  text-align: center;
  padding: 15px 0 9px;
  display: block;
  border: 1px solid transparent;
  color: #74788d;
`
export const LinksMenuIconDescription = styled.p`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`

export const GeneralSettingsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
export const DropDownHorizontalWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
export const DropDownStyledSelect = styled.select`
  
  display: block;
  
  padding: .47rem 1.75rem .47rem .75rem;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.2;
  color: #505d69;
  
  border: 1px solid #ced4da;
  border-radius: .25rem;
  
  margin: 0;
  font-family: 'Inter';

`;

export const DropDownStyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
  display: block;
  width: 100%;
  padding: .47rem 1.75rem .47rem .75rem;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #505d69;
  
  border: 1px solid #ced4da;
  border-radius: .25rem;
  
  margin: 0;
  font-family: 'Inter';
`;

export const DropDownStyledLabel = styled.label`
  font-size: 15px;
  margin: 0 7px;
  font-weight: 500;
`;
export const GeneralSettingWrapper = styled.div`
  position: relative;
  text-align: left;
  padding: 1rem;
  border-bottom: solid 1px #eff2f7;
  display: block;
  min-height: 1.35rem;  
  cursor: pointer;
`
export const GeneralSettingToggleSwitchInput = styled.input.attrs({type: 'checkbox'})`
  background-position: 0%;
  background-image: url(${props => props.imageDark});
  width: 2em;
  margin-right: 1em;  
  border-radius: 2em;
  transition: background-position .15s ease-in-out;
  cursor: pointer;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid rgba(0,0,0,.25);
  -webkit-appearance: none;
  appearance: none;

  :checked {
    background-image: url(${props => props.image});
    background-position: 100%;
    background-color: #5664d2;
    border-color: #5664d2;
  }
`
export const GeneralSettingInput = styled.input`

`
export const GeneralSettingsToggleSwitchLabel = styled.label`
  cursor: pointer;
  margin-right: 10px;
  font-weight: 600;
`

