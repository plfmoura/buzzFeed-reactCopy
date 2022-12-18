import { Grid } from '@mui/material'
import React from 'react'
import CardArticle from '../components/CardArticle/Index.jsx'
import CardSocial from '../components/CardSocial/Index.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'
import './Home.module.css'

export default function Home() {
  return (
    <>
        <NavBar/>
        <Grid container rowSpacing={4} spacing={2} width="90%" sx={{margin: "0 auto"}}>
            <Grid item xs={8}>
                <CardArticle />
            </Grid>
            <Grid item xs={4}>
                <CardSocial />
            </Grid>
        </Grid>
    </>
  )
}