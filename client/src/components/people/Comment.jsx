import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CommentInput from './CommentInput';
import axios from 'axios';
import { Box, Button, TextField, Typography, List, ListItem, ListItemText, Divider } from '@mui/material'
// import { StyledEngineProvider } from '@mui/material/styles';



const Comment = ({ postId }) => {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);

  const handleCommentsClick = async () => {
    try {
      const { data } = await axios.get("/api/people/experiance/comment", { withCredentials: true, params: { postId } });
      setComments(data);
      // console.log(data);

    } catch (err) {
      // console.log(err);
    }

  }

  const handleClick = () => {
    // navigate("/");
  }

  const handleAddComment = async (comment) => {
    if (comment !== "") {
      try {
        const response = await axios.post("/api/people/experiance/comment", { comment, postId });
        // console.log(response);

      } catch (err) {
        // console.log(err);
      }
    }
  }

  return (
    <>
  
      <Button sx={{ mb: 2 }} variant="contained" onClick={handleCommentsClick}>See comments</Button>
  
      <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {comments.map(({ userId, comment, _id }) => <Box sx={{ mb: 1 }} component="div" key={_id}>

            <ListItem alignItems="flex-start">
              <ListItemText
                primary={`${userId}`}
                secondary={
                  <>    
                      {comment}
                   </>
                }
              />
            </ListItem>
            <Divider sx={{color:"black"}} variant="fullWidth" component="li" />
         
          </Box >)}


        </List>
      </div>
      <CommentInput handleAddComment={handleAddComment} />


      {/* <Button variant="contained" onClick={handleClick}>Make a real time chat</Button> */}

 

    </>
  )
}

export default Comment
