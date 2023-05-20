import React from 'react';
import { SearchInput } from './SearchBarStyle';

const SearchBar = ({ placeholder, disabled, onValueChange }) => {
  return (
    <SearchInput
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        onChange={(event) => onValueChange(event.target.value)}
    />
  );
};

export default SearchBar;
