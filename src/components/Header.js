import { ThemeProvider } from '@emotion/react'
import { AppBar, Box, createTheme, Toolbar, Typography } from '@mui/material'
import { Webhook } from '@mui/icons-material'
import React from 'react'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    h1: {
      fontSize: '1.2rem',
      fontWeight: 'bolder',
      color: 'aqua'
    }
  }
})

const Header = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar>
        <Toolbar sx={{justifyContent:'space-between'}}>
          <Box sx={{display:'flex'}}>
            <Webhook sx={{color:'aqua'}}/>
            <Typography variant='h1'>Tech Blog</Typography>
          </Box>
          <Box sx={{display:'flex', gap:2}}>
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Blog Categories</Typography>
            <Typography>Contact</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
