import React from "react";
import searchIcon from "../assets/searchIcon.svg"
const SearchBar = ({onOpenSearch, onSearchChange, searchQuery, onFormSubmit}) => {
    return (
    <form className="flex w-full justify-center items-center" onSubmit={(onFormSubmit)}>
    <input title="search" 
    className="flex w-2/3 p-3 border-4 border-green-400 rounded-l-lg focus:outline-0 bg-green-100 placeholder:text-slate-500 placeholder:font-bold font-bold text-green-900"
    placeholder="Enter organism common name"
    id="search"
    onMouseDown={(event) => onOpenSearch(event)}
    onChange={(event) => onSearchChange(event.target.value)}
    value={searchQuery}
    >
    </input>
    <button 
    className="relative items-end p-2 bg-green-400 rounded-r-lg"
    id="button"
    onMouseDown={(event) => onOpenSearch(event)}
    >
        <img 
        id="button"
        className="flex p-0 m-0" src={searchIcon} alt="searchIcon"/>
    </button>
    </form>
    );
}

export default SearchBar;