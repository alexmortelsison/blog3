import { AppBar, Box, Button, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  },
})

const Header = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{mb:4}}>
        <Toolbar sx={{justifyContent:"space-between"}}>
          <Typography>
            Tech Blog
          </Typography>
          <Box>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Blog Categories</Button>
            <Button color='inherit'>Contact</Button>
          </Box>
        </Toolbar>
     </AppBar>
    </ThemeProvider>
    
  )
}

export default Header
