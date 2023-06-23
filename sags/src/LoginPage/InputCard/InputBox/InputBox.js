import React from 'react'
import Style from "./InputBox.module.css";
export const InputBox = () => {
  return (
    <div className={Style.SearchBox}>
      <input type="text" className={Style.Input}></input>
    </div>
  )
}
export default InputBox;
