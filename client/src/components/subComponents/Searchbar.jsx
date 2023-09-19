import React, { useEffect } from "react";
import searchIcon from "../../assets/searchIcon.svg";
import { Link } from 'react-router-dom';
import submitCommonName from '../../hooks/useOrganisms'

const SearchBar = ({ onSearchChange, searchQuery, organismsQuery }) => {

    // @ TODO - POST searchQuery to backend
    // useEffect(() => {
    // async function fetchOrganisms() {
    //   const response = await fetch('http://localhost:8000')
    //   const data = await response.json()
    //   console.log(data);
    // }
    // fetchOrganisms().catch(err => console.log(err));
    // }, []);

    return (
    <form 
    className="flex m-2 w-full justify-center items-center" 
    onSubmit={organismsQuery.submitCommonName}
    >
    <input title="input" 
    className="flex w-2/3 p-3 border-4 border-green-400 rounded-l-lg focus:outline-0 bg-green-100 placeholder:text-slate-500 placeholder:font-bold font-bold text-green-900"
    placeholder="Enter organism common name"
    id="common-name"
    name="common-name"
    onChange={(event) => onSearchChange(event.target.value)}
    value={searchQuery}
    >
    </input>
    <button
    className="relative items-end p-2 bg-green-400 rounded-r-lg"
    value={searchQuery}
    type="submit"
    id="button"
    >
        <img 
        id="button"
        className="flex p-0 m-0" src={searchIcon} alt="searchIcon"/>
    </button>
    </form>
    );
}

export default SearchBar;