import React, { Children } from 'react'
import usercss from './User.module.css'
import Cards from '../../components/user/Cards'
import { Link, Outlet } from 'react-router-dom';
import { Cloudinary} from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  accessibility,
  placeholder
} from "@cloudinary/react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Box, Button, TextField, Typography} from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';





const cldImagee = new Cloudinary({ cloud:{ cloudName: "dpsjn9leb" }});
// const myImg = cldImagee.image("hvixjsawv1ad5e4opsle");
console.log("userhome rendered");

const UserHome = () => {
  
    const [journeyData, setJourneyData] = useState([]);
    // import imageId from backend and show all images
    useEffect(()=>{
                 axios.get("http://localhost:3001/user/home")
                        .then((response)=>{
                            response = response.data;
                            console.log(response); 
                            let  userData = [];
                            response.map((data)=>{
                                console.log(data ,"dataa");
                                console.log(data.imageId[0],"i am fetching");//taking only the first image
   
                   
                                userData.push({myImg:data.imageId[0], userPost:data});
                            });
                            console.log(userData, "j");
                            
                            setJourneyData(userData);
                        }) 
                            .catch((err)=>{console.log(err)});


    } , []);
 
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
        <Box component= "div" className={usercss.cards}>
                 
        {journeyData.length!=0 && journeyData.map((data)=><Cards key={data.userPost._id} userPost={data.userPost}><AdvancedImage className={usercss.img} alt="data" cldImg={cldImagee.image(data.myImg)} height={50} width={50}/></Cards>) }
         
        </Box>

        <Box component= "div" className={usercss.btn}>
            <Link to ="/people/experiances"><Button variant= "contained" className={usercss.view}> View other Expreinces</Button></Link>
        </Box>
      </StyledEngineProvider>
    </>
  )
}

export default UserHome
