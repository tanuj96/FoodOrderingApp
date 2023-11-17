import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const swiggyJsonData = await data.json();
    const restaurant_list = "restaurant_grid_listing";
    const resturantData = swiggyJsonData.data?.cards?.find((card) => {
      return card.card?.card?.id === restaurant_list;
    });

    const resturantList =
      resturantData?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      );
    setListOfRestaurants(resturantList);
    setfilteredRestaurant(resturantList);
  };

  //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredSearchRestaurant = listOfRestaurants.filter(
                (res) => res.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredSearchRestaurant)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurants.filter((resturant) => {
              return resturant.avgRating > 4;
            });
            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link key={restaurant.id}  to={`/restaurants/${restaurant.id}`}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
