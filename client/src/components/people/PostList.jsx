import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Cloudinary } from "@cloudinary/url-gen";
import {AdvancedImage} from "@cloudinary/react";
import { Box, Typography } from '@mui/material'
// import { StyledEngineProvider } from '@mui/material/styles';


 

const cldImage = new Cloudinary({ cloud: { cloudName: "dpsjn9leb" } });


const PostList = ({ post }) => {
  const navigate = useNavigate();
  const image = cldImage.image(post.images[0].imageId);

  // console.log(post, "check me");
  const handleClick = () => {

    return navigate(`/people/experiance/${post.placeOfJourney}`, {
      state: post
    });
  }

  return (
    <>




      <Box  component="div" sx={cssParent} onClick={handleClick} className={post?.images[0]?.imageId}>

        {/* <Box component="div" sx={imageContainer}> */}
        <AdvancedImage alt="data" cldImg={image} style={imageStyle} />
        {/* </Box> */}

        <Box component="div" sx={contentStyle}>
          <Box component="div" sx={placeStyle}>

            <Typography variant="h5">PLACE  :</Typography>
            <Typography variant="body1">
              {post.placeOfJourney}

            </Typography>
          </Box>
          <Box component="div" sx={experianceStyle}>
            <Typography variant="h5">
              EXPERIANCE :
            </Typography>

            <Typography variant="body1">
              {post.description.substr(0,150)}

            </Typography>
          </Box>

          <Box component="div" sx={userStyle}>
            <Typography variant="h5">
              USER  :
            </Typography>
            <Typography variant="body1">

              {post.userId}
            </Typography>
          </Box>


        </Box >
      </Box >


    </>
  )
}

export default PostList

const cssParent = {
  
  display: "flex",

  border: 'black solid 2px',
  height: 'fit-content',
  margin: '2em 2em',
  width: "75vw",
  maxHeight: "45vh",
  overflow: "hidden",
  boxShadow: "2px 2px 4px blue",
  cursor : "pointer",
  // p : "2px"


}

const imageContainer = {
  maxWidth: "50%"

}

const imageStyle = {
  // height: "20vmax",
  maxWidth: "50%",
  aspectRatio: "1/1",
  // width : "40vh",
  // width : "inherit", 
  // maxWidth : "inherit"

}




const placeStyle = {
  // border: "solid 4px blue",
  height: 'fit-content',
  mb:1,
  // fontSize : "1.5em",
  // maxWidth : "99%",
  // maxHeight: "10vh",
}

const experianceStyle = {

  // border: "solid 4px green",
  overflow : "hidden",
  textOverflow : 'ellipsis',
  height: 'fit-content',
  mb:1,
  // fontSize : "1.5em",
  // maxWidth : "99%",
  maxHeight: "40%",

}

const userStyle = {
  // border: "solid 4px orange",
  height: 'fit-content',
  // fontSize : "1.5em",
  // maxWidth : "99%",
  // maxHeight: "10vh",
}


const contentStyle = {
  // border: "solid violet 2px",
  width: "100%",
  p: 1,
  display :"flex",
  flexDirection : "column",
  justifyContent : "space-between"
} 