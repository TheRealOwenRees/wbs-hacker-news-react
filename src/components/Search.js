import { useEffect, useState } from "react";

const Search = ({
  setEntries,
  setEmptyResult,
  searchText,
  setSearchText,
  apiUrl,
  setApiUrl,
  setNumberPages,
  setActivePage,
  numberEntries,
  setNumberEntries,
  loadingTime,
  setLoadingTime,
}) => {
  useEffect(() => {
    if (searchText) {
      console.log(`search fired for ${searchText}`);
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.hits.length > 0) {
            console.log(data);
            setEmptyResult(false);
            setNumberPages(data.nbPages);
            setNumberEntries(data.nbHits);
            setEntries([]);
            setEntries(data.hits);
            setLoadingTime(data.serverTimeMS);
          } else {
            setEntries([]);
            setEmptyResult(true);
          }
        })
        .catch((error) => {
          console.log(error);
          alert("There was an error retrieving the data");
        });
    }
  }, [apiUrl]);

  const handleSubmit = () => {
    setActivePage(0);
    setApiUrl(
      `https://hn.algolia.com/api/v1/search?query=${searchText}&page=0`
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setActivePage(0);
      setApiUrl(
        `https://hn.algolia.com/api/v1/search?query=${searchText}&page=0`
      );
    }
  };

  return (
    <>
    <div className='search-bar'>
      <div className='search-title'>
        <a href='https://konstrukteur.github.io/hacker-news-react/'>
          <img src={require("../images/logo-hn.png")}></img>
        </a>
        <a href='/'>
          <div className='search-title-label'>
            Search
            <br />
            Hacker News
          </div>
        </a>
      </div>
      <div className='search-bar-input'>
        <input
          className='search-input'
          type='text'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder='Search stories by title, url or author'
        />
      </div>
      <button
        className='search-bar-button'
        type='button'
        onClick={handleSubmit}
      >
        search
      </button>
    </div>
    <div className='search-filters-container'>
      <div className='search-filters-selectors'></div>
      <div className='search-meta-data'>
        {numberEntries &&
          `${numberEntries} results (${loadingTime / 1000} seconds)`}
      </div>
    </div>
  </>
  );
};

export default Search;
