import data from "../../MockData";
import { CellForm } from "../body-cell/CellForm";
import { HeadForm } from "../head-cell/HeadForm";
import { TitleForm } from "../title-cell/TitleForm";
const title = Object.keys(data[0]);
const alphabet = ["","A","B","C","D","E","F","G","H","I"
,"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const columns = alphabet.map((al,index) => {
  return {
    name: < HeadForm name = {al} key={index}/>,

    cell: (row,idx) =>(<>
    {idx === 0 ?<TitleForm name = {title[index]} key={index+10000}/> :
     < CellForm row = {row} index = {index} key={row.id}/>
    }
     </>),
  };
});

export default columns;
