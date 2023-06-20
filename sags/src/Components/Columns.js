import { CellForm } from "./CellForm";
const title = ["Id","Name", "Years"];
const columns = title.map((title,index) => {
  return {
    name: title,
    cell: (row) =>(<>
    {console.log(row)}
     < CellForm row = {row} index = {index} key={row.id}/>
     </>),
  };
});

export default columns;
