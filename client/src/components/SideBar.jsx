import React from 'react'
import appcss from '../App.module.css'
import { Link } from 'react-router-dom'
import { useState, useRef, useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import {Box} from '@mui/material' 
    

const SideBar = ({setIsSideBarOpened}) => {
  const {hasLogin,setHasLogin} = useContext(MyContext);
  const [cookie, setCookie,removeCokkie] = useCookies(["accesstoken"]);
  const navigate = useNavigate();

  const logout = ()=>{
    console.log("logout");
    removeCokkie("accesstoken", { path: '/' }); 
    setHasLogin(2);
    setIsSideBarOpened(false);
    navigate('/');
  }


  return (
    <>
      <Box  component = "div" className={appcss.sideBar}>
    {hasLogin===1 ? (<>
      <Link to="/user/home"  style={{ textDecoration: 'none' }}><Box component = "div" className={appcss.sideBarElement} onClick = {()=>(setIsSideBarOpened(false))}>Home</Box></Link>
    </>):(<>
    <Link to="/"  style={{ textDecoration: 'none' }}><Box component = "div" className={appcss.sideBarElement} onClick = {()=>(setIsSideBarOpened(false))}>Home</Box></Link> 
    </>)}
    

    
    <Link to="/about" style={{ textDecoration: 'none' }}><Box component = "div" className={appcss.sideBarElement} onClick = {()=>(setIsSideBarOpened(false))}>About</Box></Link>
    <Link to="/contacts" style={{ textDecoration: 'none' }}><Box  component = "div"className={appcss.sideBarElement} onClick = {()=>(setIsSideBarOpened(false))}>Contacts</Box></Link>

    {hasLogin===1&& <Box  component = "div"className={appcss.sideBarElement} onClick={logout} >Logout</Box>}

    </Box>
     
    </>
  )
}

export default SideBar
