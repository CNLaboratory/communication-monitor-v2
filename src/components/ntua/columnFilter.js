import React from "react";

export default function ColumnFilter({ column }) {
    const { filterValue, setFilter } = column;
    //const count = preFilteredRows.length;
    
    //this.changeSearchEnabled = this.changeSearchEnabled.bind(this);
    return (
      <div className='column-search-div1'>
        
        {<input className='column-search-inp1' style={{backgroundColor:'grey', color:'white'}}
          value={filterValue || ""}
          onChange={(e) => setFilter(e.target.value)}
          placeholder={'search column'}
        />}
        {<div style={{paddingBottom: 10}}></div>}
      </div>
    );
  }