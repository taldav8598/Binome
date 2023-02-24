import React, { useState } from "react";
import SearchBar from "./components/Searchbar";



function App() { 
  const [ inputFocus, setInputFocus ] = useState(false);
  const [ searchQuery, setSearchQuery ] = useState("");

  const onOpenSearch = ( event ) => {
    if (!inputFocus && event.target.id === "search" && event.type === "mousedown") {
      setInputFocus(true);
    }  else if (inputFocus && event.target.id === "button" && event.type === "mousedown") {
      setInputFocus(true);
    } else if (!inputFocus && event.target.id === "button" && event.type === "mousedown") {
      setInputFocus(false);
    } else {
      setInputFocus(false);
    }
  };
  
  const onSearchChange = query => {
    return setSearchQuery(query);
  }

  const onFormSubmit = (event) => {

    // fetch('http/localhost:3000/search', {
    //   method: 'post',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //     search: searchQuery
    //   })
    // });

    // setSearchQuery("");
    // setInputFocus(false);

    // TODO - add route change

    event.preventDefault();
    const form = {
      searchQuery: searchQuery
    };
    setSearchQuery("");
    setInputFocus(false);
    console.log(form);
    return form;
  }
  
  return (
    <div className="flex h-screen bg-[url('./assets/forest.jpg')] bg-center" id="background" onMouseDown={(event) => onOpenSearch(event)}>
      <div className={`flex w-full h-full justify-center items-${inputFocus ? "start" : "center"} bg-black bg-opacity-75`}>
        <div className="flex flex-col w-1/2 p-0">
        <h1 className="p-6 text-8xl text-center text-green-400">Binome</h1>
        <SearchBar
        onOpenSearch={onOpenSearch}
        onSearchChange={onSearchChange}
        searchQuery={searchQuery}
        onFormSubmit={onFormSubmit}
        />
        {inputFocus && <ul className="flex flex-col text-white items-center justify-center my-2 mx-0">
          <li className="m-2 py-4 px-40 border-2 border-green-400 rounded-lg text-green-400 font-bold text-2xl">Hello</li>
        </ul>
        }
        </div>
      </div>
    </div>
  )
}

export default App;
