import React from 'react'
import appcss from '../App.module.css'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import { useState, useRef, useContext } from 'react'
import { MyContext } from '../context/MyContext'
import {Box, Button, Avatar, Menu, MenuItem} from '@mui/material' 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

 
  const [sideBarIsOpened, setIsOpened] = useState(false);
  const {hasLogin,setHasLogin} = useContext(MyContext);

  const handleClick = () => {
    setIsOpened(!sideBarIsOpened);
  
  }

  const handleAvatarClick = (event)=>{
      setAnchorEl(event.currentTarget);
  }
  const handleAvatarClose = () => {
    setAnchorEl(null);
  };
 

  return (
  
    <>

      <Box  component = "div"  className={appcss.navbar}>
        <Box component = "div" onClick={handleClick} >
           {sideBarIsOpened ?  <CloseIcon fontSize="large"/> :   <MenuIcon fontSize="large"/>}
          
           
        </Box>
        <img alt="img" src='/fav2.pn' />
        {hasLogin===1? <>
        
          <Avatar sx={{ width: 56, height: 56 }} onClick = {handleAvatarClick}>P</Avatar>
         <Menu 
            anchorEl={anchorEl}
            open={open}
            onClose={handleAvatarClose}
         >
          
          
          <MenuItem onClick={handleAvatarClose}>Profile</MenuItem>
        <MenuItem onClick={handleAvatarClose}>My account</MenuItem>
        <MenuItem onClick={handleAvatarClose}>Logout</MenuItem>
          
          
          </Menu> </>: <Link to="/auth/register" style={{ textDecoration: 'none' }}><Button variant = "contained">CONNECT JOURNEY</Button></Link>}
     

      </Box> 
          
   
      {sideBarIsOpened && <SideBar />}

    </>
  )
}
