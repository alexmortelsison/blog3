import { AppBar, Box, Button, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'

const darktheme = createTheme({
  palette: {
    mode: "dark"
  }
})

const Header = () => {
  return (
    <ThemeProvider theme={darktheme}>
       <AppBar>
        <Toolbar sx={{justifyContent:"space-between"}}>
          <Typography>
            Tech Blogs
          </Typography>
          <Box>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Blog Categories</Button>
            <Button>Contact</Button>
          </Box>
        </Toolbar>
       </AppBar>
    </ThemeProvider>
   
  )
}

export default Header
