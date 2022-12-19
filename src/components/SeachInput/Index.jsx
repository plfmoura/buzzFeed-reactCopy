import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/system';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
  transform: 'rotate(90deg)'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  backgroundColor: '',
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  borderRadius: '10px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '35em',
      fontSize: '20px',
      height: '2.5em'
    },
  },
}));

export default function SeachInput() {

  return (
    <Container sx={{mt: '2%', width: "100%", display: "flex", justifyContent: "center"}}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Pesquise no BuzzFeed"
          inputProps={{ 'aria-label': 'search' }}
          />
      </Search>
    </Container>
  );
}
