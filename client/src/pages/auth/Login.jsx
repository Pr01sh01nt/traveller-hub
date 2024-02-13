import React from 'react'
import { useState, useEffect } from 'react'
import logcss from './Auth.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import {Box, Button, TextField} from '@mui/material' 
import { StyledEngineProvider } from '@mui/material/styles';


export const Login = () => {
  const [userData, setData] = useState({});
  const [_, setCookie] = useCookies(["accesstoken"]);
  const navigate = useNavigate();

  // console.log(userData, "from login");

  const handleSubmit = async(event) => {
    event.preventDefault();

    // console.log(userData);

    try{ 
      const response = await axios.post("http://localhost:3001/auth/login", userData);
      // console.log(response);
      setCookie("accesstoken", response.data.accesstoken, {path:'/'});

      if(response.data.accesstoken)
      {
        navigate("/user/home");
      }
      else alert('Something went wrong');

    }catch(err){
        // console.log(err);
        alert('Something went wrong!!');
    }

  }

  return (
    <>
    
    <StyledEngineProvider injectFirst>
    <Box component="div" className={`${logcss.form} ${logcss.loginForm}`}> 
        
        <Box component= "form" onSubmit={handleSubmit}>
          <Box component= "fieldset" className={`${logcss.fieldset} ${logcss.loginField}`}>
            <Box component="div" className={logcss.content}>
              <TextField margin = "dense" variant= "filled" label = "Username"  type="text" required onChange={(e) => { setData({ ...userData, username: e.target.value }) }} />
            </Box>

            <Box component="div" className={logcss.content}>
               <TextField margin = "dense" variant= "filled" label = "Password"  type="password" required onChange={(e) => { setData({ ...userData, password: e.target.value }) }} />
            </Box>

            

            <Box component="div" className={logcss.content}>
              <Button variant= "contained" className={logcss.button}  type = "submit">LogIn</Button>
            </Box>

          </Box >
        </Box>
      </Box>
      </StyledEngineProvider>

    
    </>
  )
}
