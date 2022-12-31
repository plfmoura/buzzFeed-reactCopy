import { Box } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LogoNavBar() {
  let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = '/'; 
      navigate(path);
    }

  return (
    <Box sx={{ margin: 0}}>
      <img src={"/navBar/BuzzFeed-Logo.png"} onClick={routeChange} alt="Logo da BuzzFeed" width="170px" style={{ cursor: 'pointer' }}/>
    </Box>
  )
}
