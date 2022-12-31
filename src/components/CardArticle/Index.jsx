import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';
import Style from './CardArticle.module.css'

export default function CardArticle() {

  let topicTitle = "Argentina se torna tricampeã mundial - e a Copa do Mundo do Catar é de Lionel Messi"
  let topicSubTitle = "Nosso hermano é o CARA!"
  let topicAutor = "Diego Bargas"
  let topicTime = "Há 5 horas"
  return (
    <Card sx={{ width: {
      xs: 100,
      sm: 650,
      md: 720,
      lg: 750,
      xl: 850
      }, height: {
        xs: 100,
        sm: 500,
        md: 550,
        lg: 550,
        xl: 650
      }, marginLeft: -2, borderRadius: 2}} className={Style.cardContent}>
      <CardMedia
        component="img"
        height="100%"
        image="https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_728,h_256/image-uploads/post-list-image/jpeg/b9af20d9cc9d93691894591705855d6f.jpg"
        alt=""
        sx={{padding: 2.5}}
      />
      <CardContent sx={{padding: "1rem"}}>
        <Typography gutterBottom variant="h4" component="div" sx={{fontWeight: "600", marginTop: -2}}>
          {topicTitle}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {topicSubTitle}
        </Typography>
      </CardContent>
      <CardActions sx={{margin: "-1rem 0 0 0", padding: "1rem"}}>
        <Link sx={{mr: 1}}>
          <img src={"/navBar/BuzzFeed-symbol.png"} alt="" width="45em"/>
        </Link>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
          <Typography variant='subtitle2'>{topicAutor}</Typography>
          <Typography variant='subtitle2' color="text.secondary">{topicTime}</Typography>
        </Box>
      </CardActions>
    </Card>
  );
}