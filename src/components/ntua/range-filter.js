import React from "react";
import * as S from '../../styles'

export default function RangeFilter({ 
  column: { filterValue = [], preFilteredRows, setFilter, id }
}) {
  //console.log('preFilteredRows: ', preFilteredRows);
  //console.log('filterValue: ', filterValue)
  const [min, max] = React.useMemo(() => {
    //console.log('preFilteredRows.length:', preFilteredRows.length);
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    console.log('min: ', min);
    console.log('max: ', max);
    //console.log('preFilteredRows[0].values[id]: ', preFilteredRows[0].values[id]);
    preFilteredRows.forEach((row) => {
      min = row.values[id] < min ? row.values[id] : min;
      max = row.values[id] > max ? row.values[id] : max;
    });
    console.log('min: ', min);
    console.log('max: ', max);
    
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <S.ColumnFilterWrapper
      style={{
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      <S.ColumnFilterInput 
        style={{
          width: '100%'
        }}
        value={filterValue[0] || ""}
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            val ? val : undefined,
            old[1]
          ]);
          //setFilter(e.target.value);
        }}
        placeholder={`Min (${min})`}
        
      />
      to
      <S.ColumnFilterInput
        value={filterValue[1] || ""}
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            old[0],
            val ? val : undefined
          ]);
          //setFilter(e.target.value);  
        }}
        placeholder={`Max (${max})`}
        
      />
    </S.ColumnFilterWrapper>
  );
  }