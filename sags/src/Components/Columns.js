import { CellForm } from "./CellForm";
import { HeadForm } from "./HeadForm";
const title = ["Id","Name", "Years"];
const columns = title.map((title,index) => {
  return {
    name: <HeadForm name = {title} key={index}/>,
    cell: (row) =>(<>
    {console.log(row)}
     < CellForm row = {row} index = {index} key={row.id}/>
     </>),
  };
});

export default columns;
