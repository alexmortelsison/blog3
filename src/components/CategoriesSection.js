import { Box, Card, CardContent, CardMedia, createTheme, Grid, ThemeProvider, Typography } from '@mui/material'
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
      fontSize:'2rem',
      color:'white',
      textAlign: 'center',
      marginBottom: '20px'
    },
    h4: {
      fontSize:'1.2rem',
      color:'white',
      textAlign: 'center'
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
    image: programmingTipsImage, // Use different images as needed
  },
  {
    title: 'Software Updates',
    image: softwareUpdateImage, // Use different images as needed
  },
];

const CategoriesSection = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{p: '20px', backgroundColor: '#121212'}}>
        <Typography variant='h3'>Our Categories</Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}> 
              <Card>
                <CardMedia
                  component='img'
                  image={category.image}
                  alt={category.title}
                  height='140vh'
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
