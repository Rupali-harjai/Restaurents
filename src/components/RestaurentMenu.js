import React, { useEffect, useState } from "react";
import { URL_DISH } from "../utilis/constants";
// import { URL_ITEM } from "../utilis/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useListResponse from "../utilis/useListResponse";
import RestaurentCategory from "./RestaurentCategory.js";

const RestaurentMenu = () => {
  // const [listResponse, setListResponse] = useState(null);
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const listResponse = useListResponse(resId);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     (URL_ITEM + resId)
  //   );
  //   const response = await data.json();
  //   console.log(response);
  //   setListResponse(response.data);
  // };

  let {
    cuisines = "",
    name = "",
    avgRating = "",
    areaName = " ",
    totalRatings = "",
    sla: { deliveryTime } = {},
  } = listResponse?.cards[2]?.card?.card?.info || {};

  const catogories =
    listResponse?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("menus", listResponse);

  return listResponse === null ? (
    <Shimmer />
  ) : (
    <>
      <div
        key={listResponse?.cards[2]?.card?.card?.info.id}
        className="text-center w-6/12 mx-auto flex flex-col cursor-pointer mb-10"
      >
        <h1 className="font-bold p-3 m-3 text-xl">{name}</h1>
        {Array.isArray(cuisines) && (
          <h2 className="font-semibold p-1 m-1 text-md">
            {cuisines.join(", ")}
          </h2>
        )}
        {catogories &&
          catogories.map((category, index) => (
            <RestaurentCategory
              key={category.card.card.id}
              id={category.card.card.id}
              data={category.card.card}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
      </div>
    </>
  );
};

export default RestaurentMenu;
