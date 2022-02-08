import React from "react";
import { useTable } from "react-table";

export default function BasicTable({ columns, data }) {

    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
      } = useTable({
        columns,
        data
      });

      const styles = {
          table: {
            marginTop: "30px"
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
        <table {...getTableProps()} style={styles.table}>
          <thead style={styles.thead}>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} style={styles.tr}>{column.render("Header")}</th>
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
                      <td {...cell.getCellProps()} style={styles.td}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
}