import React from "react";
import { useSortBy, useTable } from "react-table";

export default function SortedTable({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  const styles = {
    container: {
        
        overflow: "auto"
        
  
    },
    table: {
      marginTop: "30px",
      maxWidth: "100%"
    },
  thead: {
    backgroundColor: "#2e2e2e"
  },
  td: {
    padding: "20px 20px",
    border: "dotted 1px black"
  },
  tr: {
      color: "white",
      padding: "20px"
  }
};

  return (
      <div style={styles.container}>
    <table {...getTableProps()} style={styles.table}>
      <thead style={styles.thead}>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} style={styles.tr}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()} style={styles.td}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}