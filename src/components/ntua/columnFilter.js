import React from "react";
import * as S from '../../styles'

export default function ColumnFilter({ column }) {
    const { filterValue, preFilteredRows, setFilter } = column;
    console.log('filterValue: ', filterValue);
    console.log('preFilteredRows: ', preFilteredRows);
    //const count = preFilteredRows.length;
    
    //this.changeSearchEnabled = this.changeSearchEnabled.bind(this);
    return (
      <S.ColumnFilterWrapper>
        
        {<S.ColumnFilterInput
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
          placeholder={'search column'}
        />}
        
      </S.ColumnFilterWrapper>
    );
  }