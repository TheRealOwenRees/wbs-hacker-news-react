import './App.css';
import Search from './components/Search'
import Entry from './components/Entry'
import { useEffect, useState } from 'react';
import loading from './images/loading.gif'

function App() {

  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false)
  }, [entries])

  return (
    <div>
      <h1>Hacker News Search</h1>
      <Search entries={entries} setEntries={setEntries} setIsLoading={setIsLoading} />
      {isLoading === true && <img src={loading} alt="loading"></img>}
      {entries.length > 1
      ? entries.map((entry) => <Entry key={entry.objectID} entry={entry} setIsLoading={setIsLoading} />)
      : <p>No results were found</p>}
    </div>
  )
}

export default App;
