import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';

const PeopleProfile = () => {
    const user = null;
    const {state} = useLocation();

    console.log(state, "d");

  return (
    <>
      
      <div className='border border-black m-10 rounded-md '>
        <div>
          <img src={state?.imageURL || `https://png.pngtree.com/background/20230612/original/pngtree-butterfly-wings-wallpaper-best-wallpapers-for-your-desktop-images-of-picture-image_3188441.jpg`}
            className='w-full h-[25vh]'
          />
         
         
        </div>

        <div className='relative sm:top-[-95px] top-[-80px] left-10 p-0 z-[1]'>
          <Avatar
            className='border-[5px] border-[rgb(231,224,224)]  '
            sx={{
              width: {
                xs: 100,
                sm: 200
              },
              height: {
                xs: 100,
                sm: 200
              },
            }}
            src={state?.profilePicURL || `https://png.pngtree.com/background/20230612/original/pngtree-butterfly-wings-wallpaper-best-wallpapers-for-your-desktop-images-of-picture-image_3188441.jpg`}
          />


         
         

        </div>

        <div className='border border-black  p-2 relative top-[-170px] rounded-lg sm:top-[-150px]'>
       
       

          <div className='sm:pt-[70px] pt-[5px]'>
            {state?.username}
            |  {state?.email} |
            <br />
            {state?.about}
          </div>
        </div>
      </div>


    </>
  )
}

export default PeopleProfile;
