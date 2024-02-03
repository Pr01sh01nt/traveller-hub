import React from 'react'

const UserPost = ({data:{placeOfJourney, description, type}}) => {
  return (
    <>
            <div>
                <h1>{placeOfJourney}</h1>
                
                <p>
                    {description}
                </p>
            </div>
    </>
  )
}

export default UserPost
