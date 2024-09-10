import { AppBar, Box, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Webhook } from '@mui/icons-material'
const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
  typography: {
    h1: {
      fontSize: '1.2rem',
      fontWeight: 'bolder'
    }
  }
})
const Header = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{backgroundColor:'rgba(0,0,0,0.7)'}}>
        <Toolbar sx={{justifyContent:'space-between', mx:10}}>
          <Box sx={{display:'flex'}}>
            <Webhook />
            <Typography variant='h1'>
              Tech Blog
            </Typography>
          </Box>
          <Box sx={{display:'flex', gap:2}}>
            <Typography>
              Home
            </Typography>
            <Typography>
              About
            </Typography>
            <Typography>
              Blog Categories
            </Typography>
            <Typography>
              Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
