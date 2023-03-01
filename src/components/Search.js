const Search = ( {entries, setEntries }) => {

  const handleSearch = () => {
    console.log("search fired")
    fetch('http://hn.algolia.com/api/v1/search?query=react&page=1')
    .then(response => response.json())
    .then(data => setEntries(data.hits)); 
  }

    return (
      <div className='search' id='search'>
        <h1>Header</h1>
        <input type='text' />
        <button type='button' onClick={handleSearch}>
          Submit
        </button>
      </div>
    );
  };
  
  export default Search;
  