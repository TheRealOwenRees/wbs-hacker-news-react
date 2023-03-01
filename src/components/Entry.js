const Entry = ({ entry, setIsLoading }) => {
    return (
      <div className='search'>
        {setIsLoading(false)}
        <a href={entry.url} target="_blank" rel="noreferrer">{entry.title}</a>
      </div>
    );
  };
  
export default Entry;
  