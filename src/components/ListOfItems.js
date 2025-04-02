import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ListOfItems = ({ items }) => {
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  console.log(items);
  const dispatch=useDispatch()
  const handleAdditem=(val)=>{
    dispatch(addItem(val))
  }
  return (
    <div>
      {items.map((val, id) => {
        return (
          <div
            key={id}
            className="p-2 m-2 broder-black border-b-1 flex content-center"
          >
            <div className="text-left my-2 p-4">
              <span className="font-bold">{val.card.info.name}</span>{" "}
              <span>₹ {val.card.info.price / 100}</span>
              <p className="text-xs">{val.card.info.description}</p>
            </div>
            <div className="">
              <div className="absolute">
                <button onClick={()=>handleAdditem(val)} className="p-1 rounded-md bg-white shadow-lg left-0">
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + val.card.info.imageId}
                className="w-70 h-25 rounded-md"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ListOfItems;
