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
//     <header className="flex flex-wrap justify-between items-center bg-gradient-to-r from-orange-300 via-orange-200 to-orange-300 p-4 md:p-6 shadow-md">
//       {/* Logo Section */}
//       <div className="logo-container">
//         <Link to="/">
//           <img
//             className="w-16 sm:w-20 lg:w-24 hover:scale-110 transition-transform duration-300"
//             src={LOGO_URL}
//             alt="Logo"
//           />
//         </Link>
//       </div>

//       {/* Navigation Section */}
//       <nav className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-8 mt-4 md:mt-0">
//         <ul className="flex space-x-4 sm:space-x-6 text-white font-semibold text-sm md:text-base lg:text-lg">
//           <li>
//             <Link className="hover:underline hover:text-yellow-200" to="/">Home</Link>
//           </li>
//           <li>
//             <Link className="hover:underline hover:text-yellow-200" to="/about">About Us</Link>
//           </li>
//           <li>
//             <Link className="hover:underline hover:text-yellow-200" to="/contact">Contact Us</Link>
//           </li>
//           <li>
//             <Link className="hover:underline hover:text-yellow-200" to="/grocery">Grocery</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Right Section */}
//       <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 mt-4 md:mt-0">
//         {/* Online Status */}
//         <span
//           className={`text-xs sm:text-sm font-medium ${
//             onlineStatus ? "text-green-500" : "text-red-500"
//           }`}
//         >
//           {onlineStatus ? "✅ Online" : "🔴 Offline"}
//         </span>

//         {/* Cart Link */}
//         <Link
//           to="/cart"
//           className="text-xs sm:text-sm md:text-base font-bold text-white hover:text-yellow-200 hover:underline"
//         >
//           Cart ({cartItems.length} items)
//         </Link>

//         {/* Login/Logout Button */}
//         <button
//           className="px-3 py-2 bg-white text-purple-600 text-xs sm:text-sm md:text-base font-semibold rounded-lg hover:bg-purple-100 shadow-md transition"
//           onClick={() =>
//             setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
//           }
//         >
//           {btnNameReact}
//         </button>

//         {/* User Info */}
//         {loggedInUser && (
//           <span className="text-xs sm:text-sm md:text-base font-semibold text-white">
//             {loggedInUser}
//           </span>
//         )}
//       </div>
//     </header>
//   );
// };





// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [btnNameReact, setBtnNameReact] = useState("Login");
//   const onlineStatus = useOnlineStatus();
//   const { loggedInUser } = useContext(UserContext);

//   // Subscribing to the store using a Selector
//   const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <header className="flex justify-between items-center bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 p-4 shadow-md sticky top-0 z-50">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <Link to="/">
//           <img
//             className="w-12 sm:w-16 lg:w-20 hover:scale-110 transition-transform duration-300"
//             src={LOGO_URL}
//             alt="Logo"
//           />
//         </Link>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="block md:hidden">
//         <button
//           className="text-white hover:text-yellow-200 focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Navigation Section */}
//       <nav
//         className={`fixed top-0 left-0 w-3/4 h-full bg-orange-500 text-white transform ${
//           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 shadow-lg md:static md:translate-x-0 md:bg-transparent md:shadow-none md:flex md:items-center md:space-x-6`}
//       >
//         <ul className="flex flex-col md:flex-row mt-16 md:mt-0 space-y-4 md:space-y-0 text-lg font-semibold p-6 md:p-0">
//           <li>
//             <Link
//               className="hover:text-yellow-200 hover:underline block"
//               to="/"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="hover:text-yellow-200 hover:underline block"
//               to="/about"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="hover:text-yellow-200 hover:underline block"
//               to="/contact"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="hover:text-yellow-200 hover:underline block"
//               to="/grocery"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Grocery
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Right Section */}
//       <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
//         {/* Online Status */}
//         <span
//           className={`text-sm font-medium ${
//             onlineStatus ? "text-green-500" : "text-red-500"
//           }`}
//         >
//           {onlineStatus ? "✅ Online" : "🔴 Offline"}
//         </span>

//         {/* Cart Link */}
//         <Link
//           to="/cart"
//           className="text-sm font-bold text-white hover:text-yellow-200"
//         >
//           Cart ({cartItems.length})
//         </Link>

