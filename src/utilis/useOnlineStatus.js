import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnelineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnelineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnelineStatus(false);
    
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
