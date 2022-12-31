import React, { useState } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import CardArticleMini from '../../components/CarArticleMini/Index.jsx'
import CardArticle from '../../components/CardArticle/Index.jsx'
import CardBombando from '../../components/CardBombando/Index.jsx'
import CardSocial from '../../components/CardSocial/Index.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'
import '../Base.module.css'

export default function Home() {

  const [miniTopics, setMiniTopics ] = useState([])

  const baseUrl = '/topics.json'
  axios.get(baseUrl).then((response) => {setMiniTopics(response.data.topics)})

  return (
    <>
      <NavBar/>
      <Grid container rowSpacing={4} spacing={0} sx={{margin: "0 auto", 
        width: {
            xs: "95%",
            sm: "80%",
            md: "70%",
            lg: "85%",
            xl: "80%"
            },
      }}>
          <Grid item xs={8} >
              <CardArticle />
              {
                miniTopics.map((responseTopics, key) => (
                  <CardArticleMini 
                    key={key}
                    title={responseTopics.titulo}
                    sub={responseTopics.sub}
                    image={responseTopics.image}
                    autor={responseTopics.autor}
                    company={responseTopics.company}
                    />
                ))
              }
          </Grid>
          <Grid item xs={4}>
            <Container > 
              <CardSocial />
              <CardBombando />
            </Container>
          </Grid>
      </Grid>
    </>
  )
}