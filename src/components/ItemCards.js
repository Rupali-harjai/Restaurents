import React from "react";
import { URL_DISH } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utilis/store/cartSlice";
import { removeItem } from "../utilis/store/cartSlice";

const ItemCards = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="itemFood"
          key={item?.card?.info?.name}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-lg">{item.card.info.name}</span>
              <span className="font-bold text-lg">
                {" "}
                - {item.card.info.price / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <div className="relative flex justify-between">
              <button
                className=" absolute p-0 left-2 bg-white shadow-md mr-3"
                onClick={() => handleAdd(item)}
              >
                Add+
              </button>
              <button
                className=" absolute p-0 right-1 bg-white shadow-md ml-5"
                onClick={() => handleDelete(item)}
              >
                Remove-
              </button>
            </div>
            <img
              src={URL_DISH + item?.card?.info?.imageId}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
