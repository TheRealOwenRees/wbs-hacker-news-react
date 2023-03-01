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
      {entries.map((entry) => <Entry entry={entry} setIsLoading={setIsLoading} />)}
    </div>
  )
}

export default App;
