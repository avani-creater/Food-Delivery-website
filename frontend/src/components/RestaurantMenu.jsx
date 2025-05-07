
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const api = import.meta.env.VITE_API_URL;

function RestaurantMenu() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  async function fetchMenuItems() {
    try {
      const res = await fetch(`${api}/api/restaurantMenuItems/${id}`);
      const data = await res.json();
      setMenuItems(data);
    } catch (error) {
      console.error("Failed to fetch menu items", error);
    }
  }

  function handleAddItem(item) {
    dispatch(addItem(item));
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Restaurant Menu
      </h1>

      {menuItems.length === 0 ? (
        <p className="text-center text-gray-500">Loading menu items...</p>
      ) : (
        menuItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col lg:flex-row items-center justify-between gap-4 border-b p-4 mb-6 shadow-sm"
          >
            <div className="flex flex-col flex-1">
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <p className="text-base font-medium text-green-700 mt-2">{item.defaultPrice}
              </p>
            </div>

            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full sm:w-44 h-32 object-cover rounded-md border shadow-md"
            />

            <button
              onClick={() => handleAddItem(item)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add +
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default RestaurantMenu;
