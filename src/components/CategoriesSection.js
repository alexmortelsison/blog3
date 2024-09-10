import { backdropClasses, Box, Card, CardContent, CardMedia, createTheme, Grid, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import techNewsImage from '../assets/1.jpg'
import gadgetReviewsImage from '../assets/3.jpg'
import programmingTipsImage from '../assets/4.jpg'
import softwareUpdateImage from '../assets/5.jpg'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }, 
  typography: {
    h3: {
      fontSize: '2rem',
      color: 'white',
      textAlign: 'center',
      marginBottom: '20px'
    }
  }
})

const categories = [
  {
    title: 'Tech News',
    image: techNewsImage,
  },
  {
    title: 'Gadget Reviews',
    image: gadgetReviewsImage,
  },
  {
    title: 'Programming Tips',
    image: programmingTipsImage, 
  },
  {
    title: 'Software Updates',
    image: softwareUpdateImage, 
  },
];

const CategoriesSection = () => {
  return (
    <ThemeProvider theme={darkTheme}> 
      <Box sx={{backgroundColor:'#121212', padding: '20px'}}>
        <Typography variant='h3'>Explore Our Categories</Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{display:'flex', flexDirection:'column', backgroundColor: '#1e1e1e'}}>
                <CardMedia
                  component='img'
                  image={category.image}
                  alt={category.title}
                  sx={{height:140}}
                >
                </CardMedia>
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
