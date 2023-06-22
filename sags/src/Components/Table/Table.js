import DataTable from "react-data-table-component";
import columns from "./columns/Columns";
import data from "../MockData";
import { CircularProgress } from "@mui/material";
import TableFooter from "../Table/TableFooter/TableFooter";
import { useState, useEffect } from "react";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "0px", // override the cell padding for head cells
      paddingRight: "0px",
    },
  },
  cells: {
    style: {
      paddingLeft: "0px", // override the cell padding for data cells
      paddingRight: "0",
    },
  },
};

export const Table = () => {
  const [colom, setColom] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    setColom(columns);
    setPending(false);
  }, []);

  return (
    <>
      {pending ? (
        <CircularProgress />
      ) : (
        <DataTable columns={colom} dense data={data} customStyles={customStyles} />
      )}
    </>
  );
};
