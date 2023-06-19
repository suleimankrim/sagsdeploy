import React from "react";
import DataTable from "react-data-table-component";
import columns from "./Columns";
import data from "./MockData";
import { Checkbox } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
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
    />
  );
};
