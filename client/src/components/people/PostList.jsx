import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { Box, Typography } from '@mui/material'
// import { StyledEngineProvider } from '@mui/material/styles';




const cldImage = new Cloudinary({ cloud: { cloudName: "dpsjn9leb" } });


const PostList = ({ post }) => {
  const navigate = useNavigate();
  const image = cldImage.image(post.images[0].imageId);

  console.log(post, "check me");
  const handleClick = () => {

    return navigate(`/people/experiance/${post.placeOfJourney}`, {
      state: post
    });
  }

  return (
    <>




      <Box
        component="div"
        sx={cssParent}
        onClick={handleClick}
        className={`${post?.images[0]?.imageId} rounded-xl border  bg-gradient-to-tl from-[rgba(176,28,221,0.85)] to-[rgb(43,230,80)]  shadow-custom-xl shadow-[rgb(255,194,124)]` }

      >

      
        {/* <AdvancedImage alt="data" cldImg={image} style={imageStyle} /> */}
        <img src={post?.images[0]?.imageURL} className='w-[40%] max-h-[300px]' />
 

        <Box
          component="div"
          sx={contentStyle}
        >
          <Box
            component="div"
            sx={placeStyle}
          >

            <Typography variant="p" className='font-sans'>Travel to  :</Typography>
            <Typography variant="p" className='font-hand font-extrabold text-2xl'  >
              {post.placeOfJourney}

            </Typography>
          </Box>
          <Box
            component="div"
            sx={experianceStyle}
          >
            {/* <Typography variant="h5">
              EXPERIANCE :
            </Typography> */}

            <Typography variant="p" className='font-hand font-bold text-xl'>
              {post.description.substr(0, 150)}
            </Typography>
          </Box>

          <Box
            component="div"
            sx={userStyle}
          >
            <Typography variant="body2">
              Post By  :
            </Typography>
            <Typography variant="body1">

              {post.userId}
            </Typography>

          </Box>

          <Box
            component="div"
            sx={userStyle}
          >
            <Typography
              variant='body1'
              className='text-right'
            >
              {post.createdAt.substr(0, 10)}

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

  // border: 'black solid 2px',
  height: 'fit-content',
  margin: '2em 2em',
  width: "75vw" , 
  // minWidth: "fit-content",

  // maxHeight: "50vh",
  overflow: "hidden",
  // boxShadow: "2px 2px 4px ",
  cursor: "pointer",
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
  mb: 1,
  // fontSize : "1.5em",
  maxWidth : 'fit-content',
  // maxHeight: "10vh",
}

const experianceStyle = {

  // border: "solid 4px green",
  overflow: "hidden",
  textOverflow: 'ellipsis',
  height: 'fit-content',
  mb: 1,
  // fontSize : "1.5em",
  // maxWidth : "9%",
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
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
} 