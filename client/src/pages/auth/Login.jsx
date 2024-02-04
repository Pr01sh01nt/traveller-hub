import React from 'react'
import { useState, useEffect } from 'react'
import logcss from './Auth.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export const Login = () => {
  const [userData, setData] = useState({});
  const [_, setCookie] = useCookies(["accesstoken"]);
  const navigate = useNavigate();

  console.log(userData, "from login");

  const handleSubmit = async(event) => {
    event.preventDefault();

    console.log(userData);

    try{ 
      const response = await axios.post("http://localhost:3001/auth/login", userData);
      console.log(response);
      setCookie("accesstoken", response.data.accesstoken, {path:'/'});

      if(response.data.accesstoken)
      {
        navigate("/user/home");
      }
      else alert('Something went wrong');

    }catch(err){
        console.log(err);
        alert('Something went wrong!!');
    }

  }

  return (
    <>
    
    
    <div className={`${logcss.form} ${logcss.loginForm}`}> 
        
        <form onSubmit={handleSubmit}>
          <fieldset className={`${logcss.fieldset} ${logcss.loginField}`}>
            <div className={logcss.content}>
              <label htmlFor="username">Username<span aria-label="required">*</span>:</label> <input id="username" type="text" required onChange={(e) => { setData({ ...userData, username: e.target.value }) }} />
            </div>

            <div className={logcss.content}>
              <label htmlFor="password">Password<span aria-label="required">*</span>:</label> <input id="password" type="password" required onChange={(e) => { setData({ ...userData, password: e.target.value }) }} />
            </div>

            

            <div className={logcss.content}>
              <button className={logcss.button}>LogIn</button>
            </div>

          </fieldset>
        </form>
      </div>

    
    </>
  )
}
