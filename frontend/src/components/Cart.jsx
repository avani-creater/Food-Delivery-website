import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 text-lg mt-10">Your cart is empty.</div>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col lg:flex-row items-center justify-between gap-4 border-b p-4 mb-6 shadow-sm"
          >
            <div className="flex flex-col flex-1">
              <h1 className="text-xl font-semibold text-gray-800">{item.name}</h1>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              <p className="text-base font-medium text-green-700 mt-2">{item.defaultPrice}</p>
            </div>

            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full sm:w-44 h-32 object-cover rounded-md border shadow-md"
            />

            <div className="flex flex-col gap-2">
              <button
                onClick={() => dispatch(addItem(item))}
                className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
              >
                Add + ({item.quantity})
              </button>
              <button
                onClick={() => dispatch(removeItem(item))}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
