import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input 
      className='pa3 ba b--green br3'
      type='search' 
      placeholder='Search your friends' 
      onChange = {searchChange}
      />
    </div>
  );
}

export default SearchBox;