import React from "react";
import * as S from "../../styles"

export default function GlobalFilter({ filter, setFilter }) {
    return ( 
      <>
        {/*console.log("globalFilter")*/}
        {/*console.log(filter)*/}
        <S.GlobalFilterWrapper>
          {/*<S.GlobalFilterLabel> Global Search: </S.GlobalFilterLabel>*/}
          <S.GlobalFilterInput value={filter || ""} placeholder='Global search' onChange={(e) => setFilter(e.target.value)} />
        </S.GlobalFilterWrapper>
        </>
    );
  }