import data from "../../MockData";
<<<<<<< HEAD
import { CellForm } from "../cell/CellForm";
import { HeadForm } from "./HeadForm";
import { TitleForm } from "./TitleForm";
=======
import { CellForm } from "../body-cell/CellForm";
import { HeadForm } from "../head-cell/HeadForm";
import { TitleForm } from "../title-cell/TitleForm";
>>>>>>> f6d5f4938e168df538acecf0bd135446975ee4c7
const title = Object.keys(data[0]);
const alphabet = ["","A","B","C","D","E","F","G","H","I"
,"J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const columns = alphabet.map((al,index) => {
  return {
<<<<<<< HEAD
    name: < TitleForm name = {al} key={index}/>,

    cell: (row,idx) =>(<>
    {idx === 0 ?<HeadForm name = {title[index]} key={index+10000}/> :
=======
    name: < HeadForm name = {al} key={index}/>,

    cell: (row,idx) =>(<>
    {idx === 0 ?<TitleForm name = {title[index]} key={index+10000}/> :
>>>>>>> f6d5f4938e168df538acecf0bd135446975ee4c7
     < CellForm row = {row} index = {index} key={row.id}/>
    }
     </>),
  };
});

export default columns;
