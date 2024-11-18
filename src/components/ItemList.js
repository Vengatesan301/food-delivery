import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

// const ItemList = ({ items, dummy }) => {
//   const dispatch = useDispatch();

//   const handleAddItem = (item) => {
   
//     dispatch(addItem(item));
//   };

//   return (
//     <div>
//       {items.map((item) => (
//         <div
//           data-testid="foodItems"
//           key={item.card.info.id}
//           className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
//         >
//           <div className="w-9/12">
//             <div className="py-2">
//               <span>{item.card.info.name}</span>
//               <span>
//                 - ₹
//                 {item.card.info.price
//                   ? item.card.info.price / 100
//                   : item.card.info.defaultPrice / 100}
//               </span>
//             </div>
//             <p className="text-xs">{item.card.info.description}</p>
//           </div>
//           <div className="w-3/12 p-4">
//             <div className="absolute">
//               <button
//                 className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
//                 onClick={() => handleAddItem(item)}
//               >
//                 Add +
//               </button>
//             </div>
//             <img src={CDN_URL + item.card.info.imageId} className="w-full" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="container mx-auto p-4">
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-4 mb-6 bg-white rounded-lg shadow-lg flex justify-between items-center hover:shadow-2xl transition-shadow"
        >
          {/* Text Section */}
          <div className="w-8/12 pr-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.card.info.name}
            </h3>
            <div className="text-md text-gray-700 my-1">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {item.card.info.description}
            </p>
          </div>

          {/* Image and Button Section */}
          <div className="w-4/12 flex flex-col items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <button
              className="px-4 py-2 rounded-md bg-gradient-to-r from-green-400 to-green-600 text-white text-sm font-medium hover:from-green-500 hover:to-green-700 shadow-md transition"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};





export default ItemList;
