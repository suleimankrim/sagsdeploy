import data from "../../MockData";
import { CellForm } from "../cell/CellForm";
import { HeadForm } from "./HeadForm";
import { TitleForm } from "./TitleForm";
const title = Object.keys(data[0]);
const alphabet = ["","A","B","C","D","E","F","G","H","I"
,"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const columns = alphabet.map((al,index) => {
  return {
    name: < TitleForm name = {al} key={index}/>,

    cell: (row,idx) =>(<>
    {idx === 0 ?<HeadForm name = {title[index]} key={index+10000}/> :
     < CellForm row = {row} index = {index} key={row.id}/>
    }
     </>),
  };
});

export default columns;
