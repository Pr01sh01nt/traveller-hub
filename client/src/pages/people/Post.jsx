import React from 'react'
import { useLocation } from 'react-router-dom'
import { Cloudinary } from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  accessibility,
  placeholder
} from "@cloudinary/react";
import Comment from '../../components/people/Comment';
import { Box, Button, TextField, Typography, ImageList, ImageListItem, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import peoplecss from './People.module.css';



const Post = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);

  console.log('i am posst');

  const cldImage = new Cloudinary({ cloud: { cloudName: "dpsjn9leb" } });

  return (
    <>
    <StyledEngineProvider injectFirst>
      <Box component="div" className= {peoplecss.post}>
        <Box className="{editformcss.imageContainer}" component="div" sx={{ maxHeight: "80vh", overflowY: 'auto' }}>

          <ImageList variant="masonry" gap={8}>
            {location.state?.imageId?.map((image) =>
              <ImageListItem key={image.size}>
                <AdvancedImage style={{ opacity: 1 }} className={peoplecss.cloudImage} alt="IMAGES" cldImg={cldImage.image(image)} width={200} imageId={image} plugins={[lazyload()]} />
              </ImageListItem>
            )}
          </ImageList>

        </Box>


        <Typography variant="h1">{location.state.placeOfJourney}</Typography>

        <Typography variant="body1">{location.state.description}</Typography>



      </Box>
      {/* comment section */}
      <Box component="div" className= {peoplecss.comment}>
      <Comment postId={location.state._id} username={location.state.userId} />
      </Box>
      
      </StyledEngineProvider>
    </>
  )
}

export default Post
