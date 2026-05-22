
import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {

  const [query, setQuery] = useState('');

  return (

    <div
      className="
        flex
        items-center
        justify-between
        bg-white
        border
        border-[#C7D2FE]
        rounded-[4px]
        px-[10px]
        h-[40px]
        w-[400px]
      "
    >

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Find influencers to collaborate with"
        className="
          flex-1
          bg-transparent
          outline-none
          text-[15px]
          text-[#6B7280]
          placeholder:text-[#9CA3AF]
        "
      />

      <Search
        className="
          w-[13px]
          h-[13px]
          text-[#6B7280]
          flex-shrink-0
        "
      />

    </div>

  );
}