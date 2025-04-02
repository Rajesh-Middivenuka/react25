import { useEffect } from "react";
import { useState,useState } from "react";
import Simmer from "./Simmer";
import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants";
import useRestraMenu from "../utils/useRestraMenu";
import RestaurantCategory from "./RestaurantCategory";
const Restromenupage = () => {
  const { resId } = useParams();
  const resData = useRestraMenu(resId);
  const[showIndex,setShowIndex]=useState(0)
  if (resData === null) {
    return <Simmer />;
  }
  const { name, avgRatingString, cuisines, id } = resData?.data?.cards?.filter(
    (val) => {
      return val?.card?.card?.info;
    }
  )[0]?.card?.card?.info;
  let cata =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (data) => {
        return (
          data.card.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log(cata);
  return (
    <div className="text-center">
      <h1 className="font-bold my-8 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines}</p>
      {cata.map((data, index) => (
        <RestaurantCategory key={index} cardData={data?.card?.card } showItems={index===showIndex? true:false } setShowIndex={()=>setShowIndex(index)}/>
      ))}
    </div>
  );
};
export default Restromenupage;
