

import React, { useContext, useState, useEffect } from "react";
import { Spin } from "antd";
// import "antd/dist/antd.css"; // Import Ant Design styles
 import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  // State to manage loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or processing delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after data is ready
    }, 1000); // 1-second delay for demonstration

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // if (loading) {
  //   // Show loading spinner when `loading` is true
  //   return (
  //     <div className="flex justify-center items-center h-64">
  //       <Spin size="large" tip="Loading..." />
  //     </div>
  //   );
  // }

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-6 w-[320px] rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:scale-105"
    >
      {/* Restaurant Image */}
      <img
        className="rounded-lg w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
  
      {/* Restaurant Details */}
      <div className="pt-6">
        {/* Restaurant Name */}
        <h3 className="font-bold text-xl text-gray-800 truncate hover:text-orange-500 cursor-pointer transition-colors duration-300">
          {name}
        </h3>
  
        {/* Cuisines */}
        <p className="text-sm text-gray-600 my-3">{cuisines.join(", ")}</p>
  
        {/* Ratings and Delivery Info */}
        <div className="flex justify-between items-center my-4">
          {/* Rating */}
          <span
            className={`px-3 py-1 rounded-full text-white font-semibold text-sm ${
              avgRating >= 4
                ? "bg-green-500"
                : avgRating >= 3
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            {avgRating} ★
          </span>
  
        
          
        </div>
  
        
        <div className="text-gray-700 border-t pt-4 mt-4 border-gray-300">
          <p className="text-sm font-semibold">Cost for Two: {costForTwo}</p>
        </div>
  
        {/* Logged-In User */}
        <div className="mt-6 text-center bg-gray-100 py-2 rounded-lg">
          <p className="text-xs text-gray-500 italic">Logged in as: {loggedInUser}</p>
        </div>
      </div>
    </div>
  );
  
};






export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
