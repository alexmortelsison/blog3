import { Box, Card, CardContent, CardMedia, createTheme, Grid, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import techi from '../assets/1.jpg'
import gadi from '../assets/3.jpg'
import progi from '../assets/4.jpg'
import softi from '../assets/5.jpg'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    h3: {
      fontSize: '2rem',
      color: 'white',
      textAlign:'center',
      marginBottom: '20px'
    },
    h4: {
      fontSize: '1.2rem',
      color: 'white',
      marginBottom: '20px',
      textAlign:'center',
    },
  }
})

const categories = [
  {
    title: 'Tech News',
    image: techi,
  },
  {
    title: 'Gadget Reviews',
    image: gadi,
  },
  {
    title: 'Programming Tips',
    image: progi,
  },
  {
    title: 'Software Updates',
    image: softi,
  },
]

const CategoriesSection = () => {
  return (
   <ThemeProvider theme={darkTheme}>
    <Box sx={{backgroundColor:'#121212', p:'20px'}}>
      <Typography variant='h3'>Explore Our Categories</Typography>
      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{display:'flex', flexDirection:'column', backgroundColor:'#1e1e1e',}}>
              <CardMedia 
                component={'img'}
                image={category.image}
                alt={category.title}
                height='100vh'
                >
              </CardMedia>
              <CardContent>
                <Typography variant='h4'>{category.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
   </ThemeProvider>
  )
}

export default CategoriesSection
