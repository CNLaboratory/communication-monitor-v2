import React, {useState} from "react";
import { useGlobalFilter, useTable, useFilters, useSortBy, useRowSelect} from "react-table";
import GlobalFilter from "./components/ntua/globaFilter";
import ColumnFilter from "./components/ntua/columnFilter";
import RangeFilter from "./components/ntua/range-filter";
import * as S from "./styles"
import { usePagination } from 'react-table'
import { Dropdown } from "./components/ntua/dropdown";

const RoundCheckBox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <S.RoundCheckBoxInput id='checkbox' type="checkbox" ref={resolvedRef} {...rest} />
        <label for='checkbox'></label>
      </>
    )
  }
)

function customBetweenFilterForStrings(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id]
    console.log('rowValue: ', rowValue);
    const min = filterValue[0] ? filterValue[0] : undefined
    const max = filterValue[1] ? filterValue[1] : undefined
    let returnValue;
    if (min === undefined && max === undefined) {
      return true;
    }
    if (min === undefined) {
      returnValue = rowValue <= filterValue[1];
    } else if (max === undefined) {
      returnValue = rowValue >= filterValue[0];
    } else {
      returnValue = rowValue >= filterValue[0] && rowValue <= filterValue[1];
    }
      
    console.log('returnValue: ', returnValue);
    return returnValue
  })
}

export default function NotificationsTable({ columns, data, columnFiltersEnabled, rangeFiltersEnabled, columnDensity, stickyHeaderEnabled, paginationEnabled, stripped, readTable, markAsRead}) {
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
        initialState: { pageIndex: 0,
          //sortBy: [
          //  {
          //      id: 'alert_timestamp',
          //      desc: true
          //  }
        //] 
      },
        //filterTypes
      },
      useFilters,
      useGlobalFilter,
      useSortBy,
      usePagination,
      
    
    );
    const { globalFilter } = state;

    const [rowSelected, setRowSelected] = useState([]);

    /*
    const handleReadStatusClicked = (rowId) => {
      let currentRowSelected = rowSelected.map((object) => ({
        ...object,
      }));
        
        console.log('rowID:', rowId);
        if (currentRowSelected.some(item => item === rowId)) {
          console.log('row in currentRowSelected, before:', currentRowSelected);
          const index = currentRowSelected.indexOf(rowId);
          if (index > -1) {
            currentRowSelected.splice(index, 1); // 2nd parameter means remove one item only
          }
          //currentRowSelected.filter(item => item !== rowId)
          console.log('row in currentRowSelected, after:', currentRowSelected);
        } else {
          console.log('row not in currentRowSelected, before:', currentRowSelected);
          currentRowSelected.push(rowId);
          console.log('row not in currentRowSelected, after:', currentRowSelected);
        }
        setRowSelected(currentRowSelected);
    }
    */
   const handleReadStatusClicked = (rowId) => {
    console.log('row:', rowId);
    markAsRead(rowId);
   }

    return (
        
        <div className="NewFilterTableWrapper">
        
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <S.ReactTableWrapper maxHeight={paginationEnabled ? '' : '500px'}>
            <S.ReactTable {...getTableProps()} >
              <S.ReactTableTHead >
              
              {/*console.log(columns)*/}
                { 
                headerGroups.map((headerGroup, index) => (
                  <S.ReactTableTHeaderRow key={'headergroup' + index} sticky={stickyHeaderEnabled} {...headerGroup.getHeaderGroupProps()}>
                  {/*console.log("test2")*/}
                  {<div style={{display: 'table-cell'}}>
                    <S.ReactTableTHeaderColumn key={'column-read-unread'} density={columnDensity==='comfortable' ? 'comfortable' : columnDensity==='compact' ? 'compact' : 'standard'}>
                      Read/Unread
                    </S.ReactTableTHeaderColumn>

                    </div>}
                    { 
                         
                        headerGroup.headers.map((column, index) => (
                          <div style={{display: 'table-cell'}}>

                        {rangeFiltersEnabled ?

                        <S.ReactTableTHeaderColumn 
                          key={'column'+index} 
                          density={columnDensity==='comfortable' ? 'comfortable' : columnDensity==='compact' ? 'compact' : 'standard'} 
                          {...column.Filter = RangeFilter}
                          {...column.filter = customBetweenFilterForStrings}
                          {...column.getHeaderProps(column.getSortByToggleProps())} >
                          {column.render("Header")}
                          <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>  
                        </S.ReactTableTHeaderColumn>

                        :
                        <S.ReactTableTHeaderColumn 
                          key={'column'+index} 
                          density={columnDensity==='comfortable' ? 'comfortable' : columnDensity==='compact' ? 'compact' : 'standard'} 
                          
                          {...column.getHeaderProps(column.getSortByToggleProps())} >
                          {column.render("Header")}
                          <span>{column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span>  
                        </S.ReactTableTHeaderColumn>

                        } 
                        {columnFiltersEnabled && <div style={{marginBottom: '10px', marginTop: '10px', paddingRight: '20px'}}>{column.canFilter ? column.render("Filter") : null}</div>}  
                        {rangeFiltersEnabled && <div style={{marginBottom: '10px', marginTop: '10px', paddingRight: '20px'}}>{column.canFilter ? column.render("Filter") : null}</div>}  
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
                    <S.ReactTableTRow key={'row'+i}  unread={readTable[row.id]} {...row.getRowProps()}>
                      {<S.ReactTableTColumn key='tcolumn-checkbox' density={columnDensity==='comfortable' ? 'comfortable' : columnDensity==='compact' ? 'compact' : 'standard'}>
                        {/*<S.RoundCheckBoxInput></S.RoundCheckBoxInput>*/}
                        {<S.ConcentricCircle key={'row'+i}
                          onClick={()=>{handleReadStatusClicked(row.id)}}
                          isChecked={readTable[row.id]}>
                          </S.ConcentricCircle>}
                        </S.ReactTableTColumn>}
                      {
                        row.cells.map((cell, index) => {
                          return (
                            <S.ReactTableTColumn 
                              key={'tcolumn'+index} 
                              bold={readTable[row.id]}
                              density={columnDensity==='comfortable' ? 'comfortable' : columnDensity==='compact' ? 'compact' : 'standard'} {...cell.getCellProps()}>{cell.render("Cell")}</S.ReactTableTColumn>
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
                        row.cells.map((cell, index) => {
                          return (
                            <S.ReactTableTColumn key={'tcolumn'+index} density={columnDensity==='comfortable' ? 'comfortable' : columnDensity==='compact' ? 'compact' : 'standard'} {...cell.getCellProps()}>{cell.render("Cell")}</S.ReactTableTColumn>
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

