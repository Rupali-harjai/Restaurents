// AuthContext.js
import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const login = (userData) => {
    setLoggedInUser(userData);
    sessionStorage.setItem("userData", JSON.stringify(userData));
    console.log("userdata", userData);
  };

  const logout = () => {
    setLoggedInUser(null);
    sessionStorage.setItem("userData", JSON.stringify({}));
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
