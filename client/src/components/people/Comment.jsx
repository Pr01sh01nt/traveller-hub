import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import CommentInput from './CommentInput';
import axios from 'axios';

const Comment = ({postId}) => {
    const navigate = useNavigate();
    const [comments, setComments]  = useState([]);

    const handleCommentsClick = async()=>{
      try{
        const {data} = await axios.get("http://localhost:3001/people/experiance/comment", {withCredentials:true, params:{postId}});
        setComments(data);
        console.log(data); 

      }catch(err){
        console.log(err);
      }

    }

    const handleClick = ()=>{
        // navigate("/");
    }

    const handleAddComment = async(comment)=>{
      if(comment !== "")
      {
          try{
            const response = await axios.post("http://localhost:3001/people/experiance/comment", {comment, postId});
            console.log(response); 

          }catch(err){
            console.log(err);
          }
      } 
    }

  return (
    <>
        <div>
          <button onClick = {handleCommentsClick}>See comments</button>
          {/* /commnt shown */}
          { comments.map(({userId, comment, _id})=><div key={_id}>{userId}{comment}</div>) }
          
          <CommentInput handleAddComment={handleAddComment}/>
          

        <button onClick={handleClick}>Make a real time chat</button>

        </div>
        
    </>
  )
}

export default Comment
