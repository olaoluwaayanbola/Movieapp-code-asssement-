import React, { createContext } from 'react'
import './Search.scss'
const Search = () => {
  return (
    <div className="search-container">
      <label htmlFor="search">Search</label>
      <input type="text" placeholder='search' name='search' />
    </div>
  )
}

export default Search