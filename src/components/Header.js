import React, { useContext, useState } from "react";
import { URL_LOGO } from "../utilis/constants";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { AuthContext } from "../utilis/AuthContext";

const Header = () => {
  const username = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const cart = useSelector((store) => store?.cart?.items);
  // console.log(username);
  return (
    <div className="flex justify-between">
      <div className="main_logo">
        <Link to="/">
          <img className="w-100 h-36" alt="main_logo" src={URL_LOGO} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          {username.loggedInUser && (
            <li className="px-2 m-3 font-bold">
              <Link to="/home">Home</Link>
            </li>
          )}

          {username.loggedInUser && (
            <li className="px-2 m-3 font-bold">
              <Link to="/contact">Contact us</Link>
            </li>
          )}
          {username.loggedInUser && (
            <li className="px-2 m-3 font-bold">
              <Link to="/grocerymart">GroceryMart</Link>
            </li>
          )}

          {username.loggedInUser && (
            <li className="px-2 m-3 font-bold">
              <Link to="/cart">Cart - ({cart.length})</Link>
            </li>
          )}

          {username?.loggedInUser ? (
            <li className="px-2 m-3 font-bold">
              <button onClick={() => logout()}>Logout</button>
            </li>
          ) : (
            <li className="px-2 m-3 font-bold">
              <Link to="/">Login</Link>
            </li>
          )}
          <li className="px-2 m-3 font-bold">
            {username?.loggedInUser?.username}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
