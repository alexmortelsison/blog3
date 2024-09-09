import { ThemeProvider } from '@emotion/react'
import { Box, Button, Container, createTheme, Typography } from '@mui/material'
import React from 'react'

import backgroundImg from "../assets/bg.jpg"

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: "bolder",
      color:"white",
      textAlign: "center",
      marginBottom: "1rem"
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: "bolder",
      color:"white"
    }
  }
})

const HeroSection = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box 
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          height: "100vh",
          backgroundPosition:"center",
          backgroundSize: "cover",
          alignItems: "center",
          textAlign: "center",
          display:"flex"
        }}>
        <Box sx={{
          position:"absolute",
          backgroundColor: "rgba(0,0,0,0.7)",
          top: 0,
          left:0,
          height: "100%",
          width:"100%",
          zIndex:1
        }}>
        </Box>
        <Container sx={{zIndex:2, position:'relative'}}>
          <Typography variant='h1' >
            Stay Ahead with the Latest in Tech
          </Typography>
          <Typography variant='h2'>
            Insights, Reviews, and Trends from the World of Technology
          </Typography>
          <Button variant='contained' size='large' sx={{mt:3}}>
            Explore Categories
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default HeroSection
