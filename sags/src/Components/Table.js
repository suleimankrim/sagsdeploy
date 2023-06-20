import React from "react";
import DataTable from "react-data-table-component";
import columns from "./Columns";
import data from "./MockData";
import { Checkbox } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

const customStyles = {
  rows: {
      style: {
          minHeight: '72px', // override the row height
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
      },
  },
  cells: {
      style: {
          paddingLeft: '-2px', // override the cell padding for data cells
          paddingRight: '0',
      },
    }};
export const Table = () => {
  const sortIcon = <ArrowDownward />;
  const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };
  return (
    <DataTable
      pagination
      selectableRowsComponent={Checkbox}
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      dense
      columns={columns}
      data={data}
      customStyles={customStyles}
    />
  );
};
