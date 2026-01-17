import { useState } from "react";

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  return (
    <div className="p-4 bg-gray-50 border-b">
      <input
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search by location (e.g. Pune, Delhi)"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          onSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
