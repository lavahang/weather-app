const SearchSection =() =>{
    return (
      <div className="search-section">
        <form action="#" className="search-form" >
          <span className="material-symbols-rounded">search</span>
          <input type="search" placeholder="Enter a city name" className="search-input"  required />
        </form>
        <button className="location-button" >
          <span className="material-symbols-rounded">my_location</span>
        </button>
      </div>
    );
  };
  export default SearchSection;