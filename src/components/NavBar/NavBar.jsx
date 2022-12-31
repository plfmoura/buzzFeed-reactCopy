import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LogoNavBar from '../LogoNavBar/Index';
import { Link } from '@mui/material';
import Style from './NavBar.module.css'
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

export default function NavBar() {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/search'; 
    navigate(path);
  }

let trendTopics = ["Testes", "Copa do Mundo", "Tv e Filmes", "Celebridades", "Política", "Celebridades", "🏳️‍🌈BuzzQueer", "Política", "BuzzGeek", "BuzzShe", "🗣Vozes", "Tasty Demais", "Shopping", "Colunistas"]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" 
        sx={{ width: "100%",
            backgroundColor: "#fff", 
            height: "20vh",
        }}>
        <Box sx={{
          width: {
            xs: "96%",
            sm: "96%",
            md: "96%",
            lg: "85%",
            xl: "80%"
            },
          height: "60%",
          margin: "-.7rem auto 0 auto"
        }}>
          <Toolbar sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "10vh",
            marginTop: 2
          }}>

            <Box sx={{ display: "flex" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: -5 }}
              >
                <MenuIcon sx={{color: 'black', fontSize: "2.4rem"}}/>
              </IconButton>
              <LogoNavBar />
            </Box>
            
            <Search onClick={routeChange}>
              <SearchIcon sx={{color: 'black', transform: 'rotate(90deg)', cursor: 'pointer', marginRight: 1.5}}/>
            </Search>
          </Toolbar>

        </Box>
        <Box sx={{
          borderTop: "1px solid #f1f1f1",
          width: {
            xs: "96%",
            sm: "96%",
            md: "96%",
            lg: "85%",
            xl: "80%"
            },
          height: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}>

        <Box sx={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          marginLeft: "-1%"
          }}>

          {
            trendTopics.map((topicos, key) => (
              <Link sx={{  marginInline: "1%" }}
              key={key}
              href='#' 
              underline="none" 
              color="#000" 
              className={Style.linkTrendTopics}>
                {topicos}
                </Link>
            ))
          }

        </Box>

          {/* logo dos trend topics */}
          <Link sx={{position: "relative", zIndex: "999", boxShadow: "-15px 0px 13px 1px #fff", marginRight: 3}}>
            <img src={"/navBar/BuzzFeed-symbol.png"} alt="" width="45em"/>
          </Link>
        </Box>
      </AppBar>
    </Box>
  );
}