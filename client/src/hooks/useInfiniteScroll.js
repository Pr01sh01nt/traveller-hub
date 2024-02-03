import React,{useState, useEffect} from 'react'


const useInfiniteScroll = (isFetching, last) => {
  let [endReach, setEndReach] = useState(false);
  

  console.log('useInfiniteScroll');
  
  useEffect(() => { 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScroll=(event)=> {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight)
         { 
           console.log('Fetch more list items!');
           if(!isFetching.current && !last)
           {          
               endReach = !endReach;
              setEndReach(endReach);
         
            }
        }
        
  }



  return [endReach, setEndReach];

}

export default useInfiniteScroll;
