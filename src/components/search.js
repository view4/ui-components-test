import React from 'react';
import searchIndicator from "../assets/search.svg"

const Search = () => {
    return (
        <div className={"search-container"}>
            <img src={searchIndicator} />
                <input type={"text"} />
        </div>
    )
}

export default Search