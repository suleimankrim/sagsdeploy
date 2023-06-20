import React from 'react'
import Style from "./Header.module.css";
import LeftSection from './left section/LeftSection';
export const Header = () => {
  return (
    <div className={Style.Header}> 
    <LeftSection/>
        <div>
            middlesection
        </div>
        <div>
            righttserction
        </div>
        </div>
  )
}
export default Header;
