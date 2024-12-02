
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex(); // This toggles the visibility of the items
  };

  return (
    <div className="mb-6">
      {/* Category Header */}
      <div className="w-full sm:w-10/12 mx-auto my-4 bg-white shadow-md rounded-lg overflow-hidden">
        <div
          className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 transition"
          onClick={handleClick}
        >
          <span className="text-lg font-semibold text-gray-800">
            {data.title}{" "}
            <span className="text-sm text-gray-600">
              ({data.itemCards.length})
            </span>
          </span>

          {/* Toggle Icon */}
          {showItems ? (
            <span className="text-xl text-gray-700">⬆️</span>
          ) : (
            <span className="text-xl text-gray-700">⬇️</span>
          )}
        </div>

        {/* Item List */}
        {showItems && (
          <div className="p-4 bg-gray-50 rounded-b-lg">
            <ItemList items={data.itemCards} dummy={dummy} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
