import { useState } from "react";

const Search = ( {entries, setEntries }) => {

  const [searchText, setSearchText] = useState()

  const handleSearch = () => {
    console.log(`search fired for ${searchText}`)
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchText}`)
    .then(response => response.json())
    .then(data => setEntries(data.hits)); 
  }

  return (
    <div className='search' id='search'>
      <h1>Header</h1>
      <input 
        type='text' 
        value={searchText} 
        onChange={(e) => setSearchText(e.target.value)}/>
      <button type='button' onClick={handleSearch}>
        Submit
      </button>
    </div>
  );
};
  
  export default Search;
  