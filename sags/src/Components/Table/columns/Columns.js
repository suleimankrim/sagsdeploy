import alphabet from "../../Assets/Alphabet";
import data from "../MockData";
import { CellForm } from "../body-cell/CellForm";
import { HeadForm } from "../head-cell/HeadForm";
import { TitleForm } from "../title-cell/TitleForm";
const title = Object.keys(data[0]);
const columns = alphabet.map((al, index) => {
    return {
      name: <HeadForm name={al} key={index} />,

      cell: (row, idx, c) => (
        <>
          {idx === 0 ? (
            <TitleForm
              name={index === 0 ? 1 : title[index - 1]}
              key={index + 10000}
              index = {index}
            />
          ) : (
            <CellForm row={row} index={index} key={row.id} />
           
          )}
           {console.log(row)}
           {console.log(c.name.style)}

        </>
      ),
      width: index===0? "40px":{},  
      
    };
    
});

export default columns;
