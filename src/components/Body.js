import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// const Body = () => {
//   // Local State Variable - Super powerful variable
//   const [listOfRestaurants, setListOfRestraunt] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

//   const [searchText, setSearchText] = useState("");

//   const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

//   // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1197626&lng=80.1904968&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"      
//     );

//     const json = await data.json();
//     console.log( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

//     // Optional Chaining
//     setListOfRestraunt(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredRestaurant(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };


 
  
//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false)
//     return (
//       <h1>
//         Looks like you're offline!! Please check your internet connection;
//       </h1>
//     );

//   const { loggedInUser, setUserName } = useContext(UserContext);

//   return listOfRestaurants?.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="filter flex">
//         <div className="search m-4 p-4">
//           <input
//             type="text"
//             data-testid="searchInput"
//             className="border border-solid border-black"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="px-4 py-2 bg-green-100 m-4 rounded-lg"
//             onClick={() => {
//               // Filter the restraunt cards and update the UI
//               // searchText
//               console.log(searchText);

//               const filteredRestaurant = listOfRestaurants?.filter((res) =>
//                 res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
//               );

//               setFilteredRestaurant(filteredRestaurant);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="search m-4 p-4 flex items-center">
//           <button
//             className="px-4 py-2 bg-gray-100 rounded-lg"
//             onClick={() => {
//               const filteredList = listOfRestaurants.filter(
//                 (res) => res.info.avgRating > 4
//               );
//               setFilteredRestaurant(filteredList);
//             }}
//           >
//             Top Rated Restaurants
//           </button>
//         </div>
//         <div className="search m-4 p-4 flex items-center">
//           <label>UserName : </label>
//           <input
//             className="border border-black p-2"
//             value={loggedInUser}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//         </div>
//       </div>
//       <div className="flex flex-wrap">
//         {filteredRestaurant?.map((restaurant) => (
//           <Link
//             key={restaurant?.info.id}
//             to={"/restaurants/" + restaurant?.info?.id}
//           >
//             {restaurant?.info.promoted ? (
//               <RestaurantCardPromoted resData={restaurant?.info} />
//             ) : (
//               <RestaurantCard resData={restaurant?.info} />
//             )}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Body = () => {
//   // Local State Variables
//   const [listOfRestaurants, setListOfRestraunt] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1197626&lng=80.1904968&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();
//     setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   };

//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false)
//     return (
//       <h1 className="text-center text-xl font-bold mt-8">
//         Looks like you're offline! Please check your internet connection.
//       </h1>
//     );

//   const { loggedInUser, setUserName } = useContext(UserContext);

//   return listOfRestaurants?.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body p-4">
//       <div className="filter flex flex-col sm:flex-row sm:justify-between mb-8">
//         {/* Search Input */}
//         <div className="search p-4 flex flex-col sm:flex-row items-center gap-4">
//           <input
//             type="text"
//             data-testid="searchInput"
//             className="border border-solid border-black p-2 w-full sm:w-auto"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             placeholder="Search for a restaurant..."
//           />
//           <button
//             className="px-4 py-2 bg-green-100 rounded-lg"
//             onClick={() => {
//               const filtered = listOfRestaurants?.filter((res) =>
//                 res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurant(filtered);
//             }}
//           >
//             Search
//           </button>
//         </div>

//         {/* Top Rated Button */}
//         <div className="search p-4 flex items-center justify-center">
//           <button
//             className="px-4 py-2 bg-gray-100 rounded-lg"
//             onClick={() => {
//               const filteredList = listOfRestaurants.filter(
//                 (res) => res.info.avgRating >= 4.5
//               );
//               setFilteredRestaurant(filteredList);
//             }}
//           >
//             Top Rated Restaurants
//           </button>
//         </div>

//         {/* Username Input */}
//         <div className="search p-4 flex items-center justify-center">
//           <label className="mr-2">UserName:</label>
//           <input
//             className="border border-black p-2"
//             value={loggedInUser}
//             onChange={(e) => setUserName(e.target.value)}
//             placeholder="Enter your username"
//           />
//         </div>
//       </div>

