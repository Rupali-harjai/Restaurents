import React from "react";
import ItemCards from "./ItemCards";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utilis/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mx-auto w-6/12 ">
      <div>
        <h1 className="font-bold text-3xl text-center pb-5 mb-5 underline">
          Cart
        </h1>

        {cartItems.length > 0 ? (
          <button
            className="font-bold text-md text-center m-2 p-2 bg-black text-white rounded-md"
            onClick={handleClear}
          >
            Clear Cart
          </button>
        ): <p className="font-bold text-xl text-center mb-7">There is no item in the cart.</p>}
      </div>
      <ItemCards items={cartItems} />
    </div>
  );
};

export default Cart;
