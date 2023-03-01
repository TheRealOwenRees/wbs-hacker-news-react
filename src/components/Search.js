import { useState } from "react";

const Search = ( {entries, setEntries, setIsLoading }) => {

  const [searchText, setSearchText] = useState()

  const handleSearch = () => {
    console.log(`search fired for ${searchText}`)
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchText}`)
    .then(response => response.json())
    .then(data => setEntries(data.hits))
    .catch(error => {
      console.log(error)
      alert('There was an error retrieving the data')
    })
  }

  return (
    <div className='search' id='search'>
      <input 
        type='text' 
        value={searchText} 
        onChange={(e) => setSearchText(e.target.value)}/>
      <button type='button' onClick={() => {
        handleSearch();
        setIsLoading(true)}}>
        Submit
      </button>
    </div>
  );
};
  
  export default Search;
  