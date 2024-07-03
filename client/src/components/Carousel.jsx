import React, { useState } from 'react';
import { Box, Stack, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Carousel = ({ cardComponents }) => {
    let length = cardComponents.length;

    console.log(cardComponents)
    const [indexes, setIndexes] = useState({ prev: (length - 1), curr: 0, next: 1 });

    const handlePrevClick = () => {
        let index = indexes.curr - 1;
        if (index < 0) index = index + length;
        setIndexes({ prev: (index - 1 + length) % length, curr: index, next: (index + 1) % length });
    }

    const handleNextClick = () => {
        let index = indexes.curr + 1;
        if (index >= length) index = index % length;
        setIndexes({ prev: (index - 1 + length) % length, curr: index, next: (index + 1) % length });
    }

    // console.log(indexes);

    if (length != 0) {
        return (
            <>
                <Box
                    component="div"
                    className='flex justify-center items-center'

                >

                    <div
                        className='flex '
                    >

                        <Button
                            sx={{ minWidth: 0, lm: 0, rm: 0 }}
                            variant="contained"
                            onClick={handlePrevClick}
                            className='bg-transparent'
                        >

                            <ArrowBackIosNewIcon 
                                fontSize='large'
                            />
                        </Button>




                        <div className=' relative ml-[20px] mr-[20px]  h-fit w-[20vw] bg-white rounded-xl'>

                            {cardComponents[indexes.prev]}
                        </div>


                        <div className=' relative ml-[20px] mr-[20px] w-[25vw]  bg-white rounded-xl'>

                            {cardComponents[indexes.curr]}
                        </div>



                        <div className=' relative ml-[20px] mr-[20px]  h-fit w-[20vw] bg-white rounded-xl'>

                            {cardComponents[indexes.next]}
                        </div>



                        <Button
                            sx={{ minWidth: 0, lm: 0, rm: 0 }}
                            variant="contained"
                            onClick={handleNextClick}
                            className=' bg-transparent'
                        >
                            <ArrowForwardIosIcon 
                                 fontSize='large'
                            />
                        </Button>

                    </div>
                </Box>
            </>
        )
    }
    return <></>
}

export default Carousel
