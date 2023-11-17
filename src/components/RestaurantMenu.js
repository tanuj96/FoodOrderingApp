import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9545631&lng=75.7439885&restaurantId=${"54532"}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    // console.log(jsonData)
    // const restaurant_list = "restaurant_grid_listing";
    // const resturantData = jsonData.data?.cards?.find((card) => {
    //   return card.card?.card?.id === restaurant_list;
    // });

    // const resturantList =
    //   resturantData?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
    //     (res) => res.info
    //   );

    //   const selectedMenu = resturantList.filter((menu)=> (menu.id==="55473"));
    setResInfo(jsonData.data);
  };

  if (resInfo !== null && resMenu === null) {
    const menu = resInfo?.cards[0]?.card?.card?.info;

    setResMenu(menu);
    const itemCard =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    console.log(itemCard);
  }

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resMenu?.name}</h1>
      <p>
        {resMenu?.cuisines.join(", ")} - {resMenu?.costForTwoMessage}
      </p>
      <ul>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Diet COke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
