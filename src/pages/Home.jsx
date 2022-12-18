import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CardArticleMini from '../components/CarArticleMini/Index.jsx'
import CardArticle from '../components/CardArticle/Index.jsx'
import CardBombando from '../components/CardBombando/Index.jsx'
import CardSocial from '../components/CardSocial/Index.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'
import './Home.module.css'

export default function Home() {

  const miniArticleTopics = [
    {
      titulo: "Mostre o quanto você conhece o seu filho e descubra o presente ideal para o Dia das Crianças",
      sub: "Filhos, afilhados, sobrinhos, crianças queridas...",
      image: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_283,h_184/image-uploads/post-list-image/png/fe2a6be2930c7b15dd9d4ab718778981.png",
      autor: "Promovido por",
      company: "BuzzFeed" 
    }, 
    {
      titulo: "10 itens para comemorar o Dia do Sorvete",
      sub: "Hoje é o Dia do Sorvete. Vem ver nossa seleção de sabores!",
      image: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_283,h_184/image-uploads/post-list-image/png/0c56704a4031fbea1850ade465b9a905.png",
      autor: "Promovido por",
      company: "BuzzFeed" 
    },
    {
      titulo: "7 momentos em que o cheirinho do seu amor te faz sorrir",
      sub: "Sentir o perfume de quem a gente gosta é maravilhoso porque...",
      image: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_283,h_184/image-uploads/post-list-image/png/aabd8066d8dfb6574ba12e5872c15937.png",
      autor: "Promovido por",
      company: "BuzzFeed" 
    }, 
    {
      titulo: "10 itens que desperta o estudante em você",
      sub: "O período de volta às aulas mexe com todos os...",
      image: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_283,h_184/image-uploads/post-list-image/png/d9a696cc08323b689f68982da35e36f3.png",
      autor: "Promovido por",
      company: "BuzzFeed" 
    },
    {
      titulo: "10 grande achados do Prime Day",
      sub: "Só ofertona!",
      image: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_283,h_184/image-uploads/post-list-image/png/5e6b266eb7bdef1568e64c80718cd745.png",
      autor: "Promovido por",
      company: "BuzzFeed" 
    }, 
    {
      titulo: "9 acessórios para deixar sua casa muito conectada",
      sub: "Tudo na palma da sua mão e ao alcance da voz...",
      image: "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_283,h_184/image-uploads/post-list-image/jpeg/a8e9177df46f7a4e6497cd783a0df57b.jpg",
      autor: "Promovido por",
      company: "BuzzFeed" 
    },
  ]
  return (
    <>
        <NavBar/>
        <Grid container rowSpacing={4} spacing={2} width="90%" sx={{margin: "0 auto"}}>
            <Grid item xs={8}>
                <CardArticle />
                {
                  miniArticleTopics.map((responseTopics) => (
                    <CardArticleMini 
                      title={responseTopics.titulo}
                      sub={responseTopics.sub}
                      image={responseTopics.image}
                      autor={responseTopics.autor}
                      company={responseTopics.company}
                      />
                  ))
                }
            </Grid>
            <Grid item xs={4} >
              <Container> 
                <CardSocial />
                <CardBombando />
              </Container>
            </Grid>
        </Grid>
    </>
  )
}