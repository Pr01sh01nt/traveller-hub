import React, { useEffect, useState, useContext } from 'react'
import { Outlet, Route, Routes, Navigate, redirect, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { MyContext } from './context/MyContext';

export const UserPermission = ({pathValue}) => {
    // const [hasLogin, setHasLogin] = useState(0);
    const {hasLogin, setHasLogin} = useContext(MyContext);
  


    useEffect(() => {

        const check = async () => {
            try {
                const result = await axios.get(`http://localhost:3001/${pathValue}`, { withCredentials: true })
                    .then((res) => {
                        console.log(res.status);
                        return res.data;
                    });
                console.log(result, "RES");
                    
               
                setHasLogin(1);



            } catch (e) {
           
                setHasLogin(2);
                console.log('hi');
                console.log(e);
            }
        }

        check();
        
    }, [])


    return (
        <>

            {hasLogin ? (hasLogin === 1 ? <Outlet /> : <Navigate to="/auth/login" />) : <h1>Loading.......</h1>}
        </>


    );





}


