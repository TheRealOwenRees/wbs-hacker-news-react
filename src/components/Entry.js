const Entry = ({ entry, setIsLoading }) => {
    return (
      <div className='search'>
        {setIsLoading(false)}
        {entry.title}
      </div>
    );
  };
  
export default Entry;
  