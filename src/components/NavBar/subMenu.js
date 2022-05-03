import React, {useState} from "react";
import * as S from "./styles";
import ArrowDown from "../../assets/icons/arrow-down.png";
import Message from "../../assets/icons/message.png";
import SubMenuItem from "./subMenuItem"
import SlideDown from 'react-slidedown';
import "react-slidedown/lib/slidedown.css";
import { AdminSidebarData } from "./sidebarData";

const SubMenu = (props) => {
  const [activeItem, setActiveItem] = useState();
  const [active, setActive] = useState(false);
  
  
  return (
    <>
    {props.sidebarData.map((item, index) => {
      
      return (
      <div key={index}>
      
      { item.externalPath ?
        <S.SidebarAnchorLink key={index} href={item.externalPath} target='_blank' onClick={() => (activeItem===item) ? setActiveItem('') : setActiveItem(item)} >
        <div>
          {item.icon}
          <S.SidebarLabel>{item.title}</S.SidebarLabel>
        </div>
        <div>
          {item.subNav && 
            <S.SidebarLinkArrow src={ArrowDown} rotate= {(activeItem===item) ? '180deg' : '0'}/>
          }
        </div>
      </S.SidebarAnchorLink>
      : 
        item.path ? 
        <S.SidebarLink key={index} to={item.path ? item.path : ""} onClick={() => (activeItem===item) ? setActiveItem('') : setActiveItem(item)} >
          <div>
            {item.icon}
            <S.SidebarLabel>{item.title}</S.SidebarLabel>
          </div>
          <div>
            {item.subNav && 
              <S.SidebarLinkArrow src={ArrowDown} rotate= {(activeItem===item) ? '180deg' : '0'}/>
            }
          </div>
        </S.SidebarLink>
        : 
        <S.SidebarAnchorLink key={index} to={item.path ? item.path : ""} onClick={() => (activeItem===item) ? setActiveItem('') : setActiveItem(item)} >
        <div>
          {item.icon}
          <S.SidebarLabel>{item.title}</S.SidebarLabel>
        </div>
        <div>
          {item.subNav && 
            <S.SidebarLinkArrow src={ArrowDown} rotate= {(activeItem===item) ? '180deg' : '0'}/>
          }
        </div>
      </S.SidebarAnchorLink>
          
    } 
        {item.subNav && 
          <div key={'subNav' + index} >
            <S.DropdownWrapper maxHeight={(activeItem===item) ? `${32*(item.subNav.length +1)}px` : '0'}>
            {item.subNav.map((item, index) => {
            return (
              item.externalPath ?
                <S.DropdownAnchorLink href={item.externalPath} target='_blank' key={index}>
                  <S.SidebarLabel>{item.title}</S.SidebarLabel>
                </S.DropdownAnchorLink>
                :
                <S.DropdownLink to={item.path} key={index}>
                  <S.SidebarLabel>{item.title}</S.SidebarLabel>
                </S.DropdownLink>
            )})}
            </S.DropdownWrapper>
          </div>
        }
      </div>
      )
    })}
    </>
  )
}

export default SubMenu;