import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardBombandoMini from '../CardBombandoMini/Index';
import { height } from '@mui/system';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardBombando() {
    const topNewsBombando = [
        {
            imagem: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_728,h_256/image-uploads/post-list-image/png/ab60be3b492f9d61a6073a33e6162ab3.png",
            titulo: "8 fatos sobre o caso Flordelis, deputada e pastora condenada por ter ordenado a morte do marido",
            sub: "Promovido por HBO Max"
        },
        {
            imagem: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_728,h_256/image-uploads/post-list-image/gif/88393a0acaf06c8dc7782a3133f72cd4.gif",
            titulo: "Quanto você viveu esse ano?",
            sub: "Luísa Oguime - há 2 dias"
        },
        {
            imagem: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_728,h_256/image-uploads/post-list-image/png/7f86247747d4fb2a9c6ab9bc3dedb03e.png",
            titulo: "O que as visitas não podem fazer em casa? Este é o debate do dia!",
            sub: "Victor Calazans - há 3 dias"
        },
        {
            imagem: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_728,h_256/image-uploads/post-list-image/png/837358cc54482f02818e5eddfed5c198.png",
            titulo: "Você é mais sonho de Valsa ou Ouro Branco?",
            sub: "Victor Calazans - há 5 dias"
        },
        {
            imagem: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_728,h_256/image-uploads/post-highlight-image/png/4ce56c7a1ae1c90b12a88d30a300ddca.png",
            titulo: "Precisamos falar sobre o suposto campeonato de punheta na UFRJ, que infelizmente foi adiado",
            sub: "Victor Calazans - há 7 dias"
        },
    ]

  return (
    <Card sx={{ width: 380, marginTop: 4, display: "flex", flexDirection: "column" , alignItems: "center", borderRadius: 2}}>
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
                topNewsBombando.map((bombando, key) => (
                    <CardBombandoMini 
                        id={key}
                        image={bombando.imagem}
                        titulo={bombando.titulo}
                        sub={bombando.sub}/>
                ))
            }
        </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
