import React from 'react'
import Box from '@mui/material/Box' 
// import { StyledEngineProvider } from '@mui/material/styles';



const searchList = ({result,inputTag, setValue:{setSearch, getSearch}}) => {
    const handlMouseDown = ()=>{
      inputTag.current.value=result;
      getSearch(result); 
      setSearch(result)
       
    }
  return (
    <>
       <Box  component = "div" sx={styles} onMouseDown = {handlMouseDown}>
        
        {result}
       </Box> 
    </>
  )
}

export default searchList

const styles = {
  borderBottom: "2px solid black", 
  width : 260, 
  height : "2em", 
  pt : 1,  
  textAlign : "center",
  cursor : "pointer",

}