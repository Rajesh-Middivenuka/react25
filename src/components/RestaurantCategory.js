import ListOfItems from "./ListOfItems";
import React from "react";
import { useState } from "react";
const RestaurantCategory = ({ cardData }) => {
  console.log(cardData);
  const [showItems, setshowItems] = useState(false);

  const handleClick = () => {
    setshowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-100 shadow-lg p-5 mx-auto my-5 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bol text-lg ">
            {cardData.itemCards.title} ({cardData.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && (
          <ListOfItems
            key={cardData.itemCards.length}
            items={cardData.itemCards}
            showItems={false}
          />
        )}
      </div>
    </div>
  );
};
export default RestaurantCategory;
