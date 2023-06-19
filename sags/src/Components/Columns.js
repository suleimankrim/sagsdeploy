import Style from "./Cell.module.css";
const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
        cell : row =>(<>
      <div className={Style.otercell}>
        <input type="text" className= {Style.cell} placeholder="kkkk"  />
        </div>
        </>)
    },
    {
        name: 'Year',
        selector: row => row.year,
        style:{
            backgroundColor:'red'
        }
    }]
export default columns;