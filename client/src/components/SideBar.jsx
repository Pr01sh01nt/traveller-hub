import React from 'react'
import appcss from '../App.module.css'
import { Link } from 'react-router-dom'
import { useState, useRef, useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
    

const SideBar = ({currState}) => {
  const {hasLogin,setHasLogin} = useContext(MyContext);
  const [_,removeCokkie] = useCookies(["accesstoken"]);
  const navigate = useNavigate();

  const logout = ()=>{
    console.log("logout");
    removeCokkie("accesstoken",{ path: '/' }); 
    setHasLogin(0);
    navigate('/');
  }


  return (
    <>
      <div className={appcss.sideBar}>
    {hasLogin===1 ? (<>
      <Link to="/user/home"  style={{ textDecoration: 'none' }}><div className={appcss.sideBarElement}>Home</div></Link>
    </>):(<>
    <Link to="/"  style={{ textDecoration: 'none' }}><div className={appcss.sideBarElement}>Home</div></Link> 
    </>)}
    

    
    <Link to="/about" style={{ textDecoration: 'none' }}><div className={appcss.sideBarElement}>About</div></Link>
    <Link to="/contacts" style={{ textDecoration: 'none' }}><div className={appcss.sideBarElement}>Contacts</div></Link>

    {hasLogin===1&& <div className={appcss.sideBarElement} onClick={logout}>Logout</div>}

    </div>
     
    </>
  )
}

export default SideBar
