import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
 import '../styles/navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm(''); // Clear input after search
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">MoviePanel</Link>
      <Link to='/top-rated'>TopRated</Link>
      <Link to='/upcoming'>Upcoming</Link>
      
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Movies..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
