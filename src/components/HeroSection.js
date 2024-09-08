import { ThemeProvider } from '@emotion/react'
import { Box, createTheme } from '@mui/material'
import React from 'react'

import backgroundImg from '../assets/bg.jpg'

const darktheme = createTheme({
  palette: {
    mode: "dark"
  }
})

const HeroSection = () => {
  return (
    <ThemeProvider theme={darktheme}>
      <Box 
        sx={{
          height: '100vh',
          display: 'flex',
          overflow: 'hidden',
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition:'center',
          }}>
      </Box>
      <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          }}
        />
    </ThemeProvider>
  )
}

export default HeroSection
