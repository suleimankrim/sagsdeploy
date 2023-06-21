import * as React from 'react';
import Switch from '@mui/joy/Switch';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import WavesRoundedIcon from '@mui/icons-material/WavesRounded';
import ph from './facebook-svgrepo-com.svg'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { LockOutlined } from '@mui/icons-material';

export const SwitchContainer = () => {
    const [dark, setDark] = React.useState(false);
    const [icon, setIcon] = React.useState(<LockOutlined></LockOutlined>);
   const ChangeIcon=function () {
    if (dark ===true) {
        setIcon(<LockOpenOutlinedIcon></LockOpenOutlinedIcon>);
    }
    else{
        setIcon(<LockOutlinedIcon/>);
    }
   }
    return (
      <Switch
      sx={{
        '--Switch-thumbSize': '28px',
      }}
        color={dark ? 'primary' : 'danger'}
        slotProps={{ input: { 'aria-label': 'dark mode' },  thumb: {
            children: icon,
          }, }}
       
        checked={dark}
        onChange={(event) => {setDark(event.target.checked) 
        ChangeIcon()}}
        
      />
    );
}
export default SwitchContainer;
