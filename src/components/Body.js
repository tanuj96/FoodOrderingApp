import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //State Variable
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
 
  const[filteredRestaurant , setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const swiggyJsonData = await data.json();
    const restaurant_list = "restaurant_grid_listing";
    const resturantData = swiggyJsonData.data?.cards?.find((card)=>{
      return card.card?.card?.id===restaurant_list;
    })

    const resturantList = resturantData?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(res=>(
      res.info
    ));
    setListOfRestaurants(resturantList) ;
    setFilteredRes(resturantList);
  };

  //Conditional Rendering
  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={()=>{
            filteredList = listOfRestaurants.filter(resturant=>{
                return resturant.avgRating>4;
            })
            setFilteredRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
