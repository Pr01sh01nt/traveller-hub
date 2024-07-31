import React, { Children } from 'react'
import usercss from './User.module.css'
import Cards from '../../components/user/Cards'
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import Carousel from '../../components/Carousel';




const UserHome = () => {

  const [journeyData, setJourneyData] = useState([]);


  console.log("userhome rendered");








  // import imageId from backend and show all images
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/user/home`)
      .then((response) => {
        response = response.data;
        console.log(response, "from userhome");
        let userData = [];
        response.map((data) => {
          console.log(data, "dataa");
          console.log(data?.images[0], "i am fetching");//taking only the first image


          userData.push({ myImg: data?.images[0]?.imageURL, userPost: data });
        });
        console.log(userData, "j");

        setJourneyData(userData);
      })
      .catch((err) => { console.log(err) });


  }, []);

  // console.log(journeyData);

  let cardComponents = journeyData.map((data) => {
    return <Cards key={data?.userPost?._id} userPost={data?.userPost}>
      {data.myImg}

    </Cards>
  })

  return (
    <>
      <div className={`${usercss.bgimage}  bg-cover bg-center h-fit `}>

      <StyledEngineProvider injectFirst>
        <Typography 
        variant="h2"
         className={`${usercss.heading} pt-10 font-serif  font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}
        >
          Save your Memories
        </Typography>


        <Box component="div" className={usercss.btn}>
          <Link to="/user/myjourney">
          <Button variant="contained" className={`${usercss.save} bg-gradient-to-tl from-[rgba(40,108,211,0.85)] to-[rgba(48,212,62,0.85)]`}>ADD JOURNEY</Button></Link>
        </Box>



        <Typography variant="h4" className=' text-center font-bold mb-1 font-serif bg-clip-text text-transparent  bg-gradient-to-tl from-[rgba(176,28,221,0.85)] to-[rgb(43,230,80)]'>
          My travels
        </Typography>
        <Box
          component="div"
          className={`bg-gradient-to-tr from-[rgba(0,0,0,0.45)] to-[rgba(255,255,255,0.63)] py-4`}

        >

          <Carousel cardComponents={cardComponents} />
        </Box>

        <Box component="div" className={usercss.btn}>
          <Link to="/people/experiances"><Button variant="contained" className={`${usercss.view} bg-gradient-to-b from-[rgba(31,216,62,0.85)] to-[rgb(85,63,3)]`}> View other Expreinces</Button></Link>
        </Box>
      </StyledEngineProvider>
      </div>

    </>
  )
}




export default UserHome
