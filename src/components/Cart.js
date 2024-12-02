



import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 sm:px-8">
      {/* Cart Header */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 text-center">
        Your Cart
      </h1>

      {/* Cart Container */}
      <div className="w-full sm:w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12 bg-white rounded-xl shadow-lg p-8 flex flex-col space-y-6">
        
        {/* Clear Cart Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-700">Items in Cart</h2>
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {/* Empty Cart Message */}
        {cartItems?.length === 0 ? (
          <div className="text-center text-gray-500 py-6">
            <h2 className="text-xl font-medium">Your cart is empty!</h2>
            <p className="text-sm mt-2">Add some items to see them here.</p>
          </div>
        ) : (
          // Cart Items List
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;

