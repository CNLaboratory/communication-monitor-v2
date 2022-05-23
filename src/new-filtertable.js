import React, {useRef} from "react";
import { useGlobalFilter, useTable, useFilters, useSortBy} from "react-table";
import GlobalFilter from "./components/ntua/globaFilter";
import ColumnFilter from "./components/ntua/columnFilter";
import * as S from "./styles"
import { usePagination } from 'react-table'
import { Dropdown } from "./components/ntua/dropdown";


export default function NewFilterTable({ columns, data, columnFiltersEnabled, columnDensity, stickyHeaderEnabled, paginationEnabled, stripped, getFilteredDataFunc}) {
    const defaultColumn = React.useMemo(
      () => ({
        // Let's set up our default Filter UI
        Filter: ColumnFilter
      }),
      []
    );

    // Use the useTable Hook to send the columns and data to build the table
    const {
      getTableProps, // table props from react-table
      getTableBodyProps, // table body props from react-table
      headerGroups, // headerGroups, if your table has groupings
      rows, // rows for the table based on the data passed
      prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
      page, // Instead of using 'rows', we'll use page,
      
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
      state, //table state
      setGlobalFilter //applies global filtering to the table.
    } = useTable(
      {
        columns,
        data,
        defaultColumn,
        initialState: { pageIndex: 0 },
        //filterTypes
      },
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination
    );
    const { globalFilter } = state;

    let reactTable = useRef(null);
    React.useEffect(() => {
      getFilteredDataFunc.current = getFilteredData
    });
    
    const getFilteredData = () => {
      console.log('reactTable.rows:');
      const filteredData = [];
      rows.map((row, i) => {
        console.log(row.id);
        filteredData.push(data[row.id]);
      });

      return filteredData;
    }


    return (
        
        <div className="NewFilterTableWrapper">
          
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <S.ReactTableWrapper maxHeight={paginationEnabled ? '' : '500px'}>
            <S.ReactTable ref={(r)=> (reactTable = r)}  {...getTableProps()} >
              <S.ReactTableTHead >
              
              {/*console.log(columns)*/}
                { stickyHeaderEnabled ?
                headerGroups.map((headerGroup, index) => (
                  <S.ReactTableTHeaderRowSticky key={'headergroup' + index} sticky={stickyHeaderEnabled} {...headerGroup.getHeaderGroupProps()}>
                  {/*console.log("test2")*/}
                    { 
                      columnDensity==='comfortable' ? 
                        headerGroup.headers.map((column, index) => (
                          <div style={{display: 'table-cell'}}>
                        <S.ReactTableTHeaderColumnComfortable key={'column'+index} {...column.getHeaderProps(column.getSortByToggleProps())} >
                          {column.render("Header")}
                          <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>  
                        </S.ReactTableTHeaderColumnComfortable>
                        {columnFiltersEnabled && <div style={{marginBottom: '10px', marginTop: '10px', paddingRight: '20px'}}>{column.canFilter ? column.render("Filter") : null}</div>}  
                        </div>
                        ))
                      :
                      columnDensity==='compact' ? 
                        headerGroup.headers.map((column, index) => (
                          <div style={{display: 'table-cell'}}>
                          <S.ReactTableTHeaderColumnCompact key={'column'+index} {...column.getHeaderProps(column.getSortByToggleProps())} >
                            {column.render("Header")}
                            <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>  
                          </S.ReactTableTHeaderColumnCompact>
                          {columnFiltersEnabled && <div style={{marginBottom: '10px', marginTop: '10px', paddingRight: '20px'}}>{column.canFilter ? column.render("Filter") : null}</div>}  
                          </div>
                          ))
                      :
                      headerGroup.headers.map((column, index) => (
                        <div style={{display: 'table-cell'}}>
                        <S.ReactTableTHeaderColumn key={'column'+index} {...column.getHeaderProps(column.getSortByToggleProps())} >
                          {column.render("Header")}
                          <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>
                        </S.ReactTableTHeaderColumn>
                        {columnFiltersEnabled && <div style={{marginBottom: '10px', marginTop: '10px', paddingRight: '20px'}}>{column.canFilter ? column.render("Filter") : null}</div>}  
                        </div>
                        ))
                    }
                  </S.ReactTableTHeaderRowSticky>
                ))
                :
                headerGroups.map((headerGroup, index) => (
                  <S.ReactTableTHeaderRow key={'headergroup' + index} {...headerGroup.getHeaderGroupProps()}>
                  {/*console.log("test2")*/}
                    { 
                      columnDensity==='comfortable' ? 
                      
                      headerGroup.headers.map((column, index) => (
                        <div style={{display: 'table-cell'}}>
                      <S.ReactTableTHeaderColumnComfortable key={'column'+index} {...column.getHeaderProps(column.getSortByToggleProps())} >
                        {column.render("Header")}
                        <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>  
                      </S.ReactTableTHeaderColumnComfortable>
                      {columnFiltersEnabled && <div style={{marginBottom: '10px', marginTop: '10px', paddingRight: '20px'}}>{column.canFilter ? column.render("Filter") : null}</div>}  
                      </div>
                      ))
                      :
                      columnDensity==='compact' ? 
                      headerGroup.headers.map((column, index) => (
                        <div style={{display: 'table-cell'}}>
                        <S.ReactTableTHeaderColumnCompact key={'column'+index} {...column.getHeaderProps(column.getSortByToggleProps())} >
                          {column.render("Header")}
                          <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>  
                        </S.ReactTableTHeaderColumnCompact>
                        {columnFiltersEnabled && <div style={{marginBottom: '10px', marginTop: '10px', paddingRight: '20px'}}>{column.canFilter ? column.render("Filter") : null}</div>}  
                        </div>
                        ))
                      :
                      headerGroup.headers.map((column, index) => (
                        <div style={{display: 'table-cell'}}>
                        <S.ReactTableTHeaderColumn key={'column'+index} {...column.getHeaderProps(column.getSortByToggleProps())} >
                          {column.render("Header")}
                          <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>
                        </S.ReactTableTHeaderColumn>
                        {columnFiltersEnabled && <div style={{marginBottom: '10px', marginTop: '10px', paddingRight: '20px'}}>{column.canFilter ? column.render("Filter") : null}</div>}  
                        </div>
                        ))
                    }
                  </S.ReactTableTHeaderRow>
                ))
              }
              </S.ReactTableTHead>
              <S.ReactTableTBody {...getTableBodyProps()}>
                {paginationEnabled ? 
                  page.map((row, i) => { 
                  prepareRow(row);
                  return (
                    <S.ReactTableTRow key={'row'+i} stripped={stripped} {...row.getRowProps()}>
                      {
                        columnDensity==='compact' ? 
                        row.cells.map((cell, index) => {
                          return (
                            <S.ReactTableTColumnCompact key={'tcolumn'+index} {...cell.getCellProps()}>{cell.render("Cell")}</S.ReactTableTColumnCompact>
                          );
                        })
                        :
                        columnDensity==='comfortable' ? 
                        row.cells.map((cell, index) => {
                          return (
                            <S.ReactTableTColumnComfortable key={'tcolumn'+index} {...cell.getCellProps()}>{cell.render("Cell")}</S.ReactTableTColumnComfortable>
                          );
                        })
                        :
                        row.cells.map((cell, index) => {
                          return (
                            <S.ReactTableTColumn key={'tcolumn'+index} {...cell.getCellProps()}>{cell.render("Cell")}</S.ReactTableTColumn>
                          );
                        })
                      }
                    </S.ReactTableTRow>
                  );
                })
                :
                rows.map((row, i) => { 
                  prepareRow(row);
                  return (
                    <S.ReactTableTRow key={'row'+i} stripped={stripped} {...row.getRowProps()}>
                      {
                        columnDensity==='compact' ? 
                        row.cells.map((cell, index) => {
                          return (
                            <S.ReactTableTColumnCompact key={'tcolumn'+index} {...cell.getCellProps()}>{cell.render("Cell")}</S.ReactTableTColumnCompact>
                          );
                        })
                        :
                        columnDensity==='comfortable' ? 
                        row.cells.map((cell, index) => {
                          return (
                            <S.ReactTableTColumnComfortable key={'tcolumn'+index} {...cell.getCellProps()}>{cell.render("Cell")}</S.ReactTableTColumnComfortable>
                          );
                        })
                        :
                        row.cells.map((cell, index) => {
                          return (
                            <S.ReactTableTColumn key={'tcolumn'+index} {...cell.getCellProps()}>{cell.render("Cell")}</S.ReactTableTColumn>
                          );
                        })
                      }
                    </S.ReactTableTRow>
                  );
                })
              
              }
              </S.ReactTableTBody>
            </S.ReactTable>
          </S.ReactTableWrapper>
          {
            paginationEnabled && 
            <S.PaginationWrapper>
              
              <S.PaginationPageIndicationWrapper>
                Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
                | Go to page:{' '}
                <S.PaginationGoToPageInput
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(page)
                  }}
                  style={{ width: '100px' }}
                />
              </S.PaginationPageIndicationWrapper>{' '}
              <S.PaginationPageEntriesWrapper>
              <Dropdown
                value={pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[10, 20, 30, 40, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </Dropdown>
              </S.PaginationPageEntriesWrapper>
              <S.PaginationButtonsWrapper>
              <S.StyledButtonPrimary onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
              </S.StyledButtonPrimary>{' '}
              <S.StyledButtonPrimary onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
              </S.StyledButtonPrimary>{' '}
              <S.StyledButtonPrimary onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
              </S.StyledButtonPrimary>{' '}
              <S.StyledButtonPrimary onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
              </S.StyledButtonPrimary>{' '}
              </S.PaginationButtonsWrapper>
              
          </S.PaginationWrapper>
          }
        </div>
        
      );
    
  }

