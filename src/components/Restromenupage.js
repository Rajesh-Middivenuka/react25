import { useEffect } from "react";
import { useState } from "react";
import Simmer from "./Simmer";
import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants";
import useRestraMenu from "../utils/useRestraMenu";
import RestaurantCategory from "./RestaurantCategory";
const Restromenupage = () => {
  //const [resData, setresData] = useState(null);
  const { resId } = useParams();
  const resData = useRestraMenu(resId);
  // console.log(resData);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const responce = await fetch(MENU_API_URL + resId);
  //   const data = await responce.json();
  //   setresData(data);
  // };

  if (resData === null) {
    return <Simmer />;
  }
  const { name, avgRatingString, cuisines, id } = resData?.data?.cards?.filter(
    (val) => {
      return val?.card?.card?.info;
    }
  )[0]?.card?.card?.info;
  // console.log(
  //   resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card
  // );
  // console.log(
  //   resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
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
      {/* {resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
        (val, id) => {
          return (
            <li key={id}>
              {val?.card?.info?.name} {val?.card?.info?.price / 100}
            </li>
          );
        }
      )} */}
      {cata.map((data, id) => (
        <RestaurantCategory key={id} cardData={data?.card?.card} />
      ))}
    </div>
  );
};
export default Restromenupage;
