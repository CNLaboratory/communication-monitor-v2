import React from "react";
import { useGlobalFilter, useTable, useFilters } from "react-table";
import GlobalFilter from "./globaFilter";
import ColumnFilter from "./columnFilter";


export default function FilterTable({ columns, data }) {
    const defaultColumn = React.useMemo(
      () => ({
        // Let's set up our default Filter UI
        Filter: ColumnFilter
      }),
      []
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
    
  
    // Use the useTable Hook to send the columns and data to build the table
    const {
      getTableProps, // table props from react-table
      getTableBodyProps, // table body props from react-table
      headerGroups, // headerGroups, if your table has groupings
      rows, // rows for the table based on the data passed
      prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
      state, //table state
      setGlobalFilter //applies global filtering to the table.
    } = useTable(
      {
        columns,
        data,
        defaultColumn
        //filterTypes
      },
      useFilters,
      useGlobalFilter
    );
    const { globalFilter } = state;

    return (
        
        <div style={styles.container}>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <table {...getTableProps()} style={styles.table}>
            <thead style={styles.thead}>
            
            {/*console.log(columns)*/}
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {/*console.log("test2")*/}
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} style={styles.tr}>
                      {column.render("Header")}
                      
                      <div>{column.canFilter ? column.render("Filter") : null}</div>
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
                      return (
                        <td {...cell.getCellProps()} style={styles.td}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
      );
    
  }

