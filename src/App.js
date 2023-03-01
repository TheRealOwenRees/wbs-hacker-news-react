import './App.css';
import Search from './components/Search'
import Entry from './components/Entry'
import { useState } from 'react';
import loading from './images/loading.gif'

function App() {

  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
  return (
    <div>
      <h1>Hacker News Search</h1>
      <Search entries={entries} setEntries={setEntries} setIsLoading={setIsLoading} />
      {isLoading === true && <img src={loading}></img>}
      {entries.length > 0 
      ? entries.map((entry) => <Entry entry={entry} setIsLoading={setIsLoading} />)
      : <p>No results were found</p>}
    </div>
  )
}

export default App;
