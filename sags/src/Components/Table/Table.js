import DataTable from "react-data-table-component";
import columns from "./columns/Columns";
import data from "../MockData";
<<<<<<< HEAD
import useScrollPosition from './scroller/Scroller';
=======
>>>>>>> f6d5f4938e168df538acecf0bd135446975ee4c7

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

console.log("sssssssssssssssssssss")
const scrollPosition = useScrollPosition();

console.log(scrollPosition); 
  return (
    <DataTable
      columns={columns}
      dense
      data={data}
      customStyles={customStyles}
    />
  );
};
