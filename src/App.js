import './App.css';
import Search from './components/Search'
import Entry from './components/Entry'
import { useState } from 'react';

function App() {

  const [entries, setEntries] = useState([]);
  
  return (
    <div>
      <h1>Hacker News Search</h1>
      <Search entries={entries} setEntries={setEntries}/>
      {entries.map((entry) => <Entry entry={entry} />)}
    </div>
  )
}

export default App;
