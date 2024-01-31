import React from 'react'

const searchList = ({result,inputTag, setValue:{setSearch, getSearch}}) => {
    const handlMouseDown = ()=>{
      inputTag.current.value=result;
      getSearch(result); 
      setSearch(result)
       
    }
  return (
    <>
       <div onMouseDown = {handlMouseDown}>
        
        {result}
       </div>
    </>
  )
}

export default searchList
