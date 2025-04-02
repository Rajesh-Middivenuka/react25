import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Heading = () => {
 
  const onlineStatus = useOnlineStatus();
  const [btnName, setbtnName] = useState("login");
  const {loggedInUser}=useContext(UserContext)
  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems)
  return (
    <div className="flex justify-between bg-pink-400 shadow-lg items-center">
      <div className="image-container">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex ">
          <li className="px-4">
            online status:{onlineStatus ? "✅✅" : "🔴🔴"}
          </li>
          <li className="px-4">
            <Link to="/home">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <Link to="/cart">
          <li className="px-4 font-bold text-xl">Cart {cartItems.length}</li>
          </Link>
          
          <button
            className="loginBtn"
            onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="mx-3">user {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Heading;
