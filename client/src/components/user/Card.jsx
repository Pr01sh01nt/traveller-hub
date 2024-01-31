import React from 'react'
import usercss from './User.module.css'


const Card = (props) => {
  return (
    <>
      
        <div className={usercss.card}>
          <div className={usercss.cardImg}>

            {props.children}
          </div>
            <div className={usercss.cardContent}>
            <hr/>
              <h3>{props.journeyPlace}</h3>
                {props.description}
            </div>
        </div> 
                    
       
    </>
  )
}

export default Card
