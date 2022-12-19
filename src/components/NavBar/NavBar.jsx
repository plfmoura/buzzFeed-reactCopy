import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LogoNavBar from '../LogoNavBar/Index';
import { Link } from '@mui/material';
import Style from './NavBar.module.css'
import { useNavigate } from 'react-router-dom';
import Seach from '../../pages/Seach';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {

  let navigate = useNavigate(); 
  const routeChange = (value) =>{ 
    let path = value; 
    navigate(path);
  }

let trendTopics = ["Testes", "Copa do Mundo", "Tv e Filmes", "Celebridades", "Política", "Celebridades","Política", "🏳️‍🌈BuzzQueer","BuzzGeek","BuzzShe","🗣Vozes","Tasty Demais","Shopping"]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" 
        sx={{
            backgroundColor: "#fff", 
            height: "21vh",
        }}>
        <Box sx={{
          width: "88%",
          height: "50%",
          margin: "-.7rem auto 0 auto"
        }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: -5 }}
            >
              <MenuIcon sx={{color: 'black', fontSize: "2.4rem"}}/>
            </IconButton>
            
            <LogoNavBar onClick={routeChange('/')} />

            <Search>
              <SearchIcon onClick={routeChange('/seach')} sx={{color: 'black', transform: 'rotate(90deg)'}}/>
            </Search>
          </Toolbar>

        </Box>
        <hr className={Style.menuLine}/>
        <Box sx={{
          width: "88%",
          height: "50%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          {
            trendTopics.map((topicos, key) => (
              <Link 
              key={key}
              href='#' 
              underline="none" 
              color="#000" 
              className={Style.linkTrendTopics}>
                {topicos}
                </Link>
            ))
          }

          {/* logo dos trend topics */}
          <Link>
            <img src={"/navBar/BuzzFeed-symbol.png"} alt="" width="45em"/>
          </Link>
        </Box>
      </AppBar>
    </Box>
  );
}