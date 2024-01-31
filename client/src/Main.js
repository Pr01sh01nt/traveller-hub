import React, { useEffect, useState, useContext }  from 'react'
import { MyContext } from './context/MyContext';
import App from './App';



const Main = () => {
    const [hasLogin, setHasLogin] = useState(0);
    console.log(hasLogin, "hi i am login variable");
  return (
    <>
       <MyContext.Provider value={{hasLogin, setHasLogin}}>
        <App />
      </MyContext.Provider>
    </>
  )
}

export default Main
