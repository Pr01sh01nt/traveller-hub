import React, { useState } from 'react';
import { Box, Button, Typography, Card, CardActionArea, CardContent, Stack } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import homecss from '../App.module.css';

const Home = () => {


  return (
    <>
    <StyledEngineProvider injectFirst>
    <Box component="div" className={homecss.firstContainer}>

      <Box component="div" sx={{pl: 10, pr:10}} className={homecss.firstChild}>
      <Typography sx={{ textAlign: "center", pb: 4}} variant="h2" className={homecss.variant2}>
        Welcome to VoyageLink!
      </Typography>

      <Typography variant="h5" className={homecss.variant5} >
        Your ultimate platform for sharing and discovering unique travel experiences. Connect with fellow explorers, document your journeys, and get inspired for your next adventure.
      </Typography>

    
        </Box>
    <Box component="div" >
      <img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "img" className={homecss.image}/>
    </Box>





    </Box>


      <Typography sx={{ml:5}} variant="h2" className={homecss.variant21} >Features Galore</Typography>
      <Typography sx={{ml:5}} variant="body1">Dive into VoyageLink's myriad of features designed to enrich your travel experiences, from story sharing to real-time interactions.</Typography>



    <Stack direction="row" gap={10} sx={{m:10}} className={homecss.stack}>

    

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Easy Login
            </Typography>
            <Typography variant="body2" color="text.secondary">
              One-click access to enter the world where explorations and connections come alive almost instantly.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>


      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Comments
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Engage instantly with the travel community for tips, friendships, and amazing collaborative experiences.
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>


      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Post Trips
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Easily share your latest travel adventures with stories, photos, and more, inspiring others to explore.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Stack>
      </StyledEngineProvider>
    </>
  )
}

export default Home
