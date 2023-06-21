import DataTable from "react-data-table-component";
import columns from "./columns/Columns";
import data from "../MockData";
import TableFooter from "./TableFooter/TableFooter";
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
  return (<>
      <TableFooter/>
    <DataTable
      columns={columns}
      dense
      data={data}
      customStyles={customStyles}
    />

    </>
  );
};
