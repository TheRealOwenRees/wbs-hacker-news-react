import { useState } from "react";

const Search = ({ setEntries, setIsLoading }) => {
  const [searchText, setSearchText] = useState();

  const handleSearch = () => {
    if (searchText) {
      console.log(`search fired for ${searchText}`);
      fetch(`https://hn.algolia.com/api/v1/search?query=${searchText}`)
        .then((response) => response.json())
        .then((data) => {
          setEntries(data.hits);
          console.log(data);
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
      setIsLoading(true);
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
          setIsLoading(true);
          handleSearch();
        }}
      >
        search
      </button>
    </div>
  );
};

export default Search;
