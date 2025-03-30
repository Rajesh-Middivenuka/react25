import RestaurantCard from "./RestaurantCard";
import { useState, useEffect ,useContext} from "react";
import Simmer from "./Simmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
const Body = () => {
  const{loggedInUser,setUserName}=useContext(UserContext)
  const [listOfResto, setlistOfResto] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterlistofResto, setfilterlistofResto] = useState([]);
  const RestaCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const responce = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9576222&lng=77.704956&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const data = await responce.json();

    let dataDes = data?.data?.cards || [];

    let mapData = dataDes
      .map((val, index) => {
        return val?.card?.card;
      })
      .filter((val) => {
        return val?.info;
      });
    setlistOfResto(mapData);
    console.log(listOfResto);
    setfilterlistofResto(mapData);
  };
  // if (listOfResto.length === 0) {
  //   return <Simmer />;
  // }
  let onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>looks like your are offline</h1>;
  }
  return listOfResto.length === 0 ? (
    <Simmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="searchBox m-4 p-4">
          <input
            type="text"
            className="searcBox border border-solid broder-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-300 m-4 cursor-pointer"
            onClick={() => {
              let searchFilter = listOfResto.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setfilterlistofResto(searchFilter);
            }}
          >
            search
          </button>{" "}
          <button
            className="filter-btn bg-blue-500 text-white rounded cursor-pointer"
            onClick={() => {
              const filterList = listOfResto.filter((res) => {
                return res?.info?.avgRating > 3.5;
              });

              setlistOfResto(filterList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
        <div className="searchBox m-4 p-4">
          <button
            className="filter-btn bg-blue-500 text-white px-2 py-2 rounded"
            onClick={() => {
              const filterList = listOfResto.filter((res) => {
                return res?.info?.avgRating > 3.5;
              });
              setlistOfResto(filterList);
            }}
          >
            Top rated Restaurants
          </button>

        </div>
        <div className="searchBox m-4 p-4">
          <label>UserName</label>
          <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
        </div>
      </div>
      <div className="res-container flex flex-wrap content-center">
        {filterlistofResto.map((val, index) => {
          console.log(val?.info?.promoted);
          return (
            <Link key={val.info.id} to={"/restromenu/" + val.info.id}>
              {val?.info?.promoted ? (
                <RestaCardPromoted resCard={val} />
              ) : (
                <RestaurantCard resCard={val} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
