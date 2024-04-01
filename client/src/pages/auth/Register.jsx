import React from 'react'
import { useState} from 'react'
import regcss from './Auth.module.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import {Box, Button, TextField} from '@mui/material' 
import { StyledEngineProvider } from '@mui/material/styles';


export const Register = () => {
  const [userData, setData] = useState({dob:" "});
  const navigate = useNavigate();
  // console.log(userData);

  const handleSubmit = async(event) => {
    event.preventDefault();
    // console.log(userData);

    try{
      const response = await axios.post("/api/auth/register", userData);
      // console.log(response);
        alert("user registered");
        navigate("/auth/login");
    }catch(err){
        alert('username exists');
        // console.log(err);
    }

  }

  return (
    <>
    
     <StyledEngineProvider injectFirst>

      <Box component = "div" className={regcss.form} >
        
        <Box component = "form" onSubmit={handleSubmit}>
          <Box component= "fieldset" className={regcss.fieldset}>
            <Box component = "div" className={regcss.content}>
                <TextField margin = "dense" variant = "filled" color = "info" label ="Username"  type="text" required onChange={(e) => { setData({ ...userData, username: e.target.value }) }} />
            </Box>

            <Box component = "div" className={regcss.content}>
              <TextField margin = "dense" variant = "filled" label ="Password"  type="password" required onChange={(e) => { setData({ ...userData, password: e.target.value }) }} />
            </Box>

            <Box component = "div" className={regcss.content}>
             <TextField  margin = "dense"  variant = "filled" label = "DOB" type="date"  value={userData.dob} onChange={(e) => { { setData({ ...userData, dob: e.target.value }) } }} />
            </Box>

            <Box component = "div" className={regcss.content}>
              <Button variant="contained" className={regcss.button} type = "submit">Register</Button>
            </Box>
            <Link to ="/auth/login" style={{ textDecoration: 'none' }}><Box className={regcss.content}>
              <Button  variant="contained" className={regcss.button}>Login</Button>
            </Box></Link>
          </Box>
        </Box>
      </Box>
      </StyledEngineProvider>

    </>
  )
}