//         {/* Login/Logout Button */}
//         <button
//           className="px-3 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-100 shadow-md transition"
//           onClick={() =>
//             setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
//           }
//         >
//           {btnNameReact}
//         </button>

//         {/* User Info */}
//         {loggedInUser && (
//           <span className="text-sm font-medium text-white">
//             {loggedInUser}
//           </span>
//         )}
//       </div>
//     </header>
//   );
// };



// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [btnNameReact, setBtnNameReact] = useState("Login");
//   const onlineStatus = useOnlineStatus();
//   const { loggedInUser } = useContext(UserContext);

//   // Subscribing to the store using a Selector
//   const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <header className="flex justify-between items-center bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 p-4 shadow-md sticky top-0 z-50">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <Link to="/">
//           <img
//             className="w-12 sm:w-16 lg:w-20 hover:scale-110 transition-transform duration-300"
//             src={LOGO_URL}
//             alt="Logo"
//           />
//         </Link>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="block md:hidden">
//         <button
//           className="text-white hover:text-yellow-200 focus:outline-none"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <nav
//         className={`fixed top-0 left-0 w-3/4 h-full bg-orange-500 text-white transform ${
//           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 shadow-lg md:static md:translate-x-0 md:bg-transparent md:shadow-none md:flex md:items-center md:space-x-6`}
//       >
//         <div className="flex flex-col h-full">
//           <ul className="flex flex-col mt-16 space-y-6 text-lg font-semibold p-6">
//             <li>
//               <Link
//                 className="hover:text-yellow-200 hover:underline block"
//                 to="/"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-yellow-200 hover:underline block"
//                 to="/about"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-yellow-200 hover:underline block"
//                 to="/contact"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="hover:text-yellow-200 hover:underline block"
//                 to="/grocery"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Grocery
//               </Link>
//             </li>
//           </ul>

//           {/* Mobile Bottom Section */}
//           <div className="mt-auto flex flex-col p-6 space-y-4">
//             {/* Online Status */}
//             <span
//               className={`text-sm font-medium ${
//                 onlineStatus ? "text-green-500" : "text-red-500"
//               }`}
//             >
//               {onlineStatus ? "✅ Online" : "🔴 Offline"}
//             </span>

//             {/* Cart Link */}
//             <Link
//               to="/cart"
//               className="text-sm font-bold hover:text-yellow-200"
//             >
//               Cart ({cartItems.length})
//             </Link>

//             {/* Login/Logout Button */}
//             <button
//               className="px-3 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-100 shadow-md transition"
//               onClick={() =>
//                 setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
//               }
//             >
//               {btnNameReact}
//             </button>

//             {/* User Info */}
//             {loggedInUser && (
//               <span className="text-sm font-medium">{loggedInUser}</span>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Right Section */}
//       <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
//         {/* Online Status */}
//         <span
//           className={`text-sm font-medium ${
//             onlineStatus ? "text-green-500" : "text-red-500"
//           }`}
//         >
//           {onlineStatus ? "✅ Online" : "🔴 Offline"}
//         </span>

//         {/* Cart Link */}
//         <Link
//           to="/cart"
//           className="text-sm font-bold text-white hover:text-yellow-200"
//         >
//           Cart ({cartItems.length})
//         </Link>

//         {/* Login/Logout Button */}
//         <button
//           className="px-3 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-100 shadow-md transition"
//           onClick={() =>
//             setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
//           }
//         >
//           {btnNameReact}
//         </button>

//         {/* User Info */}
//         {loggedInUser && (
//           <span className="text-sm font-medium text-white">
//             {loggedInUser}
//           </span>
//         )}
//       </div>
//     </header>
   

//   );
// };









