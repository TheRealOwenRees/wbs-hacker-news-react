import { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";

const Search = ({ entries, setEntries, setIsLoading, setEmptyResult }) => {
  const [searchText, setSearchText] = useState();
  const [activePage, setActivePage] = useState(0);
  const [numberPages, setNumberPages] = useState(0);
  // const [numberEntries, setNumberEntries] = useState(0);
  const [apiUrl, setApiUrl] = useState();

  // const clearEntries = () => {
  //   setEntries([]);
  // };

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
            // setNumberEntries(data.nbHits);
            setEntries([]);
            setEntries(data.hits);
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

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
    setApiUrl(
      `https://hn.algolia.com/api/v1/search?query=${searchText}&page=${pageInfo.activePage-1}`);
  };

  return (
    <>
      <div className='search-bar'>
        <div className='search-bar-title'>
          <p>Hacker News</p>
        </div>
        <input
          className='search-bar-input'
          type='text'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button type='search-bar-button' onClick={handleSubmit}>
          search
        </button>
      </div>
      <div>
        {entries.length > 0 && (
          <Pagination
            totalPages={numberPages}
            activePage={activePage}
            onPageChange={onChange}
          />
        )}
      </div>
    </>
  );
};

export default Search;
