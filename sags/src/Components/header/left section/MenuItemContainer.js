import React from 'react'
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import Style  from './MenueItem.module.css';
export const MenuItemContainer = ({text,Icon}) => {
  return (
    <div className={Style.MenuItem}>
        {Icon}
        <div>
        {text}
        </div>
    </div>
  )
}
export default  MenuItemContainer;