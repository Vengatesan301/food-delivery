import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);

//   console.log(cartItems);

//   const dispatch = useDispatch();

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <div className="text-center m-4 p-4">
//       <h1 className="text-2xl font-bold">Cart</h1>
//       <div className="w-6/12 m-auto">
//         <button
//           className=" p-2 m-2 bg-black text-white rounded-lg"
//           onClick={handleClearCart}
//         >
//           Clear Cart
//         </button>
//         {cartItems?.length === 0 && (
//           <h1> Cart is empty. Add Items to the cart!</h1>
//         )}
//         <ItemList items={cartItems} />
//       </div>
//     </div>
//   );
// };
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* Cart Header */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Your Cart</h1>

      {/* Cart Container */}
      <div className="w-11/12 md:w-8/12 lg:w-6/12 bg-white rounded-xl shadow-lg p-6">
        {/* Clear Cart Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-700">Items in Cart</h2>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {/* Empty Cart Message */}
        {cartItems?.length === 0 ? (
          <div className="text-center text-gray-500">
            <h2 className="text-lg font-medium">Your cart is empty!</h2>
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
