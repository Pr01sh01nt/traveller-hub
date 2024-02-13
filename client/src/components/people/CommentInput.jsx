import React, {useState} from 'react'
import {Box, Button, TextField} from '@mui/material' 
import { StyledEngineProvider } from '@mui/material/styles';
import InsertCommentIcon from '@mui/icons-material/InsertComment';



const CommentInput = ({handleAddComment}) => {
    const [comment, setComment] = useState("");

    console.log(comment);

  return (
    <>
           <TextField label="Comment" sx={{mb:2, width : "50vw"}} multiline variant= "filled"  onChange = {(e)=>{setComment(e.target.value)}}/>
      
      <Button sx={{mb:2}} variant = "contained" startIcon={<InsertCommentIcon/>} onClick = {()=>{handleAddComment(comment)}}>Add Comment</Button >
    </>
  )
}

export default CommentInput;
