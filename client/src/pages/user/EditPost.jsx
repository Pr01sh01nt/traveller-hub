import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { EditForm, EditImage } from '../../components/user/EditForm';
import UserPost from '../../components/user/UserPost';


const EditPost = () => {
    const location = useLocation();
    const [edit, setEdit] = useState(false);


    const deleteJourney = async()=>{  
      try{
        
        const response = await axios.get("http://localhost:3001/user/deletejourney",{ params:{_id:location.state?._id}});
        console.log(response, "deleted");
        } catch(err){
          console.log(err, "delete error");
          
        }
    }
    
    const handleClick  = ()=>{
      setEdit(!edit);
    }
    
    console.log('edit post renders');

    console.log(location.state,"showin from location");

  return (
    <>
      
           <div >
            <EditImage id = {location.state?._id}/>
      
        </div>


        {edit===true ? <EditForm data = {location.state} /> : <><UserPost data = {location.state}/><button onClick = {handleClick}>EDIT JOURNEY</button> </>}
       <button onClick = {deleteJourney}>DELETE JOUNREY</button>
    </>
  )
}

export default EditPost
