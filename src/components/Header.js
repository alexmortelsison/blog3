import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define the dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h6: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#fff',
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar sx={{ mb: 4 }}>
        <Toolbar  sx={{ flexDirection: { xs: 'column', sm: 'row' }, justifyContent:'space-between'}}>
          <Box>
            <Typography variant="h6">
              Tech Blogs
            </Typography>
          </Box>
          <Box sx={{ display: 'flex'}}>
            <Button >Home</Button>
            <Button >About</Button>
            <Button >Categories</Button>
            <Button >Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
