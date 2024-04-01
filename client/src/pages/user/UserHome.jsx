import React, { Children } from 'react'
import usercss from './User.module.css'
import Cards from '../../components/user/Cards'
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Box, Button, TextField, Typography} from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import Carousel from '../../components/Carousel';





const UserHome = () => {
  
  const [journeyData, setJourneyData] = useState([]);
  
  
  console.log("userhome rendered");
    
    
    
    
    
    
    
    
    // import imageId from backend and show all images
    useEffect(()=>{
      axios.get("/api/user/home")
      .then((response)=>{
        response = response.data;
        console.log(response); 
        let  userData = [];
        response.map((data)=>{
          console.log(data ,"dataa");
          console.log(data?.images[0],"i am fetching");//taking only the first image
          
          
          userData.push({myImg:data?.images[0]?.imageURL, userPost:data});
        });
        console.log(userData, "j");
        
        setJourneyData(userData);
      }) 
      .catch((err)=>{console.log(err)});
      
      
    } , []);

    console.log(journeyData);

    let cardComponents = journeyData.map((data)=>{return <Cards key={data?.userPost?._id} userPost={data?.userPost}>
      {data.myImg}
    
    </Cards>}) 
    return (
    <>
    
              
    <StyledEngineProvider injectFirst>
        <Typography variant = "h2" className={usercss.heading}>
            Save your Memories
        </Typography> 
        
        
        <Box component= "div" className={usercss.btn}>
            <Link to="/user/myjourney"><Button variant= "contained" className={usercss.save}>ADD JOURNEY</Button></Link>
        </Box>

            <Typography variant= "h4">My travels</Typography>
        {/* <Box component= "div" className={usercss.cards}> */}
                 
        <Carousel cardComponents={cardComponents}/>
        {/* </Box> */}

        <Box component= "div" className={usercss.btn}>
            <Link to ="/people/experiances"><Button variant= "contained" className={usercss.view}> View other Expreinces</Button></Link>
        </Box>
      </StyledEngineProvider>
    </>
  )
}




export default UserHome
