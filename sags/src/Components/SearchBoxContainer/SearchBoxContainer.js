import React from "react";
import Style from "./SearchBoxContainer.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
export const SearchBoxContainer = () => {
  return (
    <div className={Style.SearchBoxContainer}>
      <div className={Style.SearchBox}>
        <SearchRoundedIcon sx={{color:"gray"}}></SearchRoundedIcon>
        <input type="text" className={Style.Input}></input>
      </div>
    </div>
  );
};
export default SearchBoxContainer;
