import { ThemeProvider } from '@emotion/react'
import { AppBar, Box, Button, createTheme, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Webhook } from '@mui/icons-material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    h1: {
      fontSize: '1.3rem',
      fontWeight: 'bolder',
    }
  }
})

const Header = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{mb:4}}>
        <Toolbar  sx={{ flexDirection: { xs: 'column', sm: 'row' }, justifyContent:'space-between'}}>
          <Box sx={{display:'flex', color:'aqua'}}>
            <Webhook></Webhook>
            <Typography variant='h1'>Tech Blog</Typography>
          </Box>
          <Box sx={{display:'flex'}}>
            <Button variant='h1'>Home</Button>
            <Button variant='h1'>About</Button>
            <Button variant='h1'>Categories</Button>
            <Button variant='h1'>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
