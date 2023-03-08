import { useState } from "react";

const Search = ({ setEntries, setIsLoading, setEmptyResult }) => {
  const [searchText, setSearchText] = useState();

  const clearEntries = () => {
    setEntries([]);
  };

  const handleSearch = () => {
    clearEntries();
    if (searchText) {
      setIsLoading(true);
      console.log(`search fired for ${searchText}`);
      fetch(`https://hn.algolia.com/api/v1/search?query=${searchText}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.nbHits > 0) {
            console.log(data);
            setEmptyResult(false);
            setEntries(data.hits);
          } else {
            setEmptyResult(true);
          }
        })
        .catch((error) => {
          console.log(error);
          alert("There was an error retrieving the data");
        });
    } else {
      alert("Please enter a search term");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className='search-bar'>
      <div className='search-bar-title'>Hacker News</div>
      <input
        className='search-bar-input'
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <button
        type='search-bar-button'
        onClick={() => {
          handleSearch();
        }}
      >
        search
      </button>
    </div>
  );
};

export default Search;
