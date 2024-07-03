import React from 'react'
import { useNavigate } from 'react-router-dom'
import usercss from './User.module.css'
import { Box, Button, TextField, Typography, Card, CardContent, CardActionArea, CardMedia } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';


const Cards = ({ children, userPost }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/editpost`, {
      state: userPost
    });

    // console.log(children, "hey i am a child");

  }

  return (
    <>

      <StyledEngineProvider injectFirst>
        <Card className={usercss.card} onClick={handleClick} sx={{ maxWidth: 345 }}>
          <CardActionArea className={usercss.cardActionArea}>
            <CardMedia
              component="img"
              image={`${children}`}
              alt="image"
              className=' aspect-square'
            />

            <CardContent 
              className=' h-[150px]'
            >
              <Typography gutterBottom variant="h5">
                {userPost.placeOfJourney.substr(0,40)}
              </Typography>
              <Typography variant="body2" color="text.secondary" className={usercss.cardContent}>
                {userPost.description.substr(0, 150)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

      </StyledEngineProvider>



    </>
  )
}

export default Cards;