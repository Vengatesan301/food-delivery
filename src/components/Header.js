import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

 
  const cartItems = useSelector((store) => store.cart.items);

 
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 shadow-md">
      <div className="flex justify-between items-center p-4 md:p-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-12 sm:w-16 lg:w-20 hover:scale-110 transition-transform duration-300"
              src={LOGO_URL}
              alt="Logo"
            />
          </Link>
        </div>
  
        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            className="text-white hover:text-yellow-200 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
  
       
        <nav
  className={`fixed top-0 left-0 w-3/4 h-full bg-orange-500 text-white z-50 transform ${
    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300 shadow-lg md:static md:translate-x-0 md:bg-transparent md:shadow-none md:flex md:items-center md:space-x-8`}
>
  <ul className="flex flex-col md:flex-row mt-16 md:mt-0 space-y-4 md:space-y-0 text-base font-semibold p-6 md:p-0">
    <li>
      <Link
        className="hover:text-yellow-200 hover:underline block pr-2"
        to="/"
        onClick={() => setIsMobileMenuOpen(false)} // Close the menu on click
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        className="hover:text-yellow-200 hover:underline block pr-2"
        to="/about"
        onClick={() => setIsMobileMenuOpen(false)} // Close the menu on click
      >
        About Us
      </Link>
    </li>
    <li>
      <Link
        className="hover:text-yellow-200 hover:underline block pr-2"
        to="/contact"
        onClick={() => setIsMobileMenuOpen(false)} // Close the menu on click
      >
        Contact Us
      </Link>
    </li>
    <li>
      <Link
        className="hover:text-yellow-200 hover:underline block pr-2"
        to="/grocery"
        onClick={() => setIsMobileMenuOpen(false)} // Close the menu on click
      >
        Grocery
      </Link>
    </li>
  </ul>
</nav>

  
        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6 whitespace-nowrap text-base">
          {/* Online Status */}
          <span
            className={`font-medium ${
              onlineStatus ? "text-green-500" : "text-red-500"
            }`}
          >
            {onlineStatus ? "✅ Online" : "🔴 Offline"}
          </span>
  
          {/* Cart Link */}
          <Link
            to="/cart"
            className="font-bold text-white hover:text-yellow-200"
          >
            Cart ({cartItems.length})
          </Link>
  
          {/* Login/Logout Button */}
          <button
            className="px-4 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-100 shadow-md transition"
            onClick={() =>
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
            }
          >
            {btnNameReact}
          </button>
  
          {/* User Info */}
          {loggedInUser && (
            <span className="font-medium text-white">{loggedInUser}</span>
          )}
        </div>
      </div>
  
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
  
};

















export default Header;
