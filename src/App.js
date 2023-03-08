import { useEffect, useState } from "react";
import Search from "./components/Search";
import EmptyResult from "./components/EmptyResult";
import Entry from "./components/Entry";
import loading from "./images/loading.gif";

function App() {
  const [entries, setEntries] = useState([]);
  const [emptyResult, setEmptyResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    setIsLoading(false);
  }, [entries]);

  return (
    <div>
      <Search
        entries={entries}
        activePage={activePage}
        setEntries={setEntries}
        setIsLoading={setIsLoading}
        setEmptyResult={setEmptyResult}
        setActivePage={setActivePage}
      />
      <div>
        {emptyResult && <EmptyResult />}
        {isLoading === true && <img src={loading} alt='loading'></img>}
        {entries.length > 1 &&
          entries.map((entry) => (
            <Entry
              key={entry.objectID}
              entry={entry}
              setIsLoading={setIsLoading}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
