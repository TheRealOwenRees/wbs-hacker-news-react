import { useEffect, useState } from "react";
import Search from "./components/Search";
import EmptyResult from "./components/EmptyResult";
import Entry from "./components/Entry";
import loading from "./images/loading.gif";
import { Pagination } from "semantic-ui-react";

function App() {
  const [entries, setEntries] = useState([]);
  const [emptyResult, setEmptyResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [numberPages, setNumberPages] = useState(0);
  const [apiUrl, setApiUrl] = useState();
  const [searchText, setSearchText] = useState();
  const [numberEntries, setNumberEntries] = useState(0);
  const [loadingTime, setLoadingTime] = useState();

  useEffect(() => {
    setIsLoading(false);
  }, [entries]);

  const onChange = (e, pageInfo) => {
    setActivePage(pageInfo.activePage);
    setApiUrl(
      `https://hn.algolia.com/api/v1/search?query=${searchText}&page=${
        pageInfo.activePage - 1
      }`
    );
  };

  return (
    <div>
      <Search
        entries={entries}
        setEntries={setEntries}
        setIsLoading={setIsLoading}
        setEmptyResult={setEmptyResult}
        searchText={searchText}
        setSearchText={setSearchText}
        apiUrl={apiUrl}
        setApiUrl={setApiUrl}
        setNumberPages={setNumberPages}
        setActivePage={setActivePage}
        numberEntries={numberEntries}
        setNumberEntries={setNumberEntries}
        loadingTime={loadingTime}
        setLoadingTime={setLoadingTime}
      />

      <div>
        {emptyResult && <EmptyResult />}
        {isLoading === true && <img src={loading} alt="loading"></img>}
        {entries.length > 1 &&
          entries.map((entry) => (
            <Entry
              key={entry.objectID}
              entry={entry}
              setIsLoading={setIsLoading}
            />
          ))}
      </div>
      <div className="pagination-section">
        {entries.length > 0 && (
          <Pagination
            totalPages={numberPages}
            activePage={activePage}
            onPageChange={onChange}
          />
        )}
      </div>
    </div>
  );
}

export default App;
