import React from 'react'
import { useNavigate } from 'react-router-dom'
import usercss from './User.module.css'


const Card = ({children, userPost}) => {
  const navigate = useNavigate();

  const handleClick = ()=>{
     navigate(`/user/editpost`, {
      state : userPost
     })
  }

  return (
    <>
      
        <div className={usercss.card} onClick = {handleClick}>
          <div className={usercss.cardImg}>

            {children}
          </div>
            <div className={usercss.cardContent}>
            <hr/>
              <h3>{userPost.placeOfJourney}</h3>
                {userPost.description}
            </div>
        </div> 
                    
       
    </>
  )
}

export default Card
