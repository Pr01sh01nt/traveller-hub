import React, { useState, useRef } from 'react';
import { Box, Stack, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Carousel = ({ cardComponents }) => {
    let length = cardComponents.length;
    
    const [indexes, setIndexes] = useState({prev:(length-1), curr : 0, next : 1});

    const handlePrevClick = () => {
            let index = indexes.curr-1;
            if(index<0)index = index + length;
            setIndexes({prev: (index-1+length)%length, curr : index, next : (index+1)%length});
    }

    const handleNextClick = () =>{
        let index = indexes.curr + 1;
        if(index >= length)index = index % length;
        setIndexes({prev: (index-1+length)%length, curr : index, next : (index+1)%length});
    }
    console.log(indexes);

    if (length != 0) {      
        return (
            <>
                <Box component="div">
                    <Stack spacing={2} direction="row"   justifyContent="center"  >
                        <Button sx ={{minWidth:0, lm:0, rm:0}} variant = "contained" onClick={handlePrevClick}>

                            <ArrowBackIosNewIcon  />
                        </Button>
                            {cardComponents[indexes.prev]}
                        {/* <Box component="div"> */}

                            {cardComponents[indexes.curr]}
                        {/* </Box> */}
                            {cardComponents[indexes.next]}

                        <Button   sx ={{minWidth:0 , lm:0, rm:0}} variant = "contained" onClick={handleNextClick}>
                            <ArrowForwardIosIcon  />
                        </Button>

                    </Stack>
                </Box>
            </>
        )
    }
    return <></>
}

export default Carousel
