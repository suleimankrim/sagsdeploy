import React, { useState } from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Style from './RightSection.module.css';
export const RightSection = () => {
    const [name,setname]=useState("User name");
  return (
    <div className={Style.Container}>
        <div className={Style.Userphotocontainer}>
        <AccountCircleRoundedIcon sx={{fontSize:30}} ></AccountCircleRoundedIcon>
        </div>
        <div className={Style.Username}>
        {name}
        </div>
    </div>
  )
}
