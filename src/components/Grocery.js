import React from "react";

const Grocery = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 p-8">
      <div className="max-w-3xl text-center bg-white/80 rounded-xl shadow-lg p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to Our Grocery Store!
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Discover fresh produce, pantry staples, and everything you need to
          make your meals delicious. Our online store is loaded with all the
          essentials and more!
        </p>
      </div>
    </div>
  );
};

export default Grocery;
