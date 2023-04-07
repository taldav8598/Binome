import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigation } from "react-router-dom";


function SearchResults() {
  const location = useLocation();
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8000/v1/organisms/search`)
    .then(res => res.json())
    .then(data => setResults(data));
  }, [])

    return (
        <div className="flex bg-[url('./assets/forest.jpg')] bg-center" id="background">
      <div className={`flex flex-col w-full h-full items-center bg-black bg-opacity-75`}>
        <div className="flex flex-col w-full my-2 mx-2 p-0">
        <Link className="m-1 p-4 text-green-400" to="..">
        <svg width="64px" height="64px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#4ade80"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
        </Link>
        <h2 className="p-1 text-4xl text-center text-green-400">{`Search results for "${location.state}" (${results.length} results found)`}</h2>
        </div>
        <div>
        <ul className="flex flex-col text-white items-center justify-center my-2 mx-0">
        <li className="m-4 py-2 px-10 border-2 border-yellow-400 rounded-lg text-yellow-400 font-bold text-xl bg-black">
        Common Name - Scientific Name
        </li>
          {
            results.map((organism, index) => {
              return (
                <li 
                className="m-2 py-2 px-10 border-2 border-green-400 rounded-lg text-green-400 font-bold text-xl bg-black"
                key={index}>
                {organism.commonName} - {organism.scientificName}
                </li>
                );
            })
          }
        </ul>
        </div>
      </div>
    </div>
    )
}

export default SearchResults;