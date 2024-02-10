import React from 'react'
import appcss from '../App.module.css'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import { useState, useRef, useContext } from 'react'
import { MyContext } from '../context/MyContext'
import {Box, Button} from '@mui/material' 

export const Navbar = () => {

  const [path, setPath] = useState("M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z");
  const [isOpened, setIsOpened] = useState(false);
  const {hasLogin,setHasLogin} = useContext(MyContext);

  const handleClick = () => {
    setIsOpened(!isOpened);
    if (isOpened)
    setPath("M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z");
  else
  setPath("m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");

  }

 

  return (
  
    <>

      <Box  component = "div"  className={appcss.navbar}>
        <Box component = "div" onClick={handleClick} >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d={path} />
          </svg>
        </Box>
        <img alt="img" src='/fav2.pn' />
        {hasLogin===1? <Link to="#"><Button  variant = "contained" >Profile</Button></Link> : <Link to="/auth/register"><Button variant = "contained" >CONNECT JOURNEY</Button></Link>}
     

      </Box> 

   
      {isOpened && <SideBar />}

    </>
  )
}
