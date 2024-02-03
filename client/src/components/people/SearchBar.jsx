import React, { useState, useRef, useMemo, memo } from 'react'
import SearchList from './SearchList'
import { searchData } from '../../pages/people/searchData'

const SearchBar = ({getSearch}) => {
    
    const [search, setSearch] = useState("");
    const [display, setDisplay] = useState(false);
    let searchResult = searchData(search);
    console.log(searchResult);
    const inputTag = useRef({});


    const handleFocus = () => {
        setDisplay(!display);
    }

    const handleSearch = ()=>{
        getSearch(search);
    }

    const handleKeyDown=(event)=>{
        // console.log(event.code);
        if(event.code==="Enter")
          getSearch(search);
    }
    return (
        <>
            <div >
                <input placeholder="Search post by places..." onChange={(e) => { setSearch(e.target.value) } } onKeyDown={handleKeyDown} ref={inputTag} onFocus={handleFocus} onBlur={handleFocus} />
                <button onClick = {handleSearch}>Search</button>
                {display && searchResult?.map((result) => <SearchList key={result} result={result} inputTag={inputTag} setValue={{setSearch,getSearch}} />)}
            </div>
        </>
    )
}   

export default SearchBar
