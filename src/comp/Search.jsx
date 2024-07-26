import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search contacts"
      />
    );
  };

export default Search