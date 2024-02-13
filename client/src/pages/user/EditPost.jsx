import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { EditForm, EditImage } from '../../components/user/EditForm';
import UserPost from '../../components/user/UserPost';
import {Box, Button, TextField, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import editcss from './User.module.css'

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
      
          <div className= {editcss.editImage} >
            <EditImage id = {location.state?._id}/>
      
        </div>

        <Box  compoent ="div" className= {editcss.editblock}>
          {edit===true ? <EditForm data = {location.state} /> : <><UserPost data = {location.state}/><Button variant= "contained" sx={{mb : 1, mt : 2}} onClick = {handleClick} endIcon = {<EditIcon/>}>EDIT JOURNEY</Button> </>}
        </Box>

        <Box sx={{display:"flex", justifyContent : "center", m : 4}} component="div">
              <Button variant= "contained" color = "error" onClick = {deleteJourney} startIcon={<DeleteIcon />}>DELETE JOUNREY</Button>

        </Box>
    </>
  )
}

export default EditPost
