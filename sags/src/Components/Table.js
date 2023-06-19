import React from 'react'
import DataTable from 'react-data-table-component';
import columns from './Columns';
import data from './MockData';
import {checkbox} from"@mui/material"
export const Table = () => {
  return (
    <DataTable
            columns={columns}
            data={data}
        />
  )
}
