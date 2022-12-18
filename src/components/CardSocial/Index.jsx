import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Style from './CardSocial.module.css'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilYoutube } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'

export default function CardSocial() {
  return (
    <Card sx={{ width: 380, height: 310, padding: ".2rem", borderRadius: 2}} className={Style.cardContainer}>
      <CardContent>
        <Typography sx={{ fontSize: 17, marginBottom: 2}} gutterBottom >
          Redes sociais do BuzzFeed Brasil
        </Typography>
      </CardContent>
      <CardActions>
        <Container sx={{marginLeft: "-1rem", paddingBottom: 20}} className={Style.buttonsContainer}>
            <Button variant="contained" className={Style.socialButton} sx={{fontSize: 16, textTransform: 'none', margin: "0 auto 1rem auto", borderRadius: 0, display: "flex", justifyContent: "space-between", paddingRight: 8}}
            startIcon={
                <UilFacebookF />
            }>Curta a gente no Facebook</Button>
            <Button variant="contained" className={Style.socialButton} sx={{fontSize: 16, textTransform: 'none', margin: "1rem auto", borderRadius: 0, display: "flex", justifyContent: "space-between", paddingRight: 11.2}}
            startIcon={
                <UilTwitter/>
            }>Siga-nos no Twitter</Button>
            <Button variant="contained" className={Style.socialButton} sx={{fontSize: 16, textTransform: 'none', margin: "1rem auto", borderRadius: 0, display: "flex", justifyContent: "space-between", paddingRight: 9}}
            startIcon={
                <UilYoutube/>
            }>Inscreva-se no Youtube</Button>
            <Button variant="contained" className={Style.socialButton} sx={{fontSize: 16, textTransform: 'none', margin: "1rem auto", borderRadius: 0, display: "flex", justifyContent: "space-between", paddingRight: 9.5}}
            startIcon={
                <UilInstagram/>
            }>Siga-nos no Instagram</Button>
        </Container>
      </CardActions>
    </Card>
  );
}
