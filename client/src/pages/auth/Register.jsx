import React from 'react'
import { useState} from 'react'
import regcss from './Auth.module.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

export const Register = () => {
  const [userData, setData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(userData);

    try{
      const response = await axios.post("http://localhost:3001/auth/register", userData);
      console.log(response);
        alert("user registered");
        navigate("/auth/login");
    }catch(err){
        alert('username exists');
        console.log(err);
    }

  }
  return (
    <>


      <div className={regcss.form}>
        
        <form onSubmit={handleSubmit}>
          <fieldset className={regcss.fieldset}>
            <div className={regcss.content}>
              <label htmlFor="username">Username<span aria-label="required">*</span>:</label> <input id="username" type="text" required onChange={(e) => { setData({ ...userData, username: e.target.value }) }} />
            </div>

            <div className={regcss.content}>
              <label htmlFor="password">Password<span aria-label="required">*</span>:</label> <input id="password" type="password" required onChange={(e) => { setData({ ...userData, password: e.target.value }) }} />
            </div>

            <div className={regcss.content}>
              <label htmlFor="dob">DOB : </label><input id="dob" type="date" onChange={(e) => { { setData({ ...userData, dob: e.target.value }) } }} />
            </div>

            <div className={regcss.content}>
              <button className={regcss.button}>Register</button>
            </div>
            <Link to ="/auth/login"><div className={regcss.content}>
              <button className={regcss.button}>Login</button>
            </div></Link>
          </fieldset>
        </form>
      </div>

    </>
  )
}
