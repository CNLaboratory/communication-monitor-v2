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
            
            
            minHeight: "400px"
      
        },
        table: {
          
          marginTop: "20px",
          maxWidth: "100%"
        },
      thead: {
        fontSize: '20px',
        backgroundColor: "#2e2e2e"
      },
      td: {
        padding: "10px 10px",
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
          <div className = 'display-table'>
            <table {...getTableProps()} style={styles.table}>
              <thead style={styles.thead}>
              
              {/*console.log(columns)*/}
                {headerGroups.map((headerGroup, index) => (
                  <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {/*console.log("test2")*/}
                    {headerGroup.headers.map((column, index) => (
                      <th key={index} {...column.getHeaderProps()} style={styles.tr}>
                        <div>{column.canFilter ? column.render("Filter") : null}</div>
                        {column.render("Header")}
                        
                        
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr key={i} {...row.getRowProps()}>
                      {row.cells.map((cell, index) => {
                        return (
                          <td key={index} {...cell.getCellProps()} style={styles.td}>{cell.render("Cell")}</td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        
      );
    
  }

