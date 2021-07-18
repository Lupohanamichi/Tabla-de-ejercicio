import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table'
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
        useSortBy)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance
    
    const { globalFilter } = state
     
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
                {rows.map((row) => {
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
        </>
    )
}
