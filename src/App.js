import Search from "./components/Search";
import Entry from "./components/Entry";
import { useEffect, useState } from "react";
import loading from "./images/loading.gif";

function App() {
  const [entries, setEntries] = useState([]);
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
      />
      <div>
        {entries.length > 0
          ? Array.from({ length: 50 }, (_, i) => (
              <div className='pageLink' key={i} onClick={handlePagination}>
                {i}
              </div>
            ))
          : "huhu"}
      </div>
      <div>
        {isLoading === true && <img src={loading} alt='loading'></img>}
        {entries.length > 1 ? (
          entries.map((entry) => (
            <Entry
              key={entry.objectID}
              entry={entry}
              setIsLoading={setIsLoading}
            />
          ))
        ) : (
          <p>No results were found</p>
        )}
      </div>
    </div>
  );
}

export default App;
