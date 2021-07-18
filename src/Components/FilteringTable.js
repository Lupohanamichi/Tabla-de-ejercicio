import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, usePagination, useFilters, useSortBy  } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'

 
export const FilteringTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable(
        {
        columns,
        data,
        }, 
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        )
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        setGlobalFilter,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setPageSize,
        state,
        prepareRow,
        
    } = tableInstance
    
    const { globalFilter } = state
    const { pageIndex, pageSize } = state

    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                    {headerGroups.headers.map((column) => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps)}>
                            {column.render('Header')}
                            <div style={{"width" : "195px"}}>{column.canFilter ? column.render('Filter') : null } <span>{column.ordered ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''}</span></div>
                        </th>
                    ))}
                </tr>   
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                    </tr>
                    )
                })}
            </tbody>
        </table>
        <div>
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}

            </span>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                Previous
                </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
                Next
                </button>
        </div>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 15].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize !== 200 ? `Mostrar ${pageSize}` : `Mostrar todo`}
            </option>
          ))}
        </select>
        </>
    )
}
