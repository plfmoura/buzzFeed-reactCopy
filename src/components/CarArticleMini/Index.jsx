import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { Box, Link } from '@mui/material';

export default function CardArticleMini(props) {
  return (
    <Card sx={{ width: {
      xs: 100,
      sm: 600,
      md: 700,
      lg: 750,
      xl: 800
      }, minHeight: 200, borderRadius: 2, marginTop: 4, ml: -1.8 }}>
      <CardActionArea sx={{ display: "flex", justifyContent: "left", alignItems: "center", padding: 2 }}>
        <CardMedia
          component="img"
          image={props.image}
          alt={props.title}
          sx={{width: {
            xs: 100,
            sm: 250,
            md: 250,
            lg: 250,
            xl: 300
            }, marginTop: .7, marginLeft: .3}}
        />
        <Container sx={{display: "flex", flexDirection: "column" }}>
            <CardContent sx={{height: "10rem", mt: 0}}>
                <Typography gutterBottom variant="h5" component="div" sx={{ml: -1}}>
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ml: -1}}>
                    {props.sub}
                </Typography>
            </CardContent>
            <Box sx={{ display: "flex", mt: 2 }}>
                <Link sx={{ mr: 1 }}>
                    <img src={"/navBar/BuzzFeed-symbol.png"} alt="" width="45em"/>
                </Link>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <Typography variant='subtitle2'>{props.autor}</Typography>
                    <Typography variant='subtitle2' color="text.secondary">{props.company}</Typography>
                </Box>
            </Box>
        </Container>
      </CardActionArea>
    </Card>
  );
}
