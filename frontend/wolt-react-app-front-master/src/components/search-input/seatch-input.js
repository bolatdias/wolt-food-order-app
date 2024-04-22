import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRate, setMinRate] = useState('');
  const [maxRate, setMaxRate] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const url = `/search?name=${searchQuery}` +
      `${minPrice !== '' ? `&minPrice=${minPrice}` : ''}` +
      `${maxPrice !== '' ? `&maxPrice=${maxPrice}` : ''}` +
      `${minRate !== '' ? `&minRate=${minRate}` : ''}` +
      `${maxRate !== '' ? `&maxRate=${maxRate}` : ''}`;

    navigate(url);
  };

  return (
    <form className="container mt-4" onSubmit={handleSearch}>
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="searchQuery" className="form-label">Search:</label>
          <input
            type="text"
            className="form-control"
            id="searchQuery"
            placeholder="e.g., snickers"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="minPrice" className="form-label">Min Price:</label>
          <input
            type="number"
            className="form-control"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="maxPrice" className="form-label">Max Price:</label>
          <input
            type="number"
            className="form-control"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <label htmlFor="minRate" className="form-label">Min Rate:</label>
          <input
            type="number"
            className="form-control"
            id="minRate"
            value={minRate}
            onChange={(e) => setMinRate(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="maxRate" className="form-label">Max Rate:</label>
          <input
            type="number"
            className="form-control"
            id="maxRate"
            value={maxRate}
            onChange={(e) => setMaxRate(e.target.value)}
          />
        </div>
        <div className="row mt-3 col-4">
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </div>
    </form>
  );
}

export default SearchInput;