const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  // return (
  //   <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 shadow-md">
  //     <div className="flex justify-between items-center p-4 md:p-6">
  //       {/* Logo Section */}
  //       <div className="flex items-center">
  //         <Link to="/">
  //           <img
  //             className="w-12 sm:w-16 lg:w-20 hover:scale-110 transition-transform duration-300"
  //             src={LOGO_URL}
  //             alt="Logo"
  //           />
  //         </Link>
  //       </div>

  //       {/* Mobile Menu Button */}
  //       <div className="block md:hidden">
  //         <button
  //           className="text-white hover:text-yellow-200 focus:outline-none"
  //           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  //         >
  //           <svg
  //             className="w-8 h-8"
  //             fill="none"
  //             stroke="currentColor"
  //             strokeWidth="2"
  //             viewBox="0 0 24 24"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               d="M4 6h16M4 12h16m-7 6h7"
  //             ></path>
  //           </svg>
  //         </button>
  //       </div>

  //       {/* Navigation Section */}
  //       <nav
  //         className={`fixed top-0 left-0 w-3/4 h-full bg-orange-500 text-white transform flex justify-evenly${
  //           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
  //         } transition-transform duration-300 shadow-lg md:static md:translate-x-0 md:bg-transparent md:shadow-none md:flex md:items-center md:space-x-8`}
  //       >
  //         <ul className="flex flex-col ml-6  md:flex-row mt-16 md:mt-0 space-y-4 md:space-y-0 text-lg font-semibold p-6 md:p-0">
  //           <li>
  //             <Link
  //               className="hover:text-yellow-200 hover:underline block pr-2"
  //               to="/"
  //               onClick={() => setIsMobileMenuOpen(false)}
  //             >
  //               Home
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               className="hover:text-yellow-200 hover:underline block pr-2"
  //               to="/about"
  //               onClick={() => setIsMobileMenuOpen(false)}
  //             >
  //               About Us
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               className="hover:text-yellow-200 hover:underline block pr-2"
  //               to="/contact"
  //               onClick={() => setIsMobileMenuOpen(false)}
  //             >
  //               Contact Us
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               className="hover:text-yellow-200 hover:underline block pr-2"
  //               to="/grocery"
  //               onClick={() => setIsMobileMenuOpen(false)}
  //             >
  //               Grocery
  //             </Link>
  //           </li>
  //         </ul>
  //       </nav>

  //       {/* Right Section */}
  //       <div className="hidden md:flex items-center space-x-6 whitespace-nowrap">
  //         {/* Online Status */}
  //         <span
  //           className={`text-sm font-medium ${
  //             onlineStatus ? "text-green-500" : "text-red-500"
  //           }`}
  //         >
  //           {onlineStatus ? "✅ Online" : "🔴 Offline"}
  //         </span>

  //         {/* Cart Link */}
  //         <Link
  //           to="/cart"
  //           className="text-sm font-bold text-white hover:text-yellow-200"
  //         >
  //           Cart ({cartItems.length})
  //         </Link>

  //         {/* Login/Logout Button */}
  //         <button
  //           className="px-4 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-100 shadow-md transition"
  //           onClick={() =>
  //             setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
  //           }
  //         >
  //           {btnNameReact}
  //         </button>

  //         {/* User Info */}
  //         {loggedInUser && (
  //           <span className="text-sm font-medium text-white">
  //             {loggedInUser}
  //           </span>
  //         )}
  //       </div>
  //     </div>

  //     {/* Mobile Menu Overlay */}
  //     {isMobileMenuOpen && (
  //       <div
  //         className="fixed inset-0 bg-black bg-opacity-50 z-40"
  //         onClick={() => setIsMobileMenuOpen(false)}
  //       ></div>
  //     )}
  //   </header>
  // );
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
  
        {/* Navigation Section */}
        <nav
          className={`fixed top-0 left-0 w-3/4 h-full bg-orange-500 text-white transform  ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 shadow-lg md:static md:translate-x-0 md:bg-transparent md:shadow-none md:flex md:items-center md:space-x-8`}
        >
          <ul className="flex flex-col ml-6 md:flex-row mt-16 md:mt-0 space-y-4 md:space-y-0 text-base font-semibold p-6 md:p-0">
            <li>
              <Link
                className="hover:text-yellow-200 hover:underline block pr-2"
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow-200 hover:underline block pr-2"
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow-200 hover:underline block pr-2"
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-yellow-200 hover:underline block pr-2"
                to="/grocery"
                onClick={() => setIsMobileMenuOpen(false)}
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















export default Header;
