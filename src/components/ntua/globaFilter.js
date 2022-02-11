import React from "react";

export default function GlobalFilter({ filter, setFilter }) {
    return ( 
      <>
        {/*console.log("globalFilter")*/}
        {/*console.log(filter)*/}
        <div className='global-filter'>
          <p className ='global-search-p1'> Global Search: </p>
          <input className ='global-search-inp1' value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
        </div>
        </>
    );
  }