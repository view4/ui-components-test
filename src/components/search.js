import React, { useState } from "react";

import Button from "./button";

import { search } from "../constants";

import searchIndicator from "../assets/search.svg";
import escIndicator from "../assets/esc.svg";
import rightChevron from "../assets/right.svg";

import "./search.css";

const DropdownElement = ({ search }) => {
    const {text, color} = search
  return (
    <div className={"search-item-container"}>
      <div className={"search-item-col-block"} style={{background: color}}></div>
      <span className={"search-item-text"}>{text}</span>
      <span><img src={rightChevron} /> </span>
    </div>
  );
};

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={'search-container'}>
      <div className={"search-input-container"}>
        <img src={ !isFocused ? searchIndicator : escIndicator} onClick={() => setIsFocused(!isFocused)} />
        <input type={"text"} onFocus={() => setIsFocused(true)} placeholder={isFocused ? "Type your text here" : "Search" } />
      </div>
      {isFocused && (
        <div className="search-suggestions-container">
          <span className={"search-suggestions-text"}>Recent Searches </span>
          {search.map((searchItem, i) => (
            <DropdownElement search={searchItem} key={i} />
          ))}
          <Button text="Advance Search" bg={"#6C5DD3"} />
        </div>
      )}
    </div>
  );
};

export default Search;
