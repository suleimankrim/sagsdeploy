import React from "react";
import Style from "./InputCard.module.css";
import InputBox from "./InputBox/InputBox";
import { Button } from "@mui/material";
export const InputCard = () => {
  return (<div className={Style.CardContainer}>
    <divL className={Style.Login}>LOGIN</divL>
    <div className={Style.line}></div>
   <div className={Style.TopInput}> <InputBox   ></InputBox>  </div>
    <div className={Style.BottomInput}> <InputBox></InputBox> </div>
    <div className={Style.ButtonContainer}><Button variant="outlined" sx={{color:'black' }}>Sign in</Button></div>
    
    

        </div> 
    
    
   
    
  );
};

export default InputCard;
