import React, { useState } from "react";
import SearchBar from "./subComponents/Searchbar";

import useOrganisms from "../hooks/useOrganisms";

function HomePage() { 
  
  const [ searchQuery, setSearchQuery ] = useState("");  
  
  const onSearchChange = query => {
    setSearchQuery(query);
  }

  const organismsQuery = useOrganisms();

  return (
    <div className="flex h-screen bg-[url('./assets/forest.jpg')] bg-center" id="background">
      <div className={`flex w-full h-full justify-center items-center bg-black bg-opacity-75`}>
        <div className="flex flex-col w-1/2 p-0">
        <h1 className="p-6 text-8xl text-center text-green-400">Binome</h1>
        <SearchBar
        onSearchChange={onSearchChange}
        searchQuery={searchQuery}
        organismsQuery={organismsQuery}
        />
        </div>
      </div>
    </div>
  )
}

export default HomePage;