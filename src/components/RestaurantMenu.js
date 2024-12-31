import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import useIsMobile from "../utils/useIsMobile";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";
  const isMobile = useIsMobile();
const cardIndex = isMobile ? 4 : 5;

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  console.log(resInfo,"res")

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
    // const isMobile = window.innerWidth <= 768; // Define mobile view size (you can adjust this threshold)
    // const cardIndex = isMobile ? 5 : 4;
 

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories?.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          // showItems={index === showIndex ? true : false}
          // setShowIndex={() => setShowIndex(index)}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
          dummy={dummy}
         
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
