const Entry = ({ entry }) => {
    return (
      <div className='search'>
        <a href={entry.url} target="_blank" rel="noreferrer">{entry.title}</a>
      </div>
    );
  };
  
export default Entry;
  