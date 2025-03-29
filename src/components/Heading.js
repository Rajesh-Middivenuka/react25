import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Heading = () => {
  const onlineStatus = useOnlineStatus();
  const [btnName, setbtnName] = useState("login");
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
          <li className="px-4">Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Heading;
