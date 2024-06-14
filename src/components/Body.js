import React, { useContext, useEffect, useState } from "react";
import RestCard, { withDiscount } from "./RestCard";
import Shimmer from "./Shimmer";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import { URL_LIST } from "../utilis/constants";

const Body = () => {
  const [listRest, setListRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRest, setFilterRest] = useState([]);

  const RestCardDiscount = withDiscount(RestCard);

  const handleClick = () => {
    let filteredList = listRest.filter(
      (res) => res?.info?.avgRatingString > 4.5
    );

    setFilterRest(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchText === "") {
      fetchData();
    }
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(URL_LIST);

    const response = await data.json();
    // console.log(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListRest(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRest(
      response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // console.log("body rendered");

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks you have not connected with network</h1>;

  return listRest.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center">
        <div className="p-4 ">
          <input
            className="p-2 m-2 border border-solid black rounded-md"
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-[#cb7631] rounded-md px-3 py-2 text-white font-medium"
            onClick={() => {
              const filterSearch = listRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRest(filterSearch);
              // console.log(filterSearch);
            }}
          >
            {" "}
            Search
          </button>
        </div>
        <button
          className="  px-2 py-0 my-6 text-white bg-[#cb7631] rounded-md font-medium"
          onClick={handleClick}
        >
          Top Restaurents{" "}
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filterRest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurents/" + restaurant.info.id}
          >
            {/* Check if discount information exists */}
            {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
              <RestCardDiscount
                restData={restaurant?.info}
                discountName={restaurant.info.aggregatedDiscountInfoV3.header}
                discountValue={
                  restaurant.info.aggregatedDiscountInfoV3.subHeader
                }
              />
            ) : (
              <RestCard restData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
