



import React, { useContext } from "react";
import User from "./User";
 import UserClass from "./UserClass";
 import { Component } from "react";
 import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate(); // Hook for navigation
  const { loggedInUser } = useContext(UserContext); // Access UserContext

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Page Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Discover who we are and why we do what we do.
        </p>
      </header>

      {/* Why Choose Us Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 border rounded-lg shadow-md bg-white text-center hover:bg-orange-100 transition duration-300">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your food delivered to your doorstep in less than 30 minutes.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white text-center hover:bg-orange-100 transition duration-300">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">
              We partner with the best restaurants to bring you fresh,
              high-quality meals.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white text-center hover:bg-orange-100 transition duration-300">
            <h3 className="text-lg font-bold text-gray-700 mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our support team is available round the clock to assist you.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-white text-center hover:bg-orange-100 transition duration-300">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Affordable Prices
            </h3>
            <p className="text-gray-600">
              Enjoy delicious meals at the best prices in town.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Satisfy Your Hunger?
        </h2>
        <p className="text-gray-600 mb-6">
          Join thousands of happy customers who trust us for their meals.
        </p>
        <button
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
          onClick={() => navigate("/")} // Use navigate hook
        >
          Order Now
        </button>
      </div>

      {/* Logged-in User Section */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Logged-in User</h2>
        <p className="text-gray-600">{loggedInUser || "Guest"}</p>
      </div>
    </div>
  );
};

export default About;
