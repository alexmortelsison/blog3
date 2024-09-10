import { Box, Button, Container, createTheme, ThemeProvider, Typography } from '@mui/material'
import React from 'react'

import backgroundImg from '../assets/bg.jpg'
import zIndex from '@mui/material/styles/zIndex'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    h1: {
      fontSize: '3rem',
      color: 'white',
      fontWeight: 'bolder'
    },
    h2: {
      fontSize: '1.5rem',
      color: 'white',
      fontWeight: 'bolder'
    }
  }
})

const HeroSection = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{
        backgroundImage:`url(${backgroundImg})`,
        height:'100vh',
        backgroundPosition:'center',
        backgroundSize:'cover',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        display:'flex'
      }}>
        <Box sx={{
          backgroundColor:'rgba(0,0,0,0.7)',
          position:'absolute',
          top:0,
          left:0,
          height:'100%',
          width:'100%',
          zIndex:1
        }}>
        </Box>
        <Container sx={{zIndex:2}}>
          <Typography variant='h1' sx={{mb:1.2}}>Stay Ahead with the Latest in Tech</Typography>
          <Typography variant='h2'sx={{mb:4}}>Insights, Reviews, and Trends from the World of Technology</Typography>
          <Button variant='contained' size='large'>Explore Categories</Button>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default HeroSection
