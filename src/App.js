import { useEffect, useState } from "react";
import Search from "./components/Search";
import EmptyResult from "./components/EmptyResult";
import Entry from "./components/Entry";
import loading from "./images/loading.gif";

function App() {
  const [entries, setEntries] = useState([]);
  const [emptyResult, setEmptyResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [entries]);

  const handlePagination = () => {};

  return (
    <div>
      <Search
        entries={entries}
        setEntries={setEntries}
        setIsLoading={setIsLoading}
        setEmptyResult={setEmptyResult}
      />
      <div>
        {entries.length > 0 &&
          Array.from({ length: 50 }, (_, i) => (
            <div className='pageLink' key={i} onClick={handlePagination}>
              {i}
            </div>
          ))}
      </div>
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
