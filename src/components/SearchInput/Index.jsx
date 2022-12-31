import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '60%',
  backgroundColor: 'white',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'rotate(90deg)',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export default function SearchInput() {

  const [inputSeach, setInputSeach] = useState([])

  console.log(inputSeach)

  return (
    <Container sx={{mt: '2%', display: "flex", justifyContent: "center"}}>
      <Search sx={{
        width: {
          xs: "50%",
          sm: "50%",
          md: "50%",
          lg: "60%",
          xl: "60%",
        }, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height: 50
      }} onChange={(e) => setInputSeach(e.target.value)}>
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
