import React, {useState} from "react";
import * as S from "./styles";
import Bell from "../../assets/icons/bell.png";
import Arrow from "../../assets/icons/arrow-down.png";
import Search from "../../assets/icons/search.png";
import {CgMenu, CgMenuRight} from "react-icons/cg";

export default function TopBar(props) {
  const [isHovered, setIsHovered] = useState(false);

  const changeIsHovered = () => {
    setIsHovered(!isHovered);
  }
  return (
    <S.Top>
      <div>
        {/*menu collapse icon*/}
        <S.MenuIconWrap onMouseEnter={changeIsHovered} onMouseLeave={changeIsHovered} onClick={props.handleMenuCollapse}>
          <S.MenuIconLine style={isHovered ? {width: '26px'} : {width: '20px'}}></S.MenuIconLine>
          <S.MenuIconLine></S.MenuIconLine>
          <S.MenuIconLine style={isHovered ? {width: '26px'} : {width: '20px'}}></S.MenuIconLine>
        </S.MenuIconWrap>
        {/* input */}
        {/*<S.InputField>
          <S.SearchImg src={Search} />
          <S.Input type="text" placeholder="Ask us any question" />
        </S.InputField>
        */}
        {/* <div class="relative mr-3 md:mr-0 hidden md:block">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <img src={Search} />
          </div>
          <input
            type="text"
            id="email-adress-icon"
            class="block bg-white p-2 pl-10 rounded-lg border-2"
            placeholder="Search..."
          />
        </div> */}
      </div>

      <S.Right>
        <S.NotificationWrap>
          <img src={Bell} alt=""/>
          <S.Notification className="text-sm">3</S.Notification>
        </S.NotificationWrap>
        <S.ProfileWrap>
          <S.Profile></S.Profile>
          <img src={Arrow} alt=""/>
        </S.ProfileWrap>
      </S.Right>
    </S.Top>
  );
}
