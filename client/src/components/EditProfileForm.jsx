import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import toast from 'react-hot-toast';
import axios from 'axios';



const EditProfileForm = ({ setIsOpen }) => {



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log(e.currentTarget);

      const data = new FormData(e.currentTarget);
      console.log(data.get('email'));
      console.log(data.get('about'));

      const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/auth/editProfile`, 
          {
            email : data.get('email'),
            about : data.get('about')
          },
        {withCredential : true});

        console.log(res.data);



      toast.success("Updated successful!!");

    } catch (err) {
      console.error(err);
      toast.error("Form error");

    }
  }


  return (
    <>
      <Box
        className="min-h-[100vh] min-w-[100vw] fixed top-0  z-[11]  flex justify-center items-center bg-[rgba(0,0,0,0.88)]"
      >

        <Box
          component='div'
          className='bg-gradient-to-r from-custom-blue to-custom-green rounded-xl p-4 w-[40vw]'

        >
          <div className='text-right'>
            <CloseIcon
              onClick={() => { setIsOpen(false) }}
              className=' cursor-pointer'
              color='error'
            />
          </div>

          <Typography
            variant='h5'
            className='text-center text-white font-extrabold  pt-4 '
          >
            EDIT FORM
          </Typography>

          <form
            className='flex flex-col    justify-evenly min-h-[30vh]'
            onSubmit={handleSubmit}
          >

            <TextField
              variant='filled'
              label='Your Email'
              name='email'
              type="email"
              className='my-4'
            />

            <TextField
              variant='filled'
              label='About'
              name='about'
              type="text"
              multiline
              className='my-[40px]'
            />


            <div
              className='flex justify-center'
            >
              <Button
                variant='contained'
                className='w-fit'
                type='submit'
              >
                Submit
              </Button>

            </div>
          </form>


        </Box>

      </Box>
    </>
  )
}

export default EditProfileForm
