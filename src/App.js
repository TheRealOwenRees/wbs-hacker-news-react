import './App.css';
import Search from './components/Search'
import Entry from './components/Entry'
import { useState } from 'react';

function App() {

  const [entries, setEntries] = useState([]);
  
  return (
    <div>
      <Search entries={entries} setEntries={setEntries}/>
      {entries.map((entry) => <Entry entry={entry} />)}
    </div>
  )
}

export default App;
