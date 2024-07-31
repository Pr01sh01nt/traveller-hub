import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import Comment from '../../components/people/Comment';
import { Box, Button, TextField, Typography, ImageList, ImageListItem, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Avatar } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import peoplecss from './People.module.css';
import { MyContext } from '../../context/MyContext';
import toast from 'react-hot-toast';
import axios from 'axios';



const Post = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // console.log(location);
  // console.log(location.state);

  // console.log('i am posst');

  const cldImage = new Cloudinary({ cloud: { cloudName: "dpsjn9leb" } });

  console.log(location, 'location');

  useEffect(()=>{

    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/people`, {
      params : {
        username : location?.state?.userId,
      }
    })
    .then(data=>{
      setUser(data.data);
    })
    .catch(err=>{console.error(err)})

  },[]);

  return (
    <>
    <div className=' min-h-screen flex justify-center items-center'>

      <StyledEngineProvider injectFirst>

        <div
          className='flex flex-col justify-between items-center '
        >

          <Box
            component="div"
            className={`${peoplecss.post} w-[80vw]`}
          >
            <div
              className='flex justify-start border-b-2 border-[rgb(86,82,82)] w-full p-2 cursor-pointer'
              onClick={()=>{ 
                navigate("/people/profile", {
                  state : user
                });

              }}
            >
              <Avatar
                src={user?.profilePicURL}
                alt="profile_pic"
                className=' shadow-2xl '
                sx={{ height: 80, width: 80 }}
              />
              <Typography
                variant='h5'
                className='pl-4  flex items-center'

              >

                {user?.username}
              </Typography>
            </div>

            <Box className="{editformcss.imageContainer}" component="div" sx={{ maxHeight: "80vh", overflowY: 'auto' }}>


              <ImageList variant="masonry" gap={8}>
                {location.state?.images?.map((image) =>
                  <ImageListItem key={image?.size}>
                    <AdvancedImage style={{ opacity: 1 }} className={peoplecss.cloudImage} alt="IMAGES" cldImg={cldImage.image(image.imageId)} width={200} imageId={image.imageId} plugins={[lazyload()]} />
                  </ImageListItem>
                )}
              </ImageList>

            </Box>


            <Typography variant="h3">{location.state.placeOfJourney}</Typography>

            <Typography variant="body1">{location.state.description}</Typography>



          </Box>
          {/* comment section */}
          <Box component="div" className={`${peoplecss.comment} w-[80vw] `}>
            <Comment postId={location.state._id} username={location.state.userId} />
          </Box>
        </div>

      </StyledEngineProvider>
    </div>
    </>
  )
}

export default Post
