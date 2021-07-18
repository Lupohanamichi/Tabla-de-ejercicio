import { ColumnFilter } from "./ColumnFilter"

export const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id',
        Filter: ColumnFilter,
        disableSortBy: true
    },
    {
        Header: 'Comercio',
        accessor: 'comercio',
        Filter: ColumnFilter,
        ordered: true
    },
    {
        Header: 'CUIT',
        accessor: 'cuit',
        Filter: ColumnFilter,
        ordered: true
    },
    {
        Header: 'Concepto 1',
        accessor: 'concepto_1',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Concepto 2',
        accessor: 'concepto_2',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Concepto 3',
        accessor: 'concepto_3',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Concepto 4',
        accessor: 'concepto_4',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true
    },
    {
        Header: 'Concepto 5',
        accessor: 'concepto_5',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true

    },
    {
        Header: 'Concepto 6',
        accessor: 'concepto_6',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true

    },
    {
        Header: 'Balance actual',
        accessor: 'balance_actual',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true

    },
    {
        Header: 'Activo',
        accessor: 'activo',
        Filter: ColumnFilter,
        disableSortBy: true
    },
    {
        Header: 'Última venta',
        accessor: 'ultima_venta',
        Filter: ColumnFilter,
        disableFilters: true,
        disableSortBy: true

    },
]