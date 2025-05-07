
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import TopRatedRestaurant from "./TopRatedRestaurant";
import { Link } from "react-router-dom";
const api = import.meta.env.VITE_API_URL;

function Body() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const accessToken = localStorage.getItem("accessToken");
    // const response = await fetch("http://localhost:3000/api/restaurants", {
    const response = await fetch(`${api}/api/restaurants`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${accessToken}`,
      },
    });
    const data = await response.json();
    setRestaurants(data);
  }

  return (
    <div className="w-carouselwidth mx-auto">
      <h2 className="text-headingColor font-extrabold text-2xl">
        Restaurants with online food delivery
      </h2>

      <SearchBar restaurantData={restaurants} showFilteredRestaurant={setRestaurants} />
      <TopRatedRestaurant searchName={restaurants} setSearchName={setRestaurants} />

      <div className="grid grid-cols-4 gap-3 cursor-pointer">
        {restaurants.map((restaurant) => (
          <Link key={restaurant._id} to={`/restaurant/${restaurant._id}`}>
            <RestaurantCard information={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;

