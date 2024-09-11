import { Box, Button, Container, createTheme, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import bg from '../assets/bg.jpg'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    h1: {
      fontSize: '3rem',
      color: 'white',
      fontWeight: 'bolder',
      marginBottom: '20px'
    },
    h2: {
      fontSize: '1.5rem',
      color: 'white',
      fontWeight: 'bold',
      marginBottom: '80px'
    }
  }

})

const HeroSection = () => {
  return(
    <ThemeProvider theme={darkTheme}>
    <Box sx={{
        backgroundImage:`url(${bg})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display:'flex',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Box sx={{
          position: 'absolute',
          backgroundColor:'rgba(0,0,0,0.7)',
          top: 0,
          left: 0,
          height: '100%',
          width:'100%',
          zIndex:1
          }}>
        </Box>
        <Container sx={{zIndex:2}}>
          <Typography variant='h1'>Stay Ahead with the Latest in Tech</Typography>
          <Typography variant='h2'>Insights, Reviews, and Trends from the World of Technology</Typography>
          <Button variant='contained' size='large' >Explore Our Categories</Button>
        </Container>  
      </Box>
  </ThemeProvider>
  )
}

export default HeroSection
