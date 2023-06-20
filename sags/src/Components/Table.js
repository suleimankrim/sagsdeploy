import React from "react";
import DataTable from "react-data-table-component";
import columns from "./Columns";
import data from "./MockData";

const customStyles = {
  rows: {
      style: {
          minHeight: '72px', // override the row height
      },
  },
  headCells: {
      style: {
          paddingLeft: '0px', // override the cell padding for head cells
          paddingRight: '0px',
      },
  },
  cells: {
      style: {
          paddingLeft: '0px', // override the cell padding for data cells
          paddingRight: '0',
      },
    }};
    
export const Table = () => {
  return (
    <DataTable
      columns={columns}
      dense
      data={data}
      customStyles={customStyles}
    />
  );
};
