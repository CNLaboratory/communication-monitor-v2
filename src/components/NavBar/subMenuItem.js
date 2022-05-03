import React, {useState} from "react";
import * as S from "./styles";


const SubMenuItem = ({item, index}) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <S.SubListItem to={item.path} key={index} onClick={setActive}>
        <S.SubItem className={active ? "active" : ""}>
          
          {item.title}
        </S.SubItem>
      </S.SubListItem>
    </>

  )
}

export default SubMenuItem;