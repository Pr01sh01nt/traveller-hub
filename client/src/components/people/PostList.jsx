import React from 'react'
import { Link, Outlet,  useNavigate} from 'react-router-dom';
import { Cloudinary} from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  accessibility,
  placeholder
} from "@cloudinary/react";


const cldImage = new Cloudinary({ cloud:{ cloudName: "dpsjn9leb" }});

const css = {
  border: 'black solid 2px',
  height: 'fit-content',
  margin: '2em 2em'
  
}
const PostList = ({post}) => {
  const navigate = useNavigate();
  const image = cldImage.image(post.imageId[0]);
 
  console.log(post,"check me");
  const handleClick = ()=>{
    
    return navigate(`/people/experiance/${post.placeOfJourney}`,{
      state: post
    });
  }
  
  return (
    <>

  
    
    
    <div style={css} onClick={handleClick} className={post.imageId[0]}>
        
        <AdvancedImage alt="data" cldImg={image} height={100} width={100}/>
        
        <div>{post.placeOfJourney}</div> 
        <div>{post.description}</div> 
    </div>
    
   
</>
  )
}

export default PostList
