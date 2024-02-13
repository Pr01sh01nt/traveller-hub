import React from 'react';
import  Typography from '@mui/material/Typography';

const UserPost = ({data:{placeOfJourney, description, type}}) => {
  return (
    <>
            <div>
                <Typography sx={{textAlign : "center"}} variant= "h1">{placeOfJourney}</Typography>
                <Typography variant = "h5">Experiance : </Typography>
                <Typography variant= "body1">
                    {description}
                </Typography  >
            </div>
    </>
  )
}

export default UserPost;
