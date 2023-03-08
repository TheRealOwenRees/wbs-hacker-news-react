import { useState } from "react";
import { Pagination } from "semantic-ui-react";

const Search = ({
  entries,
  setEntries,
  setIsLoading,
  activePage,
  setActivePage,
  setEmptyResult,
}) => {
  const [searchText, setSearchText] = useState();

  const clearEntries = () => {
    setActivePage(1);
    setEntries([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(activePage);
    }
  };

  const handleSearch = (activePage = false) => {
    // activePage && setActivePage(activePage);
    console.log("activePage", activePage);
    if (searchText) {
      setIsLoading(true);
      console.log(`search fired for ${searchText}`);
      fetch(
        `https://hn.algolia.com/api/v1/search?query=${searchText}&page=${activePage}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.nbHits > 0) {
            console.log(data);
            setEmptyResult(false);
            clearEntries();
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

  const handlePagination = (value) => {
    // // clearEntries();
    setActivePage(value);
    console.log("value", value);
    handleSearch(value);
  };
  const onChange = (event, pageInfo) => {
    setActivePage(pageInfo.activePage);
    handleSearch(event.target.attributes.value.value);
    // setApiUrl(
    //   "https://swapi.co/api/people/?page=" + page.activePage.toString()
    // );
  };

  return (
    <>
      <div className='search-bar'>
        <div className='search-bar-title'><p>Hacker News</p></div>
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
          <Pagination
            defaultActivePage={1}
            totalPages={50}
            activePage={activePage}
            // onPageChange={onChange}
            // onPageChange={(event) =>
            //   handlePagination(event.target.attributes.value.value)
            // }
            onClick={(event) =>
              handlePagination(event.target.attributes.value.value)
            }
          />
        )}
      </div>
    </>
  );
};

export default Search;
