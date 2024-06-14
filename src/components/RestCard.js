import React from "react";
import { URL_IMG } from "../utilis/constants";

const RestCard = (props) => {
  const { restData } = props;
  // console.log(restData);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla: { deliveryTime },
  } = restData;
  return (
    <div
      data-testid="restCardID"
      className="w-[240px] h-auto bg-[#fec38b] rounded-md p-4 m-5"
    >
      <img
        className="rounded-md"
        alt="meghna food"
        src={URL_IMG + cloudinaryImageId}
        height={60}
      />
      <h3 className="font-bold #432900 py-2">{name}</h3>
      <h4 className="font-semibold break-words mb-1">{cuisines.join(",")}</h4>
      <h5 className="font-semibold break-words mb-1">{avgRating} stars</h5>
      <h4 className="font-semibold break-words ">{deliveryTime} minutes</h4>
    </div>
  );
};

// Higher order component
export const withDiscount = (RestCard) => {
  return ({ discountName, discountValue, ...rest }) => {
    return (
      <div className="relative">
        <label className="absolute top-0 left-2 bg-[#cb7631] rounded-md font-bold p-2">
          {discountName}: {discountValue}
        </label>
        <RestCard {...rest} />
      </div>
    );
  };
};

export default RestCard;
