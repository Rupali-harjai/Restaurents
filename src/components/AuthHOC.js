import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utilis/AuthContext";

const AuthHOC = ({ children }) => {
  const navigate = useNavigate();

  const username = useContext(AuthContext);

  useEffect(() => {
    if (!username?.loggedInUser) {
      console.log("username", username);
      navigate("/");
    }
    console.log("usernameout", username);
  }, [username]);

  return <div>{children}</div>;
};

export default AuthHOC;

// return {username ? <Outlet/> :}
