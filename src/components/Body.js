import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const [lat, setLat] = useState(13.1197626); 
  const [lng, setLng] = useState(80.1904968);

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

 
  useEffect(() => {
    fetchData();
  }, [lat, lng]);


let API_URL = "https://food-delivery-backend-eerj.onrender.com"
//let API_URL="http://localhost:5000"


 

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}/api/restaurants?lat=${lat}&lng=${lng}`);
      if (!response.ok) throw new Error("Failed to fetch restaurant list");
      const json = await response.json();
      
      const isMobile = window.innerWidth <= 768; 
      const cardIndex = isMobile ? 1 : 1; 
      console.log(json?.data,"uuuuuii")
      
      const restaurants = json?.data?.cards[cardIndex]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      
      setListOfRestaurants(restaurants || []);
      setFilteredRestaurant(restaurants || []);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      setListOfRestaurants([]);
      setFilteredRestaurant([]);
    }finally {
      setLoading(false); // Set loading to false after fetching
    }
  };
  
  
  console.log(filteredRestaurant,listOfRestaurants,"reeeeee")

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-xl font-bold mt-8 text-red-600">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);
 

  return loading ? (
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









