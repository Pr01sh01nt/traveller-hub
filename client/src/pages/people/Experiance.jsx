import React, { useState, useRef, useEffect } from 'react'
import PostList from '../../components/people/PostList'
import SearchBar from '../../components/people/SearchBar'
import axios from 'axios'
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import Box  from '@mui/material/Box';


axios.defaults.withCredentials = true;

const Expreince = () => {
  const [postList, setPostList] = useState({posts:[], search:"", lastPost:false});
  // const [lastPost, setLastPost] = useState(false);
  const jump = useRef(0);
  const isFetching = useRef(false);

  const [endReach, setEndReach] = useInfiniteScroll(isFetching, postList.lastPost);

    // console.log(postList.search, "getsearch");
    // console.log('postlist renders', endReach);

  // console.log("fetching.....");
  useEffect(()=>{
    if(postList.lastPost)
    return undefined;
    // console.log("last post", postList.lastPost);
    
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchList = async()=>{
      try{
            const {data} = await axios.get("http://localhost:3001/people/experiances",{params:{jump:jump.current,search:postList.search}},{signal:signal});       
            // console.log(data,"i am fetched data :}");
            isFetching.current = false;
            
            if(data.length!=0)
            {jump.current+= 4;
              setPostList({...postList, posts:[...postList.posts,...data]});
            }
            else {
              // console.log("last post reached ", postList.lastPost);
              setPostList({...postList,lastPost:true});
            }
              
      }catch(err){
        jump.current-=2;
        isFetching.current = false;
        if(jump.current<0)jump.current = 0;
        // console.error(err,'e');
      }
    }
    // console.log(isFetching.current,'isFetching');
    // console.log(postList.lastPost, 'lastpost');
    if(!isFetching.current && !postList.lastPost)// <------------------------------------------------
    {fetchList();
      isFetching.current = true;
    }  
    return ()=>{
      // console.log("abort signal called");
      controller.abort();
    }
  },[endReach]);
  
      
  const getSearch = (value)=>{
    jump.current= 0;
    isFetching.current = false;
    setPostList({posts:[], search:value, lastPost:false});
    setEndReach(!endReach);
  };
  
  

  return (
    <>
    
        <SearchBar getSearch={getSearch}/>
                
         <Box component= "div" sx = {{display : "flex", flexDirection : "column", alignItems : "center" }}>
            {postList.posts?.map((post)=><PostList key={post?.images[0]?.imageId} post = {post}/>)}
         </Box>
          {postList.lastPost && <span>LastPost reached</span>}
    
      
    </>
  )
}

export default Expreince
