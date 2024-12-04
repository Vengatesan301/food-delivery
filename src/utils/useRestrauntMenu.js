import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };


  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) throw new Error("Failed to fetch menu data");
      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
      setResInfo(null); // Optionally set fallback or error state
    }
  };
  
  return resInfo;
};

export default useRestaurantMenu;
