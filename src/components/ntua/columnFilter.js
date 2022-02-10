import React from "react";

export default function ColumnFilter({ column }) {
    const { filterValue, setFilter, preFilteredRows } = column;
    //const count = preFilteredRows.length;
    return (
      <>
        {/*<p> Search </p>*/}
        <input
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
          placeholder={'search column'}
        />
        {<div style={{paddingBottom: 10}}></div>}
      </>
    );
  }