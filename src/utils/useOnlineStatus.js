import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, useonlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      useonlineStatus(false);
    });
    window.addEventListener("online", () => {
      useonlineStatus(true);
    });
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;
