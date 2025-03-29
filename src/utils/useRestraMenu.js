import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
const useRestraMenu = (resId) => {
  const [resData, setRestData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setRestData(json);
  };
  return resData;
};
export default useRestraMenu;
