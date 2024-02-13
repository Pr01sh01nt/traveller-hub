import React, { useState, useRef, useMemo, memo } from 'react'
import SearchList from './SearchList'
import { searchData } from '../../pages/people/searchData'
import { Box, Button, TextField, IconButton } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = ({ getSearch }) => {

    const [search, setSearch] = useState("");
    const [display, setDisplay] = useState(false);
    let searchResult = searchData(search);
    console.log(searchResult);
    const inputTag = useRef({});


    const handleFocus = () => {
        setDisplay(!display);
    }

    const handleSearch = () => {
        getSearch(search);
    }

    const handleKeyDown = (event) => {
        // console.log(event.code);
        if (event.code === "Enter")
            getSearch(search);
    }
    return (
        <>
            <Box component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2, mb: 0 }}>
                <Box component="div">
                    <TextField variant="outlined" placeholder="Search post by places..." onChange={(e) => { setSearch(e.target.value) }} onKeyDown={handleKeyDown} ref={inputTag} onFocus={handleFocus} onBlur={handleFocus} />
                    <IconButton sx={{ backgroundColor: "#4d5fe8", height: 60.5, borderRadius: 0 }} onClick={handleSearch}><SearchIcon sx={{ fontSize: 30, color: "white" }} /></IconButton>
                </Box>
                <Box component="div" sx={searchResultContainerStyle}>
                    {display && searchResult?.map((result) => <SearchList key={result} result={result} inputTag={inputTag} setValue={{ setSearch, getSearch }} />)}

                </Box>
            </Box>
        </>
    )
}

export default SearchBar

const searchResultContainerStyle = {
    border: "solid 1px black",
    borderBottom: "0px",
    borderTop: "0px",
    width: 262,
    pl: 1,
    borderRadius: "0px  0px 15px 15px",
    position: "absolute",
    top: 177,
    zIndex: 1,
    background: "grey"
}