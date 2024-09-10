import { Box, Card, CardContent, CardMedia, createTheme, Grid, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import techImg from '../assets/1.jpg'
import gadgetImg from '../assets/3.jpg'
import progImg from '../assets/4.jpg'
import softImg from '../assets/5.jpg'

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
    }
  }
})

const categories = [
  {
    title: 'Tech News',
    image: techImg,
  },
  {
    title: 'Gadget Reviews',
    image: gadgetImg,
  },
  {
    title: 'Programming Tips',
    image: progImg,
  },
  {
    title: 'Software Updates',
    image: softImg,
  },
]

const CategoriesSection = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{padding:'20px', backgroundColor:'#121212'}}>
        <Typography variant='h3'>Explore Our Categories</Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{backgroundColor:'#1e1e1e'}}>
                <CardMedia 
                  component='img'
                  image={category.image}
                  alt={category.title}
                  sx={{height:140}}
                />
                <CardContent>
                  <Typography>{category.title}</Typography>
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
