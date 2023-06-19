import React from 'react'
import DataTable from 'react-data-table-component';
import columns from './Columns';
import data from './MockData';
export const Table = () => {
  return (
    <DataTable
            columns={columns}
            data={data}
        />
  )
}
