import React, { useState } from "react";
import ItemCards from "./ItemCards";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setShowIndex();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className=" bg-[#cb7631] p-2 shadow-md m-2 rounded-md">
      <div
        className="my-2 p-2 flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>{showItems && isOpen && <ItemCards items={data?.itemCards} />}</div>
    </div>
  );
};

export default RestaurentCategory;
