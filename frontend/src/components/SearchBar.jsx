import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ restaurantData, showFilteredRestaurant }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const filteredRestaurant = restaurantData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      showFilteredRestaurant(filteredRestaurant);
    }, 300); // 300ms debounce delay

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, restaurantData, showFilteredRestaurant]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center my-8 px-4">
      <input
        type="text"
        placeholder="Search for restaurant, item or more"
        className="border border-gray-400 h-10 w-full sm:w-96 rounded-l-lg px-4 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="button"
        className="bg-black text-white h-10 px-4 rounded-r-lg hover:bg-gray-800 mt-2 sm:mt-0"
        aria-label="Search"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default SearchBar;
