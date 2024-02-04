import React from 'react'
import { useLocation } from 'react-router-dom'
import { Cloudinary} from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  accessibility,
  placeholder
} from "@cloudinary/react";
import Comment from '../../components/people/Comment';


const Post = () => {
    const location = useLocation();
    console.log(location);
    console.log(location.state);

  console.log( 'i am posst');
  
const cldImage = new Cloudinary({ cloud:{ cloudName: "dpsjn9leb" }});

  return (
    <>
        <div>
        <AdvancedImage alt="data" cldImg={cldImage.image(location.state?.imageId[0])} height={200} width={200}/>
          <div>{location.state.placeOfJourney}</div> 
 
          <div>{location.state.description}</div> 
       
        
                
        </div>
        {/* comment section */}
        <Comment postId={location.state._id} username={location.state.userId}/>
        
    </>
  )
}

export default Post
