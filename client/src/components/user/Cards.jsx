import React from 'react'
import { useNavigate } from 'react-router-dom'
import usercss from './User.module.css'
import { Box, Button, TextField, Typography, Card, CardContent, CardActionArea, CardMedia } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { Cloudinary} from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  accessibility,
  placeholder
} from "@cloudinary/react";



const cldImagee = new Cloudinary({ cloud:{ cloudName: "dpsjn9leb" }});


const Cards = ({ children, userPost }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/editpost`, {
      state: userPost
    });

    console.log(children ,"hey i am a child");

  }

  return (
    <>

      <StyledEngineProvider injectFirst>
        <Card  className={usercss.card}  onClick={handleClick} sx={{ maxWidth: 345 }}>
          <CardActionArea className={usercss.cardActionArea}>
             <CardMedia
          component="img"
 
          image=""
          alt=""
        />

          
            {children}
              
            
            {/* <AdvancedImage className={usercss.img} alt="data" cldImg={cldImagee.image(data.myImg)} height={5} width={5}/> */}
           
            <CardContent >
              <Typography gutterBottom variant="h5">
                {userPost.placeOfJourney}
              </Typography>
              <Typography variant="body2" color="text.secondary" className= {usercss.cardContent}>
                {userPost.description.substr(0,150)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>




      </StyledEngineProvider>

      {/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
 
          image="https://res.cloudinary.com/dpsjn9leb/image/upload/tazuapcsysbepgab1o8p?_a=DAJFJtWIZAAC"
          alt="green iguana"
        />

        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}

    </>
  )
}

export default Cards;