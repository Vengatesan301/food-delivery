import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



// const Header = () => {
//   const [btnNameReact, setBtnNameReact] = useState("Login");
//   const onlineStatus = useOnlineStatus();
//   const { loggedInUser } = useContext(UserContext);

//   // Subscribing to the store using a Selector
//   const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <header className="flex justify-between items-center bg-gradient-to-r from-orange-200 to-orange-300 p-6 shadow-lg">
//       {/* Logo Section */}
//       <div className="logo-container">
//         <img
//           className="w-20 sm:w-32 lg:w-20 "
//           src={LOGO_URL}
//           alt="Logo"
//         />
//       </div>

//       {/* Navigation and User Section */}
//       <nav className="flex items-center space-x-8">
//         {/* Navigation Links */}
//         <ul className="flex space-x-6 text-white font-semibold text-sm sm:text-base lg:text-lg">
//           <li className="hover:scale-105 transition transform">
//             <Link className="hover:underline" to="/">Home</Link>
//           </li>
//           <li className="hover:scale-105 transition transform">
//             <Link className="hover:underline" to="/about">About Us</Link>
//           </li>
//           <li className="hover:scale-105 transition transform">
//             <Link className="hover:underline" to="/contact">Contact Us</Link>
//           </li>
//           <li className="hover:scale-105 transition transform">
//             <Link className="hover:underline" to="/grocery">Grocery</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Right Section */}
//       <div className="flex items-center space-x-6">
//         {/* Online Status */}
//         <span
//           className={`text-sm sm:text-base font-medium ${
//             onlineStatus ? "text-green-200" : "text-red-300"
//           }`}
//         >
//           {onlineStatus ? "✅ Online" : "🔴 Offline"}
//         </span>

//         {/* Cart Link */}
//         <Link
//           to="/cart"
//           className="text-sm sm:text-base font-bold text-white hover:underline"
//         >
//           Cart ({cartItems.length} items)
//         </Link>

//         {/* Login/Logout Button */}
//         <button
//           className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-100 shadow-lg transition"
//           onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
//         >
//           {btnNameReact}
//         </button>

//         {/* User Info */}
//         {loggedInUser && (
//           <span className="text-sm sm:text-base font-semibold text-white">
//             {loggedInUser}
//           </span>
//         )}
//       </div>
//     </header>
//   );
// };



// export default Header;


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex flex-wrap justify-between items-center bg-gradient-to-r from-orange-300 via-orange-200 to-orange-300 p-4 md:p-6 shadow-md">
      {/* Logo Section */}
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-16 sm:w-20 lg:w-24 hover:scale-110 transition-transform duration-300"
            src={LOGO_URL}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-8 mt-4 md:mt-0">
        <ul className="flex space-x-4 sm:space-x-6 text-white font-semibold text-sm md:text-base lg:text-lg">
          <li>
            <Link className="hover:underline hover:text-yellow-200" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:underline hover:text-yellow-200" to="/about">About Us</Link>
          </li>
          <li>
            <Link className="hover:underline hover:text-yellow-200" to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link className="hover:underline hover:text-yellow-200" to="/grocery">Grocery</Link>
          </li>
        </ul>
      </nav>

      {/* Right Section */}
      <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 mt-4 md:mt-0">
        {/* Online Status */}
        <span
          className={`text-xs sm:text-sm font-medium ${
            onlineStatus ? "text-green-500" : "text-red-500"
          }`}
        >
          {onlineStatus ? "✅ Online" : "🔴 Offline"}
        </span>

        {/* Cart Link */}
        <Link
          to="/cart"
          className="text-xs sm:text-sm md:text-base font-bold text-white hover:text-yellow-200 hover:underline"
        >
          Cart ({cartItems.length} items)
        </Link>

        {/* Login/Logout Button */}
        <button
          className="px-3 py-2 bg-white text-purple-600 text-xs sm:text-sm md:text-base font-semibold rounded-lg hover:bg-purple-100 shadow-md transition"
          onClick={() =>
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
          }
        >
          {btnNameReact}
        </button>

        {/* User Info */}
        {loggedInUser && (
          <span className="text-xs sm:text-sm md:text-base font-semibold text-white">
            {loggedInUser}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
