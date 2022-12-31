import * as React from 'react';
import { useState } from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardBombandoMini from '../CardBombandoMini/Index';
import axios from 'axios';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardBombando() {

  const [bombandoTopicos, setBombandoTopicos] = useState([])

  const baseUrl = '/topics.json'
  axios
    .get(baseUrl)
    .then((response) => {
      setBombandoTopicos(response.data.bombando)
  })
    
  return (
    <Card sx={{ width: {
      xs: 0,
      sm: 0,
      md: 0,
      lg: 370,
      xl: 400
      }, marginTop: 4, display: "flex", flexDirection: "column" , alignItems: "center", borderRadius: 2}}>
        <Box 
            sx={{backgroundColor: "#E41978",
                    width: "100%",
                    height: 10
            }}>
        </Box>
        <CardContent >
            <Typography component="div" sx={{ fontSize: 17, fontWeight: 600, margin: "0 0 2rem .1rem", color: "#E41978" }}> 
                Bombando no BuzzFeed
            </Typography>
            {
              bombandoTopicos.map((bombando, key) => (
                <CardBombandoMini 
                  id={key}
                  image={bombando.imagem}
                  titulo={bombando.titulo}
                  sub={bombando.sub}
                />
              ))
            }
        </CardContent>
      <CardActions>
      </CardActions>
      <Typography sx={{color: "red"}}>
        Desenvolvido por Pedro Moura - 2022
      </Typography>
    </Card>
  );
}
