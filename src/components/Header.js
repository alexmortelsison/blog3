import { ThemeProvider } from '@emotion/react'
import { AppBar, Box, Button, createTheme, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { WebhookTwoTone } from '@mui/icons-material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    h1: {
      fontSize: '1.2rem',
      fontWeight: 'bold'
    },
    button1: {
      color:'white',
      fontWeight: 'bold',
      fontSize: '1.2rem',
    }
  }
})

const Header = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{mb:'10px'}}>
        <Toolbar sx={{justifyContent: 'space-between', flexDirection:{xs: 'column', sm:'row'}}}>
          <Box sx={{display: 'flex', mt: '20px'}}>
            <WebhookTwoTone sx={{color: 'aqua',}}/>
            <Typography variant='h1' sx={{color:'aqua'}}>Tech Blogs</Typography>
          </Box>
          <Box sx={{mt: '20px'}}>
            <Button variant='button1'>Home</Button>
            <Button variant='button1'>About</Button>
            <Button variant='button1'>Categories</Button>
            <Button variant='button1'>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Header
