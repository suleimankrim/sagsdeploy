import React from 'react'
import DataTable from 'react-data-table-component';
import columns from './Columns';
import data from './MockData';
import Checkbox from '@material-ui/core/Checkbox';
export const Table = () => {
  return (
    <DataTable
            columns={columns}
            data={data}
        />
  )
}
