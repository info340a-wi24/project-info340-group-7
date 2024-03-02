import React from 'react';

function SearchBar({ onSearch, suggestSearch }) {
  return (
    <div className="searchBar">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search for a job..." id="searchInput" />
        <button className="btn btn-primary" type="button" onClick={onSearch}>Search</button>
      </div>

      <div className="btn-group">
        <button type="button" className="btn btn-secondary" onClick={() => suggestSearch('Barista')}>Barista</button>
        <button type="button" className="btn btn-secondary" onClick={() => suggestSearch('Electrician')}>Electrician</button>
        <button type="button" className="btn btn-secondary" onClick={() => suggestSearch('Janitor')}>Janitor</button>
      </div>
    </div>
  );
}

export default SearchBar;