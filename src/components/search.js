import React, { useState } from "react";
import searchIndicator from "../assets/search.svg";
import { search } from "../constants";
import Button from "./button";

const DropdownElement = ({ search }) => {
    const {text, color} = search
  return (
    <div>
      <span style={{background: color}}>col here</span>
      <span>{text}</span>
      <span>{">"}</span>
    </div>
  );
};

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div className={"search-container"}>
        <img src={searchIndicator} />
        <input type={"text"} onFocus={() => setIsFocused(true)} />
      </div>
      {isFocused && (
        <div>
          Recent Searches
          {search.map((searchItem, i) => (
            <DropdownElement search={searchItem} key={i} />
          ))}
          <Button text="Adddress Search" bg={"#6C5DD3"} />
        </div>
      )}
    </>
  );
};

export default Search;
