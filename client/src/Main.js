import React, {  useEffect, useState }  from 'react'
import { MyContext } from './context/MyContext';
import App from './App';
import axios from 'axios';



const Main = () => {
    const [hasLogin, setHasLogin] = useState(0);
    const [user, setUser] = useState(null);

    useEffect(()=>{

        axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/auth`,{
          withCredentials : true
        }).then(data => {
          console.log(data, "user data");
          setUser(data.data.user);
        });

    },[]);
    
  return (
    <>
       <MyContext.Provider value={{hasLogin, setHasLogin, user}}>
        <App />
      </MyContext.Provider>
    </>
  )
}

export default Main
