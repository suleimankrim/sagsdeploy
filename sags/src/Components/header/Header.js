import React from 'react'
import Style from "./Header.module.css";
import LeftSection from './left section/LeftSection';
import MiddleSection from './middle section/MiddleSection';

export const Header = () => {
  return (
    <div className={Style.Header}> 
    <LeftSection/>
        <div>
        <MiddleSection></MiddleSection>
        </div>
        <div>
            righttserction
        </div>
        </div>
  )
}
export default Header;
