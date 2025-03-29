import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, sla } =
    props.resCard.info;

  return (
    <div className="res-card m-4 p-4 w-[250px] border-2 rounded-md bg-gray-400">
      <h3 className="font-bold">{name}</h3>
      <img
        className="res-logo rounded-md"
        src={`${CDN_URL}${cloudinaryImageId}`}
      ></img>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{`${sla.deliveryTime} minutes`}</h4>
    </div>
  );
};
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="bg-dark">
        <label className="bg-black rounded-lg text-white">promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
