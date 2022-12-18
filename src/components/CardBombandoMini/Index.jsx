import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import Style from './CardBombando.module.css'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CardBombandoMini(props) {
  return (
    <Card sx={{ width: "110%", margin: "-2rem 0 0 -1rem", boxShadow: "none" }}>
      <CardContent>
      <CardMedia
          component="img"
          height="100%"
          image={props.image}
          alt="green iguana"

          sx={{zIndex: "0", position: "relative" }}
        />
        <div className={Style.ImageNumber}>
            <p>{props.id + 1}</p>
        </div>
        <Typography variant="subtitle1" component="div" sx={{ fontWeight: 600, lineHeight: 1.2, marginTop: 1}}>
            {props.titulo}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            {props.sub}
        </Typography>
        
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
