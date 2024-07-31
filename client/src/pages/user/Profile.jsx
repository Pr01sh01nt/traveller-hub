import { Avatar, Icon, IconButton, styled } from '@mui/material'
import React, { useContext, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import EditProfileForm from '../../components/EditProfileForm';
import { MyContext } from '../../context/MyContext';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios';

const VisuallyHiddenInput = styled('input')({
  opacity: 0,
  // height: 1,
  position: 'absolute',
  bottom: 0,
  left: 0,
  // whiteSpace: 'nowrap',
  width: 40,
});


const Profile = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(MyContext);

  console.log(user);

  const handleDashboardPic = async (e) => {
    try {
      console.log(e.target.files[0]);


      const data = new FormData();
      data.append("file", e.target.files[0]);
      const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/auth/dashboardImage`,
        data, {
        withCredentials: true
        }
      );

      
      // console.log(res);

    } catch (err) {
      console.error(err);
    }
  }

  const handleProfilePicChange = async (e) => {
    try {

      const data = new FormData();
      data.append("file", e.target.files[0]);
      const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/auth/profilePic`,
        data, {
        withCredentials: true,
      }
      );

      console.log(res);

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className='border border-black m-10 rounded-md '>
        <div>
          <img src={user?.imageURL || `https://png.pngtree.com/background/20230612/original/pngtree-butterfly-wings-wallpaper-best-wallpapers-for-your-desktop-images-of-picture-image_3188441.jpg`}
            className='w-full h-[25vh]'
          />
          <div className='text-right '>
            <IconButton
              className='relative top-[-25vh] bg-white cursor-pointer z-[2]'
            >

              <AddPhotoAlternateIcon className=' text-white cursor-pointer'
                fontSize='large'
              />
              <VisuallyHiddenInput
                type="file"
                // multiple
                name="images"
                accept=".jpg, .jpeg, .png"
                onChange={handleDashboardPic}
              />
            </IconButton>
          </div>
        </div>

        <div className='relative sm:top-[-125px] top-[-80px] left-10 p-0 z-[1]'>
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
            src={user?.profilePicURL || `https://png.pngtree.com/background/20230612/original/pngtree-butterfly-wings-wallpaper-best-wallpapers-for-your-desktop-images-of-picture-image_3188441.jpg`}
          />


          <IconButton
            component="label"
            variant="contained"
            className="bg-white text-[rgb(34,45,163)]   top-[-11vh] left-[60px] sm:top-[-11vh] sm:left-[146px]  z-[2]  border rounded-3xl cursor-pointer "

          > 
            <AddPhotoAlternateIcon className=' text-[rgb(107,154,215)] cursor-pointer '
              fontSize='large'
            />
            <VisuallyHiddenInput
              type="file"
              // multiple
              name="images"
              accept=".jpg, .jpeg, .png"
              onChange={handleProfilePicChange}
            />
          </IconButton>

        </div>

        <div className='border border-black  p-2 relative top-[-170px] rounded-lg sm:top-[-260px]'>
          <div className='text-right pr-4 cursor-pointer'>
            <IconButton
              className='cursor-pointer  z-[3]'
              onClick={() => { setIsOpen(true) }}
            >
              <EditIcon
                className='text-black cursor-pointer'
                fontSize='large'
              />

            </IconButton>
          </div>

          <div className='sm:pt-[70px] pt-[5px]'>
            {user?.username}
            |  {user?.email} |
            <br />
            {user?.about}
          </div>
        </div>
      </div>
      {isOpen && <EditProfileForm setIsOpen={(val) => { setIsOpen(val) }} />}

    </>
  )
}

export default Profile;