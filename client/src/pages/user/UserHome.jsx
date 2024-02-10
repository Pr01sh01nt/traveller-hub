import React from 'react'
import usercss from './User.module.css'
import Card from '../../components/user/Card'
import { Link, Outlet } from 'react-router-dom';
import { Cloudinary} from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  responsive,
  accessibility,
  placeholder
} from "@cloudinary/react";
import { useEffect, useState } from 'react';
import axios from 'axios';




const cldImagee = new Cloudinary({ cloud:{ cloudName: "dpsjn9leb" }});
// const myImg = cldImagee.image("hvixjsawv1ad5e4opsle");
console.log("userhome rendered");

const UserHome = () => {
  
    const [journeyData, setJourneyData] = useState([]);
    // import imageId from backend and show all images
    useEffect(()=>{
                 axios.get("http://localhost:3001/user/home")
                        .then((response)=>{
                            response = response.data;
                            console.log(response); 
                            let  userData = [];
                            response.map((data)=>{
                                console.log(data ,"dataa");
                                console.log(data.imageId[0],"i am fetching");//taking only the first image
   
                   
                                userData.push({myImg:data.imageId[0], userPost:data});
                            });
                            console.log(userData, "j");
                            
                            setJourneyData(userData);
                        }) 
                            .catch((err)=>{console.log(err)});


    } , []);


  return (
    <>
        <h1 className={usercss.heading}>
            Save your Memories
        </h1> 
        <div className={usercss.btn}>
            <Link to="/user/myjourney"><button className={usercss.save}>SAVE JOURNEY</button></Link>
        </div>

            <h3>My travels</h3>
        <div className={usercss.cards}>
                 
        {journeyData.length!=0 && journeyData.map((data)=><Card key={data.userPost._id} userPost={data.userPost}><AdvancedImage className={usercss.img} alt="data" cldImg={cldImagee.image(data.myImg)} height={500} width={500}/></Card>) }
         
        </div>

        <div className={usercss.btn}>
            <Link to ="/people/experiances"><button className={usercss.view}> View other Expreinces</button></Link>
        </div>
      
    </>
  )
}

export default UserHome
