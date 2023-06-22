import DataTable from "react-data-table-component";
import columns from "./columns/Columns";
import data from "./MockData";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TableFooter from "../Table/TableFooter/TableFooter";
import { useState, useEffect } from "react";
import zIndex from "@mui/material/styles/zIndex";

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
    const timeout = setTimeout(() => {
    setColom(columns);
    setPending(false);
  }, 500);
  	return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {pending ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            zIndex: "10001",
            alignItems: "center",
            height: "500px",
          }}
        >
          <CircularProgress size={60} thickness={4} sx={{
            color :'gray'
          }} />
        </Box>
      ) : (
        <DataTable
          columns={colom}
          dense
          data={data}
          customStyles={customStyles}
        />
      )}
    </>
  );
};
