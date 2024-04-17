'use client';

import React, { useState } from 'react';

const SearchComponent = ({ data, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    const filtered = data.filter((item) =>
      item.treatment.toLowerCase().includes(event.target.value.toLowerCase())
    );
    onSearch(filtered);
  };

  return (
    <div className=" flex justify-center mb-1 ">
      <input
        type="text"
        placeholder="SÖK SERVICE"
        value={searchQuery}
        onChange={handleSearchChange}
        className="py-2 bg-inherit border border-primary w-[200px] text-center rounded-full placeholder-primary"
        />
    </div>
  );
};

export default SearchComponent;