//       {/* Restaurant Cards Grid */}
//       <div className="restaurant-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredRestaurant?.map((restaurant) => (
//           <Link
//             key={restaurant?.info.id}
//             to={"/restaurants/" + restaurant?.info?.id}
//             className="flex justify-center"
//           >
//             {restaurant?.info.promoted ? (
//               <RestaurantCardPromoted resData={restaurant?.info} />
//             ) : (
//               <RestaurantCard resData={restaurant?.info} />
//             )}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };
// const Body = () => {
//   const [listOfRestaurants, setListOfRestraunt] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1197626&lng=80.1904968&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();
//     setListOfRestraunt(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredRestaurant(
//       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };

//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false)
//     return (
//       <h1 className="text-center text-xl font-bold mt-8 text-red-600">
//         Looks like you're offline! Please check your internet connection.
//       </h1>
//     );

//   const { loggedInUser, setUserName } = useContext(UserContext);

//   return listOfRestaurants?.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body p-4 bg-gray-50">
//       {/* Filters Section */}
//       <div className="filter flex flex-col sm:flex-row sm:justify-between mb-8">
//         {/* Search Input */}
//         <div className="search p-4 flex flex-col sm:flex-row items-center gap-4">
//           <input
//             type="text"
//             data-testid="searchInput"
//             className="border border-gray-300 p-3 w-full sm:w-80 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-400"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             placeholder="Search for a restaurant..."
//           />
//           <button
//             className="px-6 py-2 bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600 transition"
//             onClick={() => {
//               const filtered = listOfRestaurants?.filter((res) =>
//                 res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
//               );
//               setFilteredRestaurant(filtered);
//             }}
//           >
//             Search
//           </button>
//         </div>

//         {/* Top Rated Button */}
//         <div className="search p-4 flex items-center justify-center">
//           <button
//             className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 transition"
//             onClick={() => {
//               const filteredList = listOfRestaurants.filter(
//                 (res) => res.info.avgRating >= 4.5
//               );
//               setFilteredRestaurant(filteredList);
//             }}
//           >
//             Top Rated Restaurants
//           </button>
//         </div>

//         {/* Username Input */}
//         <div className="search p-4 flex flex-col sm:flex-row items-center gap-4">
//           <label className="font-medium text-gray-700">Username:</label>
//           <input
//             className="border border-gray-300 p-3 w-full sm:w-80 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={loggedInUser}
//             onChange={(e) => setUserName(e.target.value)}
//             placeholder="Enter your username"
//           />
//         </div>
//       </div>

//       {/* Restaurant Cards Grid */}
//       <div className="restaurant-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredRestaurant?.map((restaurant) => (
//           <Link
//             key={restaurant?.info.id}
//             to={"/restaurants/" + restaurant?.info?.id}
//             className="flex justify-center"
//           >
//             {restaurant?.info.promoted ? (
//               <RestaurantCardPromoted resData={restaurant?.info} />
//             ) : (
//               <RestaurantCard resData={restaurant?.info} />
//             )}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1197626&lng=80.1904968&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-xl font-bold mt-8 text-red-600">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-6 bg-gray-50">
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center text-orange-500">
          Discover Delicious Restaurants
        </h1>
        <p className="text-lg text-center text-gray-600 mt-2">
          Explore your favorite cuisines and find your next meal.
        </p>
      </header>

      {/* Filters Section */}
      <div className="filters flex flex-col sm:flex-row sm:justify-between mb-10 items-center gap-6">
        {/* Search Input */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-gray-300 p-3 w-full sm:w-80 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for a restaurant..."
          />
          <button
            className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md shadow hover:bg-orange-600 transition"
            onClick={() => {
              const filtered = listOfRestaurants?.filter((res) =>
                res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 transition"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>

        {/* User Input */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <label className="font-medium text-gray-700">Username:</label>
          <input
            className="border border-gray-300 p-3 w-full sm:w-80 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
      </div>

      {/* Featured Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Featured Restaurants
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {listOfRestaurants?.slice(0, 4).map((restaurant) => (
            <div
              key={restaurant.info.id}
              className="w-full sm:w-1/2 lg:w-1/4 p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-gray-800">
                {restaurant.info.name}
              </h3>
              <p className="text-gray-600">{restaurant.info.cuisines.join(", ")}</p>
              <p className="text-sm text-gray-500">⭐ {restaurant.info.avgRating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Restaurant Cards Grid */}
      <div className="restaurant-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info?.id}
            className="flex justify-center"
          >
            {restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};




export default Body;
