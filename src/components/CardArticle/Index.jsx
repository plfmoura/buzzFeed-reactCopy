import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';
import Style from './CardArticle.module.css'

export default function CardArticle() {

  let topicTitle = "10 crushes da final da Copa do Mundo do Catar"
  let topicSubTitle = "Aposto que você adoraria marcar cada um deles!"
  let topicAutor = "Marcia Lopes"
  let topicTime = "Há 5 horas"
  return (
    <Card sx={{ width: 760, height: 500, marginLeft: -2}} className={Style.cardContent}>
      <CardMedia
        component="img"
        height="100%"
        image="https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_728,h_256/image-uploads/post-highlight-image/png/0d5bccea85628376611a735d68558dd2.png"
        alt="green iguana"
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
          <img src="public/BuzzFeed-symbol.png" alt="" width="45em"/>
        </Link>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
          <Typography variant='subtitle2'>{topicAutor}</Typography>
          <Typography variant='subtitle2' color="text.secondary">{topicTime}</Typography>
        </Box>
      </CardActions>
    </Card>
  );
}