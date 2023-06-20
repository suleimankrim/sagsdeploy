import Style from "./Cell.module.css";
const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
        cell : (row,index,column) =>(<>
      <div className={Style.otercell}>
        {index}
        </div>
        </>)
    },
    {
        name: 'Year',
        selector: row => row.year,
        omit: false,
        reorder: true,
        style:{
            backgroundColor:'red'
        }
    },
        {
            name:' '
        },
        {
            name:' '
        },
        {
            name:' '
        },
        {
            name:' '
        },
        {
            name:' '
        },
        {
            name:' '
        }
        ,
        {
            name:' '
        },
        {
            name:' '
        },
        {
            name:' '
        },
        {
            name:' '
        },
        {
            name:' '
        },
        {
            name:' '
        }
]
export default columns;