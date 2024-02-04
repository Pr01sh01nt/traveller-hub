import React, {useState} from 'react'

const CommentInput = ({handleAddComment}) => {
    const [comment, setComment] = useState("");

    console.log(comment);

  return (
    <>
           <input placeholder="Write your comments here......" onChange = {(e)=>{setComment(e.target.value)}}/>
      <button onClick = {()=>{handleAddComment(comment)}}>Add Comment</button>
    </>
  )
}

export default CommentInput
