import React from "react";
import useOnlineStatus from "../utilis/useOnlineStatus";

const OnlineStatus = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="font-bold text-sm">
      {" "}
      Status: {onlineStatus ? "🟢" : "🔴"}
    </div>
  );
};

export default OnlineStatus;
