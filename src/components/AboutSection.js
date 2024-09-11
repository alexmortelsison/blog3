import { Avatar, Box, Container, createTheme, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import janeDoeImg from '../assets/jane_doe.jpg'
import johnSmithImg from '../assets/john_smith.jpg'
import emilyJohnsonImg from '../assets/emily_johnson.jpg'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    h2: {
      fontSize: '2rem',
      color: 'white',
      textAlign: 'center',
      marginBottom: '20px'
    },
    body1: {
      body1: '1.2rem',
      color: 'white',
      textAlign: 'center',
      marginBottom: '20px'
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 'bolder',
      color: 'white',
      textAlign: 'center',
      marginBottom: '2px'
    },
  }
})

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Lead Editor',
    image: janeDoeImg,
  },
  {
    name: 'John Smith',
    role: 'Tech Writer',
    image: johnSmithImg,
  },
  {
    name: 'Emily Johnson',
    role: 'Contributor',
    image: emilyJohnsonImg,
  },
];

const AboutSection = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{p: '20px', backgroundColor:'#121212'}}>
        <Container>
          <Typography variant='h2'>About Tech Blogs</Typography>
          <Typography variant='body1'>Tech Blogs is your go-to source for the latest news, reviews, and trends in technology. Our mission is to provide insightful and up-to-date content that helps you stay ahead in the fast-paced world of tech. Whether you're a tech enthusiast, a professional, or just curious, we have something for you.</Typography>
          <Typography variant='h2'>Meet Our Team</Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper sx={{padding:'20px', display: 'flex', alignItems:'center', backgroundColor:'#1e1e1e'}}>
                  <Avatar
                    alt={member.name}
                    src={member.image}
                    sx={{height:100, width: 100, marginRight: '30px'}}  
                  >
                  </Avatar>
                  <Box>
                    <Typography variant='h3'>{member.name}</Typography>
                    <Typography variant='body1'>{member.role}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default AboutSection
