import React from 'react'
import Style from './LoginPage.module.css'
import InputCard from './InputCard/InputCard';
import hat from './1-PhotoRoom.png-PhotoRoom 1.svg';
import logo from './Store and Analyze Grades System.svg'
export const LoginPage = () => {
  return (<div className={Style.Container}>
    <div className={Style.PhotoContainer}>
      <div className={Style.HatContainer}>
        <img src={hat}></img>
      </div>
      <div className={Style.LogoContainer}>
      <img src={logo}></img>
      </div>
    </div>
    <div className={Style.TopCircle}>col</div>
    <div className={Style.BottomCircle}></div>
    <div className={Style.Card}><InputCard  ></InputCard></div>
    </div>
    
  )
}
export default LoginPage;
