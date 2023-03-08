import { useState } from "react";
import PaginationBar from "./PaginationBar";

const Search = ({
  entries,
  setEntries,
  setIsLoading,
  setActivePage,
  setEmptyResult,
  activePage,
}) => {
  const [searchText, setSearchText] = useState();

  const clearEntries = () => {
    setEntries([]);
  };

  const handleSearch = (activePage = false) => {
    clearEntries();
    if (searchText) {
      setIsLoading(true);
      console.log(`search fired for ${searchText}`);
      console.log(`activePage ${activePage}`);
      fetch(
        `https://hn.algolia.com/api/v1/search?query=${searchText}&page=${activePage}`
      )
        // `https://hn.algolia.com/api/v1/search?query=${searchText})`
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

  const handlePagination = (value) => {
    console.log(value);
    setActivePage(value);
    handleSearch(value);
  };

  return (
    <>
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
            handleSearch(activePage);
          }}
        >
          search
        </button>
      </div>
      <div>
        {entries.length > 0 && (
          // Array.from({ length: 50 }, (_, i) => (
          //   <div className='pageLink' key={i} onClick={handlePagination}>
          //     {i}
          //   </div>
          // ))
          <PaginationBar
            handlePagination={handlePagination}
            activePage={activePage}
          />
        )}
      </div>
    </>
  );
};

export default Search;
