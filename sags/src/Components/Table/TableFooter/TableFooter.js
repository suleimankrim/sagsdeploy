import React from 'react'
import Style from './TableFooter.module.css'
import CustomScroll from 'react-custom-scroll';
 const TableFooter = () => {
  return (
    <div className={Style.TableFooter} >
      <CustomScroll keepAtBottom = {true}>mkom</CustomScroll>
    </div>
  )
}

export default TableFooter;