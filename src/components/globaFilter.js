import React from "react";

export default function GlobalFilter({ filter, setFilter }) {
    return (
      <>
        {/*console.log("globalFilter")*/}
        {/*console.log(filter)*/}
        <p> Search here: </p>
        <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
      </>
    );
  }